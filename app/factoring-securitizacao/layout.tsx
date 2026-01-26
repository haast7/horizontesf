import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factoring e Securitização | SmartCred',
  description: 'Factoring e securitização para empresas. Antecipe recebíveis e melhore o fluxo de caixa.',
}

export default function FactoringSecuritizacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
