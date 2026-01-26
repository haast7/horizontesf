import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empréstimo Pessoal | SmartCred',
  description: 'Empréstimo pessoal com condições flexíveis e aprovação rápida.',
}

export default function EmprestimoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
