import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route para enviar leads para o RD Station
 * Esta rota executa no servidor para proteger o token da API
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

    // Token público da API do RD Station
    // Configure via variável de ambiente RD_STATION_TOKEN em produção para sobrescrever
    const token = process.env.RD_STATION_TOKEN || '93c7c9126b473974f313bbdf25ef397b'

    // Preparar dados para RD Station API
    // A API do RD Station aceita dados no formato form-urlencoded
    const formData = new URLSearchParams()
    formData.append('token_rdstation', token)
    formData.append('identificador', leadData.source || 'formulario-site')
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

    // Enviar para RD Station API
    // Endpoint: https://api.rd.services/platform/conversions
    const response = await fetch(
      'https://api.rd.services/platform/conversions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('RD Station API Error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send lead to RD Station', details: errorData },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error in RD Station API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
