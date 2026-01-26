import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluções Agro | SmartCred',
  description: 'Soluções financeiras para o agronegócio. Crédito rural e financiamento agrícola.',
}

export default function SolucoesAgroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
