import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Antecipação de Precatórios | SmartCred - Receba seu Dinheiro Antes',
  description: 'Antecipe seus precatórios e receba o dinheiro antes do prazo. Processo seguro, rápido e transparente. Solução para quem tem precatórios em andamento.',
  keywords: 'antecipação de precatórios, precatórios, antecipação precatórios, receber precatórios antes, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Antecipação de Precatórios | SmartCred',
    description: 'Antecipe seus precatórios e receba o dinheiro antes do prazo. Processo seguro e rápido.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Antecipação de Precatórios - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AntecipacaoPrecatoriosPage() {
  return (
    <>
      <HeroProductSection
        title="Antecipação de Precatórios"
        subtitle="Receba o valor dos seus precatórios antes do prazo. Processo seguro, rápido e transparente. Solução ideal para quem precisa do dinheiro agora."
        highlights={[
          'Receba antes do prazo',
          'Processo seguro',
          'Taxas transparentes',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Proposta de Antecipação"
      />

      <ProductBenefitsSection
        title="Vantagens da Antecipação de Precatórios"
        benefits={[
          {
            title: 'Receba Antes do Prazo',
            description: 'Não espere anos para receber seus precatórios. Antecipe e receba o dinheiro em até 48 horas após aprovação.',
          },
          {
            title: 'Processo Seguro',
            description: 'Trabalhamos apenas com empresas reguladas e processos 100% seguros e transparentes.',
          },
          {
            title: 'Taxas Transparentes',
            description: 'Todas as taxas e condições são apresentadas de forma clara e transparente, sem surpresas.',
          },
          {
            title: 'Aprovação Rápida',
            description: 'Análise rápida do seu precatório e aprovação em até 24 horas úteis.',
          },
          {
            title: 'Sem Burocracia',
            description: 'Processo simplificado e descomplicado. Nossa equipe cuida de toda a documentação necessária.',
          },
          {
            title: 'Atendimento Especializado',
            description: 'Equipe especializada em precatórios que entende todas as particularidades deste tipo de operação.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona a Antecipação?"
        steps={[
          {
            number: 1,
            title: 'Análise do Precatório',
            description: 'Nossa equipe analisa seu precatório para verificar elegibilidade e valor disponível para antecipação.',
          },
          {
            number: 2,
            title: 'Proposta Personalizada',
            description: 'Apresentamos proposta com valor líquido, taxas e condições de forma clara e transparente.',
          },
          {
            number: 3,
            title: 'Aprovação',
            description: 'Após aceitar a proposta, processo de aprovação rápido e descomplicado.',
          },
          {
            number: 4,
            title: 'Receba o Dinheiro',
            description: 'Valor creditado na sua conta em até 48 horas após aprovação e assinatura dos documentos.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Tipos de Precatórios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Precatórios Federais</h3>
                <p className="text-body">
                  Antecipação de precatórios da União, com processo seguro e regulamentado.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Precatórios Estaduais</h3>
                <p className="text-body">
                  Antecipação de precatórios de estados e municípios, com análise rápida e aprovação ágil.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Precatórios Trabalhistas</h3>
                <p className="text-body">
                  Antecipação de precatórios trabalhistas, com condições especiais e processo simplificado.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Precatórios Previdenciários</h3>
                <p className="text-body">
                  Antecipação de precatórios previdenciários, com análise especializada e aprovação rápida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Antecipação de Precatórios"
        title="Solicite uma Proposta de Antecipação"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para analisar seu precatório e apresentar uma proposta personalizada."
      />
    </>
  )
}
