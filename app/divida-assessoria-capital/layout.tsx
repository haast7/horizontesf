import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dívida e Assessoria de Capital | SmartCred',
  description: 'Assessoria especializada em renegociação de dívidas e assessoria de capital.',
}

export default function DividaAssessoriaCapitalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
