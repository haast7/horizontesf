import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Antecipação de Precatórios | SmartCred',
  description: 'Antecipe seus precatórios e receba o dinheiro antes do prazo. Processo seguro e rápido.',
}

export default function AntecipacaoPrecatoriosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
