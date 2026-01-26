import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Financiamentos | SmartCred - Imóvel, Veículo e Mais',
  description: 'Financiamento imobiliário, veicular e outros. Compare as melhores taxas e condições do mercado. Aprovação rápida e condições personalizadas para realizar seus sonhos.',
  keywords: 'financiamento imobiliário, financiamento veicular, financiamento casa, financiamento carro, crédito imobiliário, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Financiamentos | SmartCred - Imóvel, Veículo e Mais',
    description: 'Financiamento imobiliário, veicular e outros. Compare as melhores taxas e condições do mercado.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Financiamentos - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FinanciamentosPage() {
  return (
    <>
      <HeroProductSection
        title="Financiamentos"
        subtitle="Realize seus sonhos com financiamento imobiliário, veicular e outros. Compare as melhores taxas e condições do mercado com aprovação rápida."
        highlights={[
          'Taxas competitivas',
          'Prazos flexíveis',
          'Aprovação rápida',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Simulação de Financiamento"
      />

      <ProductBenefitsSection
        title="Tipos de Financiamento Disponíveis"
        benefits={[
          {
            title: 'Financiamento Imobiliário',
            description: 'Adquira seu imóvel próprio com financiamento imobiliário. Taxas reduzidas, prazos de até 35 anos e condições especiais para primeira compra.',
          },
          {
            title: 'Financiamento Veicular',
            description: 'Compre carro, moto ou caminhão novo ou usado com financiamento veicular. Condições especiais e aprovação rápida.',
          },
          {
            title: 'Financiamento Construção',
            description: 'Financie a construção da sua casa ou reforma com condições especiais e liberação por etapas conforme o andamento da obra.',
          },
          {
            title: 'Refinanciamento',
            description: 'Refinancie seu imóvel ou veículo para obter condições melhores, reduzir parcelas ou liberar crédito.',
          },
          {
            title: 'Portabilidade de Crédito',
            description: 'Transfira seu financiamento para outra instituição com condições melhores e reduza suas parcelas.',
          },
          {
            title: 'Atendimento Especializado',
            description: 'Nossa equipe analisa seu perfil e encontra as melhores condições disponíveis no mercado para você.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona o Financiamento?"
        steps={[
          {
            number: 1,
            title: 'Solicite uma Simulação',
            description: 'Preencha o formulário com seus dados e informações do bem que deseja financiar. Nossa equipe entrará em contato.',
          },
          {
            number: 2,
            title: 'Análise de Crédito',
            description: 'Analisamos seu perfil junto às melhores instituições financeiras para encontrar as melhores condições.',
          },
          {
            number: 3,
            title: 'Receba Propostas',
            description: 'Apresentamos propostas personalizadas com taxas, prazos e condições que melhor se adequam ao seu perfil.',
          },
          {
            number: 4,
            title: 'Contrate e Realize',
            description: 'Após escolher a melhor proposta, formalize a contratação e realize seu sonho de adquirir imóvel ou veículo.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Vantagens do Financiamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Realize seus Sonhos</h3>
                <p className="text-body">
                  Adquira imóvel próprio ou veículo sem precisar juntar todo o dinheiro à vista. Parcele em prazos que cabem no seu bolso.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Taxas Competitivas</h3>
                <p className="text-body">
                  Compare as melhores taxas do mercado e encontre condições que realmente fazem sentido para você.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Prazos Flexíveis</h3>
                <p className="text-body">
                  Escolha o prazo de pagamento que melhor se adequa à sua situação financeira, de acordo com sua capacidade de pagamento.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Condições Especiais</h3>
                <p className="text-body">
                  Aproveite condições especiais para primeira compra, programas governamentais e linhas de crédito diferenciadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Financiamentos"
        title="Solicite uma Simulação de Financiamento"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar as melhores condições de financiamento disponíveis."
      />
    </>
  )
}
