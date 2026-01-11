/**
 * Serviço para integração com RD Station API
 * Envia leads diretamente para o CRM do RD Station
 */

export interface RDStationLeadData {
  email: string
  name?: string
  phone?: string
  company?: string
  job_title?: string
  personal_phone?: string
  website?: string
  tags?: string[]
  legal_bases?: Array<{
    category: string
    type: string
    status: string
  }>
  custom_fields?: Array<{
    custom_field_id: string
    value: string
  }>
}

/**
 * Envia lead para o RD Station via API REST
 * Requer token público da API do RD Station
 */
export async function sendLeadToRDStation(
  leadData: RDStationLeadData,
  token: string
): Promise<boolean> {
  try {
    const response = await fetch('https://api.rd.services/platform/conversions?api_key=' + token, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: 'formulario-site',
          name: leadData.name || '',
          email: leadData.email,
          personal_phone: leadData.phone || leadData.personal_phone || '',
          company: leadData.company || '',
          job_title: leadData.job_title || '',
          website: leadData.website || '',
          tags: leadData.tags || [],
          legal_bases: leadData.legal_bases || [
            {
              category: 'consent',
              type: 'opt_in',
              status: 'granted',
            },
          ],
          custom_fields: leadData.custom_fields || [],
        },
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('RD Station API Error:', errorData)
      return false
    }

    const result = await response.json()
    console.log('Lead enviado para RD Station com sucesso:', result)
    return true
  } catch (error) {
    console.error('Error sending lead to RD Station:', error)
    return false
  }
}

/**
 * Função auxiliar para enviar lead ao RD Station
 * Usa variável de ambiente ou chama API route
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
