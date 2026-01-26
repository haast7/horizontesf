import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Gestão, Assessoria e Consultoria | SmartCred - Soluções Financeiras Completas',
  description: 'Gestão financeira, assessoria e consultoria especializada para pessoas físicas e empresas. Planejamento financeiro, análise de investimentos e muito mais.',
  keywords: 'gestão financeira, assessoria financeira, consultoria financeira, planejamento financeiro, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Gestão, Assessoria e Consultoria | SmartCred',
    description: 'Gestão financeira, assessoria e consultoria especializada para pessoas físicas e empresas.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Gestão, Assessoria e Consultoria - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GestaoAssessoriaConsultoriaPage() {
  return (
    <>
      <HeroProductSection
        title="Gestão, Assessoria e Consultoria"
        subtitle="Soluções completas de gestão financeira, assessoria e consultoria especializada. Planejamento financeiro, análise de investimentos e estratégias personalizadas."
        highlights={[
          'Planejamento financeiro',
          'Assessoria especializada',
          'Consultoria personalizada',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Consultoria Gratuita"
      />

      <ProductBenefitsSection
        title="Nossos Serviços de Consultoria"
        benefits={[
          {
            title: 'Planejamento Financeiro',
            description: 'Desenvolvimento de plano financeiro personalizado para alcançar seus objetivos de curto, médio e longo prazo.',
          },
          {
            title: 'Análise de Investimentos',
            description: 'Análise e recomendação de investimentos adequados ao seu perfil de risco e objetivos financeiros.',
          },
          {
            title: 'Gestão de Patrimônio',
            description: 'Gestão completa do seu patrimônio com estratégias de proteção, crescimento e otimização fiscal.',
          },
          {
            title: 'Assessoria Empresarial',
            description: 'Assessoria financeira para empresas com foco em gestão de caixa, planejamento e estruturação financeira.',
          },
          {
            title: 'Reestruturação Financeira',
            description: 'Análise e reestruturação da situação financeira para otimizar recursos e melhorar resultados.',
          },
          {
            title: 'Consultoria Estratégica',
            description: 'Consultoria estratégica para tomada de decisões financeiras importantes e planejamento de longo prazo.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona?"
        steps={[
          {
            number: 1,
            title: 'Diagnóstico Inicial',
            description: 'Realizamos uma análise completa da sua situação financeira atual, objetivos e necessidades.',
          },
          {
            number: 2,
            title: 'Planejamento Personalizado',
            description: 'Desenvolvemos um plano financeiro personalizado com estratégias adequadas ao seu perfil.',
          },
          {
            number: 3,
            title: 'Implementação',
            description: 'Acompanhamos a implementação das estratégias e ajustamos conforme necessário.',
          },
          {
            number: 4,
            title: 'Acompanhamento Contínuo',
            description: 'Acompanhamento regular para garantir que os objetivos sejam alcançados e ajustar estratégias quando necessário.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Para quem é ideal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Pessoas Físicas</h3>
                <p className="text-body">
                  Indivíduos que querem organizar suas finanças pessoais, planejar o futuro e fazer investimentos inteligentes.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Empresários</h3>
                <p className="text-body">
                  Empresários que precisam de assessoria para gestão financeira empresarial e planejamento estratégico.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Investidores</h3>
                <p className="text-body">
                  Investidores que buscam análise de oportunidades, diversificação de portfólio e otimização de retornos.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Famílias</h3>
                <p className="text-body">
                  Famílias que querem planejar o futuro, proteger o patrimônio e garantir segurança financeira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Gestão, Assessoria e Consultoria"
        title="Solicite uma Consultoria Gratuita"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para entender suas necessidades e apresentar soluções personalizadas."
      />
    </>
  )
}
