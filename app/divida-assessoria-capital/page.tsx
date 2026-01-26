import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Dívida e Assessoria de Capital | SmartCred - Reorganize suas Finanças',
  description: 'Assessoria especializada em renegociação de dívidas e assessoria de capital. Reorganize suas finanças, negocie dívidas e encontre soluções para capital de giro.',
  keywords: 'renegociação de dívidas, assessoria financeira, capital de giro, renegociação de empréstimos, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Dívida e Assessoria de Capital | SmartCred',
    description: 'Assessoria especializada em renegociação de dívidas e assessoria de capital.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Dívida e Assessoria de Capital - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DividaAssessoriaCapitalPage() {
  return (
    <>
      <HeroProductSection
        title="Dívida e Assessoria de Capital"
        subtitle="Reorganize suas finanças com assessoria especializada. Renegocie dívidas, encontre soluções para capital de giro e recupere o controle financeiro."
        highlights={[
          'Renegociação de dívidas',
          'Assessoria personalizada',
          'Soluções de capital',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Consultoria Gratuita"
      />

      <ProductBenefitsSection
        title="Nossos Serviços"
        benefits={[
          {
            title: 'Renegociação de Dívidas',
            description: 'Negocie suas dívidas com bancos e instituições financeiras para reduzir juros, parcelas e prazos. Reorganize suas finanças.',
          },
          {
            title: 'Assessoria de Capital',
            description: 'Assessoria especializada para encontrar soluções de capital de giro, investimentos e estruturação financeira.',
          },
          {
            title: 'Consolidação de Dívidas',
            description: 'Una várias dívidas em uma única parcela com taxa reduzida, facilitando o controle e pagamento.',
          },
          {
            title: 'Análise Financeira',
            description: 'Análise completa da sua situação financeira para identificar oportunidades de melhoria e otimização.',
          },
          {
            title: 'Planejamento Financeiro',
            description: 'Desenvolvimento de plano financeiro personalizado para alcançar seus objetivos e manter as finanças organizadas.',
          },
          {
            title: 'Negociação com Credores',
            description: 'Nossa equipe negocia diretamente com credores para obter as melhores condições de pagamento.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona?"
        steps={[
          {
            number: 1,
            title: 'Análise da Situação',
            description: 'Nossa equipe analisa sua situação financeira atual, dívidas e necessidades para entender o cenário completo.',
          },
          {
            number: 2,
            title: 'Proposta de Solução',
            description: 'Apresentamos propostas personalizadas de renegociação, consolidação ou assessoria de capital.',
          },
          {
            number: 3,
            title: 'Negociação',
            description: 'Negociamos diretamente com credores para obter as melhores condições possíveis para você.',
          },
          {
            number: 4,
            title: 'Implementação',
            description: 'Implementamos as soluções acordadas e acompanhamos para garantir que tudo funcione conforme planejado.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Quando procurar este serviço?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Múltiplas Dívidas</h3>
                <p className="text-body">
                  Se você tem várias dívidas diferentes e está difícil controlar todas as parcelas e prazos.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Juros Altos</h3>
                <p className="text-body">
                  Se suas dívidas têm juros muito altos e você quer renegociar para reduzir o custo total.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Necessidade de Capital</h3>
                <p className="text-body">
                  Se você precisa de capital de giro para investir, crescer ou cobrir necessidades imediatas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Organização Financeira</h3>
                <p className="text-body">
                  Se você quer reorganizar suas finanças e ter um plano estruturado para o futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Dívida e Assessoria de Capital"
        title="Solicite uma Consultoria Gratuita"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para analisar sua situação e apresentar soluções personalizadas."
      />
    </>
  )
}
