'use client'

import Script from 'next/script'

/**
 * Componente para carregar o código de monitoramento do RD Station
 * 
 * Requisitos do RD Station para captura automática de formulários:
 * - O código deve estar antes do fechamento da tag </body>
 * - O formulário precisa ter campo de email (type="email" ou name="email")
 * - O botão precisa ter type="submit"
 * - O formulário deve estar dentro de tags <form></form>
 * - O formulário NÃO pode estar dentro de iframes
 */
export default function RDStation() {
  return (
    <Script
      id="rd-station"
      strategy="afterInteractive"
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/3c92e6a5-ab7e-48a5-bad9-3cb83405ad02-loader.js"
    />
  )
}
