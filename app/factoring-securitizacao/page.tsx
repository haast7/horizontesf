import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Factoring e Securitização | SmartCred - Soluções para Empresas',
  description: 'Factoring e securitização para empresas. Antecipe recebíveis, melhore o fluxo de caixa e tenha acesso a capital de giro rápido. Soluções financeiras para empresas.',
  keywords: 'factoring, securitização, antecipação recebíveis, capital de giro, crédito empresarial, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Factoring e Securitização | SmartCred',
    description: 'Factoring e securitização para empresas. Antecipe recebíveis e melhore o fluxo de caixa.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Factoring e Securitização - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FactoringSecuritizacaoPage() {
  return (
    <>
      <HeroProductSection
        title="Factoring e Securitização"
        subtitle="Soluções financeiras para empresas que precisam melhorar o fluxo de caixa. Antecipe recebíveis, tenha acesso a capital de giro rápido e cresça seu negócio."
        highlights={[
          'Antecipação de recebíveis',
          'Capital de giro rápido',
          'Sem análise de crédito tradicional',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Proposta para sua Empresa"
      />

      <ProductBenefitsSection
        title="Soluções Disponíveis"
        benefits={[
          {
            title: 'Factoring',
            description: 'Antecipe suas duplicatas e recebíveis com desconto. Melhore o fluxo de caixa sem comprometer o relacionamento com clientes.',
          },
          {
            title: 'Securitização',
            description: 'Transforme seus recebíveis em títulos negociáveis no mercado de capitais. Acesso a capital com condições diferenciadas.',
          },
          {
            title: 'Capital de Giro',
            description: 'Tenha acesso rápido a capital de giro para cobrir despesas operacionais, investimentos e crescimento do negócio.',
          },
          {
            title: 'Antecipação de Recebíveis',
            description: 'Antecipe valores a receber de clientes, melhorando o fluxo de caixa e permitindo novos investimentos.',
          },
          {
            title: 'Sem Análise de Crédito Tradicional',
            description: 'A análise é baseada na qualidade dos seus recebíveis, não no histórico de crédito da empresa.',
          },
          {
            title: 'Processo Ágil',
            description: 'Aprovação e liberação rápida, muitas vezes em até 48 horas, para você não perder oportunidades de negócio.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona?"
        steps={[
          {
            number: 1,
            title: 'Análise do Negócio',
            description: 'Nossa equipe analisa seu negócio, recebíveis e necessidades financeiras para propor a melhor solução.',
          },
          {
            number: 2,
            title: 'Proposta Personalizada',
            description: 'Apresentamos propostas de factoring ou securitização com condições personalizadas para sua empresa.',
          },
          {
            number: 3,
            title: 'Aprovação Rápida',
            description: 'Processo de aprovação ágil baseado na qualidade dos seus recebíveis e não no histórico de crédito.',
          },
          {
            number: 4,
            title: 'Liberação de Recursos',
            description: 'Recursos liberados rapidamente para melhorar seu fluxo de caixa e permitir o crescimento do negócio.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Para que serve?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Melhorar Fluxo de Caixa</h3>
                <p className="text-body">
                  Antecipe recebíveis e tenha dinheiro em caixa para cobrir despesas operacionais e investimentos.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Crescer o Negócio</h3>
                <p className="text-body">
                  Tenha acesso a capital para investir em expansão, novos produtos, equipamentos e contratações.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Cobrir Necessidades Imediatas</h3>
                <p className="text-body">
                  Solução rápida para cobrir necessidades financeiras imediatas sem comprometer o relacionamento com clientes.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Diversificar Fontes de Capital</h3>
                <p className="text-body">
                  Não dependa apenas de empréstimos bancários. Tenha acesso a outras fontes de capital para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Factoring e Securitização"
        title="Solicite uma Proposta para sua Empresa"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar soluções personalizadas de factoring e securitização."
      />
    </>
  )
}
