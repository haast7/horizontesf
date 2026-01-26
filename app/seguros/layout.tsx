import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seguros | SmartCred',
  description: 'Seguros personalizados para proteger o que é mais importante.',
}

export default function SegurosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
