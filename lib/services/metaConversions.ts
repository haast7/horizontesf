/**
 * Serviço para integração com Meta Conversions API
 * Envia eventos de conversão (leads) para o Meta/Facebook via API Route
 */

export interface LeadData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  product?: string
  source?: string
  sourceUrl?: string
}

/**
 * Envia evento de conversão Lead para o Meta Conversions API
 * Chama a API route do Next.js que executa no servidor
 */
export async function trackMetaLead(leadData: LeadData): Promise<void> {
  try {
    // Adicionar URL atual se disponível
    if (typeof window !== 'undefined' && !leadData.sourceUrl) {
      leadData.sourceUrl = window.location.href
    }

    // Chamar API route do Next.js (executa no servidor)
    // O access token e pixel ID são gerenciados no servidor via variáveis de ambiente
    const response = await fetch('/api/meta-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadData,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Meta Conversions API Error:', errorData)
      return
    }

    const result = await response.json()
    console.log('Meta Lead Conversion sent successfully:', result)
  } catch (error) {
    console.error('Error sending Meta Lead Conversion:', error)
  }
}
