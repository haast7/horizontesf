import { NextRequest, NextResponse } from 'next/server'

/**
 * Hash SHA256 de uma string (requerido pelo Meta para privacidade)
 */
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * API Route para enviar eventos de conversão para o Meta Conversions API
 * Esta rota deve ser chamada do cliente, mas executa no servidor para proteger o access token
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { leadData } = body

    if (!leadData) {
      return NextResponse.json(
        { error: 'Missing leadData parameter' },
        { status: 400 }
      )
    }

    // Usar variáveis de ambiente ou valores padrão fornecidos
    const pixelId = process.env.META_PIXEL_ID || '837135372649493'
    const accessToken = process.env.META_ACCESS_TOKEN || 
      'EAAMPYSECsCgBQTFqPIP7oZBk0uxA2lA76GTxWYHSqHSZC3M63TlxtmrZBRMjNVGUli6JtJzMAmdgI3KhwGDTa77UPKAZAF3ZCOUM2ui6q0QDIIJoF7x0VMydOrYp8Y7kVZAFaD239TZCJPXyZBE5Q6icej5PlKuVs0GBvLsZAOb6bOi2GJ8SIIfEuUQlazozq6I52rgZDZD'

    // Preparar dados do evento
    const eventData: any = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: leadData.sourceUrl || '',
          user_data: {},
        },
      ],
    }

    // Hash dos dados do usuário para privacidade
    const userData: any = {}

    if (leadData.email) {
      userData.em = [await hashData(leadData.email)]
    }

    if (leadData.phone) {
      // Remove caracteres não numéricos
      const phone = leadData.phone.replace(/\D/g, '')
      if (phone) {
        userData.ph = [await hashData(phone)]
      }
    }

    // Separar nome completo em primeiro e último nome
    if (leadData.firstName) {
      userData.fn = [await hashData(leadData.firstName)]
    }
    if (leadData.lastName) {
      userData.ln = [await hashData(leadData.lastName)]
    } else if (leadData.firstName && !leadData.lastName) {
      // Se não tiver lastName separado, tentar separar do firstName
      const nameParts = leadData.firstName.trim().split(' ')
      if (nameParts.length > 1) {
        userData.fn = [await hashData(nameParts[0])]
        userData.ln = [await hashData(nameParts.slice(1).join(' '))]
      } else {
        userData.fn = [await hashData(leadData.firstName)]
      }
    }

    // Adicionar dados do cliente (IP, User Agent)
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1'
    const userAgent = request.headers.get('user-agent') || ''

    eventData.data[0].client_ip_address = clientIP.split(',')[0].trim()
    eventData.data[0].client_user_agent = userAgent

    // Adicionar dados customizados
    if (leadData.product) {
      eventData.data[0].custom_data = {
        content_name: leadData.product,
        content_category: 'lead_form',
      }
    }

    eventData.data[0].user_data = userData

    // Enviar para Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Meta Conversions API Error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send conversion to Meta', details: errorData },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error in Meta Conversion API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
