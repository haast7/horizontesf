import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empréstimo Consignado | SmartCred',
  description: 'Empréstimo consignado com as melhores taxas do mercado. Aprovação rápida e sem burocracia.',
}

export default function ConsignadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
