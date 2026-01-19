import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route para enviar leads para o RD Station
 * Esta rota executa no servidor para proteger o token da API
 * 
 * Suporta dois métodos:
 * 1. API Legada (form-urlencoded) - para tokens públicos antigos
 * 2. API Moderna (JSON) - para API Keys modernas
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { leadData } = body

    if (!leadData || !leadData.email) {
      return NextResponse.json(
        { error: 'Missing required parameter: email' },
        { status: 400 }
      )
    }

    // Token público da API do RD Station (API Key)
    // Usado para envio de conversões/leads
    // Configure via variável de ambiente RD_STATION_TOKEN_PUBLIC em produção
    const publicToken = process.env.RD_STATION_TOKEN_PUBLIC || process.env.RD_STATION_TOKEN || '93c7c9126b473974f313bbdf25ef397b'
    
    // Token privado da API do RD Station (para operações mais sensíveis)
    // Configure via variável de ambiente RD_STATION_TOKEN_PRIVATE em produção
    // Por padrão usa o token público, mas pode ser sobrescrito para operações específicas
    const privateToken = process.env.RD_STATION_TOKEN_PRIVATE || publicToken
    
    // Usar token público para conversões (padrão)
    const token = publicToken
    
    // Log para debug (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
      console.log('🔑 Token usado:', token.substring(0, 10) + '...')
      console.log('📧 Email do lead:', leadData.email)
      console.log('🏷️ Identificador:', conversionIdentifier)
    }

    // Identificador da conversão (nome do formulário/origem)
    const conversionIdentifier = leadData.source || 'formulario-site'

    // Tentar primeiro com a API moderna (RD Station Marketing v2)
    try {
      const modernPayload = {
        event_type: 'CONVERSION',
        conversion_identifier: conversionIdentifier,
        email: leadData.email,
        properties: {} as Record<string, string>,
      }

      if (leadData.name) {
        modernPayload.properties.name = leadData.name
      }

      if (leadData.phone) {
        modernPayload.properties.phone = leadData.phone
        modernPayload.properties.telefone = leadData.phone
      }

      if (leadData.product) {
        modernPayload.properties.product = leadData.product
      }

      // Adicionar tags se necessário
      const tags = []
      if (leadData.product) {
        tags.push(`produto:${leadData.product}`)
      }
      tags.push(`origem:${leadData.source || 'site'}`)
      if (tags.length > 0) {
        modernPayload.properties.tags = tags.join(',')
      }

      const modernResponse = await fetch(
        'https://api.rd.services/platform/events',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(modernPayload),
        }
      )

      if (modernResponse.ok) {
        const result = await modernResponse.json().catch(() => ({ success: true }))
        console.log('✅ Lead enviado para RD Station (API Moderna):', result)
        return NextResponse.json({ success: true, method: 'modern', result })
      } else {
        const errorText = await modernResponse.text().catch(() => 'Unknown error')
        console.warn('⚠️ API moderna retornou erro:', modernResponse.status, errorText)
      }
    } catch (modernError) {
      console.log('⚠️ API moderna falhou, tentando API legada...', modernError)
    }

    // Se a API moderna falhar, tentar API legada (form-urlencoded)
    const formData = new URLSearchParams()
    formData.append('token_rdstation', token)
    formData.append('identificador', conversionIdentifier)
    formData.append('email', leadData.email)
    
    if (leadData.name) {
      formData.append('nome', leadData.name)
    }
    
    if (leadData.phone) {
      formData.append('telefone', leadData.phone)
    }
    
    if (leadData.product) {
      formData.append('tags', `produto:${leadData.product},origem:${leadData.source || 'site'}`)
    } else {
      formData.append('tags', `origem:${leadData.source || 'site'}`)
    }

    // Endpoint legado do RD Station
    const legacyResponse = await fetch(
      'https://www.rdstation.com.br/api/1.2/conversions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    )

    if (!legacyResponse.ok) {
      const errorText = await legacyResponse.text().catch(() => 'Unknown error')
      console.error('❌ RD Station API Error (Legada):', {
        status: legacyResponse.status,
        statusText: legacyResponse.statusText,
        error: errorText,
        tokenUsed: token.substring(0, 10) + '...'
      })
      return NextResponse.json(
        { 
          error: 'Failed to send lead to RD Station', 
          details: errorText,
          status: legacyResponse.status,
          method: 'legacy'
        },
        { status: legacyResponse.status }
      )
    }

    const legacyResult = await legacyResponse.json().catch(() => ({ success: true }))
    console.log('✅ Lead enviado para RD Station (API Legada):', legacyResult)
    return NextResponse.json({ success: true, method: 'legacy', result: legacyResult })
  } catch (error) {
    console.error('Error in RD Station API route:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
