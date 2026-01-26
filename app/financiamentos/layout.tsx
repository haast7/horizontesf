import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financiamentos | SmartCred',
  description: 'Financiamento imobiliário, veicular e outros. Compare as melhores taxas e condições.',
}

export default function FinanciamentosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
