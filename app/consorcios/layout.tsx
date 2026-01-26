import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consórcios | SmartCred',
  description: 'Consórcio para imóvel, veículo e serviços. Realize seus sonhos sem pagar juros.',
}

export default function ConsorciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
