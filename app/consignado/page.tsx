import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Empréstimo Consignado | SmartCred - Taxas Reduzidas e Aprovação Rápida',
  description: 'Empréstimo consignado com as melhores taxas do mercado. Desconto direto na folha de pagamento. Aprovação rápida e sem burocracia. Ideal para servidores públicos e aposentados.',
  keywords: 'empréstimo consignado, consignado servidor público, consignado aposentado, empréstimo desconto em folha, crédito consignado, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Empréstimo Consignado | SmartCred - Taxas Reduzidas',
    description: 'Empréstimo consignado com as melhores taxas do mercado. Aprovação rápida e sem burocracia.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Empréstimo Consignado - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConsignadoPage() {
  return (
    <>
      <HeroProductSection
        title="Empréstimo Consignado"
        subtitle="A solução mais segura e vantajosa para você que precisa de crédito. Desconto direto na folha de pagamento com as melhores taxas do mercado."
        highlights={[
          'Taxas reduzidas',
          'Aprovação rápida',
          'Sem análise de crédito',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite sua Proposta de Consignado"
      />

      <ProductBenefitsSection
        title="Vantagens do Empréstimo Consignado"
        benefits={[
          {
            title: 'Taxas Reduzidas',
            description: 'As menores taxas de juros do mercado, pois o desconto é feito diretamente na folha de pagamento, reduzindo o risco para a instituição financeira.',
          },
          {
            title: 'Aprovação Rápida',
            description: 'Processo simplificado e ágil. Sem análise de crédito tradicional, sua aprovação pode sair em até 24 horas.',
          },
          {
            title: 'Sem Comprovação de Renda',
            description: 'Não é necessário comprovar renda adicional, pois o desconto é feito diretamente na folha de pagamento.',
          },
          {
            title: 'Sem Necessidade de Fiador',
            description: 'A garantia é o próprio desconto em folha, eliminando a necessidade de fiadores ou avalistas.',
          },
          {
            title: 'Parcelas Fixas',
            description: 'Valor das parcelas fixo durante todo o período do empréstimo, facilitando o planejamento financeiro.',
          },
          {
            title: 'Liberação Rápida',
            description: 'Após a aprovação, o dinheiro cai na sua conta em até 48 horas úteis.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona o Empréstimo Consignado?"
        steps={[
          {
            number: 1,
            title: 'Solicite sua Proposta',
            description: 'Preencha o formulário com seus dados básicos. Nossa equipe entrará em contato para entender sua necessidade.',
          },
          {
            number: 2,
            title: 'Análise e Aprovação',
            description: 'Verificamos sua elegibilidade junto à instituição financeira parceira. Aprovação rápida sem burocracia.',
          },
          {
            number: 3,
            title: 'Contratação',
            description: 'Após aprovação, você assina o contrato digitalmente. Processo 100% online e seguro.',
          },
          {
            number: 4,
            title: 'Receba o Dinheiro',
            description: 'O valor é creditado na sua conta em até 48 horas úteis. As parcelas são descontadas automaticamente da folha.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Quem pode contratar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Servidores Públicos</h3>
                <p className="text-body">
                  Funcionários públicos federais, estaduais e municipais ativos ou aposentados podem contratar empréstimo consignado com desconto direto na folha de pagamento.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Aposentados INSS</h3>
                <p className="text-body">
                  Aposentados e pensionistas do INSS também podem contratar consignado com desconto direto no benefício, com margem consignável de até 45% da renda.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Militares</h3>
                <p className="text-body">
                  Militares das Forças Armadas e das Polícias Militares podem contratar consignado com condições especiais e taxas reduzidas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Funcionários de Empresas Conveniadas</h3>
                <p className="text-body">
                  Funcionários de empresas que possuem convênio com instituições financeiras também podem contratar consignado com desconto em folha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Consignado"
        title="Solicite sua Proposta de Consignado"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar as melhores condições do mercado."
      />
    </>
  )
}
