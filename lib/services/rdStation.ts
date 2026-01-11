/**
 * Serviço para integração com RD Station API
 * Envia leads diretamente para o CRM do RD Station via API route
 */

/**
 * Função auxiliar para enviar lead ao RD Station
 * Chama a API route do Next.js que executa no servidor
 */
export async function trackRDStationLead(leadData: {
  email: string
  name?: string
  phone?: string
  product?: string
  source?: string
}): Promise<void> {
  try {
    // Chamar API route do Next.js (executa no servidor)
    const response = await fetch('/api/rd-station', {
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
      console.error('RD Station API Error:', errorData)
      return
    }

    const result = await response.json()
    console.log('Lead enviado para RD Station:', result)
  } catch (error) {
    console.error('Error sending lead to RD Station:', error)
  }
}
