import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestão, Assessoria e Consultoria | SmartCred',
  description: 'Gestão financeira, assessoria e consultoria especializada para pessoas físicas e empresas.',
}

export default function GestaoAssessoriaConsultoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
