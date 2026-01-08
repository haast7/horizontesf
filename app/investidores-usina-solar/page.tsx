import type { Metadata } from 'next'
import HeroInvestidoresSection from '@/components/sections/investidores/HeroInvestidoresSection'
import BeneficiosInvestimentoSection from '@/components/sections/investidores/BeneficiosInvestimentoSection'
import NumerosInvestimentoSection from '@/components/sections/investidores/NumerosInvestimentoSection'
import CronogramaSection from '@/components/sections/investidores/CronogramaSection'
import FormularioInvestidoresSection from '@/components/sections/investidores/FormularioInvestidoresSection'
import OutrosServicosInvestidoresSection from '@/components/sections/investidores/OutrosServicosInvestidoresSection'
import GarantiasSection from '@/components/sections/investidores/GarantiasSection'

export const metadata: Metadata = {
  title: 'Investimento em Usina Solar | SmartCred - Retorno Garantido para Investidores',
  description: 'Invista em usina solar com retorno de até 2,5% ao mês. Solução exclusiva para investidores com patrimônio mínimo de R$ 300.000. Agende sua reunião estratégica.',
  keywords: 'investimento usina solar, energia solar investimento, investimento energia renovável, usina solar ROI, investimento alto retorno',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Investimento em Usina Solar | SmartCred - Retorno Garantido',
    description: 'Invista em usina solar com retorno de até 2,5% ao mês. Solução exclusiva para investidores qualificados.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Investimento em Usina Solar - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InvestidoresUsinaSolarPage() {
  return (
    <>
      <HeroInvestidoresSection />
      <NumerosInvestimentoSection />
      <BeneficiosInvestimentoSection />
      <CronogramaSection />
      <GarantiasSection />
      <FormularioInvestidoresSection />
      <OutrosServicosInvestidoresSection />
    </>
  )
}
