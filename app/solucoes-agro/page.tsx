import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Soluções Agro | SmartCred - Crédito Rural e Financiamento Agrícola',
  description: 'Soluções financeiras para o agronegócio. Crédito rural, financiamento agrícola, seguro rural e muito mais. Apoio completo para produtores rurais.',
  keywords: 'crédito rural, financiamento agrícola, seguro rural, agronegócio, financiamento rural, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Soluções Agro | SmartCred',
    description: 'Soluções financeiras para o agronegócio. Crédito rural e financiamento agrícola.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Soluções Agro - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SolucoesAgroPage() {
  return (
    <>
      <HeroProductSection
        title="Soluções Agro"
        subtitle="Soluções financeiras especializadas para o agronegócio. Crédito rural, financiamento agrícola, seguro rural e muito mais para impulsionar sua produção."
        highlights={[
          'Crédito rural',
          'Financiamento agrícola',
          'Seguro rural',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Proposta para o Agronegócio"
      />

      <ProductBenefitsSection
        title="Soluções Disponíveis para o Agronegócio"
        benefits={[
          {
            title: 'Crédito Rural',
            description: 'Linhas de crédito específicas para o agronegócio com taxas diferenciadas e prazos adequados ao ciclo produtivo.',
          },
          {
            title: 'Financiamento Agrícola',
            description: 'Financie máquinas, equipamentos, implementos agrícolas e melhorias na propriedade com condições especiais.',
          },
          {
            title: 'Seguro Rural',
            description: 'Proteja sua produção contra intempéries, pragas e outros riscos climáticos com seguro rural especializado.',
          },
          {
            title: 'Custeio Agrícola',
            description: 'Crédito para custeio de safra, compra de insumos, sementes, fertilizantes e defensivos agrícolas.',
          },
          {
            title: 'Investimento Rural',
            description: 'Financiamento para investimentos em infraestrutura, irrigação, armazenamento e tecnologia no campo.',
          },
          {
            title: 'Antecipação de Safra',
            description: 'Antecipe recursos da sua safra para melhorar o fluxo de caixa e planejar melhor a próxima produção.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona?"
        steps={[
          {
            number: 1,
            title: 'Análise do Projeto',
            description: 'Nossa equipe especializada analisa seu projeto agrícola, produção e necessidades financeiras.',
          },
          {
            number: 2,
            title: 'Proposta Personalizada',
            description: 'Apresentamos propostas de crédito rural ou financiamento agrícola adequadas ao seu ciclo produtivo.',
          },
          {
            number: 3,
            title: 'Aprovação',
            description: 'Processo de aprovação considerando as particularidades do agronegócio e ciclo produtivo.',
          },
          {
            number: 4,
            title: 'Liberação e Acompanhamento',
            description: 'Recursos liberados conforme necessidade e acompanhamento durante todo o ciclo produtivo.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Para quem é ideal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Produtores Rurais</h3>
                <p className="text-body">
                  Produtores de grãos, frutas, hortaliças e outras culturas que precisam de crédito para custeio e investimento.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Pecuaristas</h3>
                <p className="text-body">
                  Criadores de gado, suínos, aves e outros animais que necessitam de financiamento para melhorias e expansão.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Cooperativas Agrícolas</h3>
                <p className="text-body">
                  Soluções financeiras para cooperativas agrícolas e associações de produtores rurais.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Agroindústrias</h3>
                <p className="text-body">
                  Empresas do setor agroindustrial que precisam de capital de giro e financiamento para investimentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Soluções Agro"
        title="Solicite uma Proposta para o Agronegócio"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar soluções financeiras personalizadas para o agronegócio."
      />
    </>
  )
}
