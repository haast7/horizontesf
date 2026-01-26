import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluções em Energia Solar | SmartCred',
  description: 'Energia solar para residências e empresas. Reduza sua conta de luz em até 95%.',
}

export default function SolucoesEnergiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
