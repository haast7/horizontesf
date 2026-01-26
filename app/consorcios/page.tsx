import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Consórcios | SmartCred - Realize seus Sonhos sem Juros',
  description: 'Consórcio para imóvel, veículo, serviços e muito mais. Realize seus sonhos sem pagar juros. Parcelas que cabem no seu bolso com as melhores administradoras do mercado.',
  keywords: 'consórcio imóvel, consórcio veículo, consórcio sem juros, consórcio imobiliário, consórcio automóvel, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Consórcios | SmartCred - Realize seus Sonhos sem Juros',
    description: 'Consórcio para imóvel, veículo e serviços. Realize seus sonhos sem pagar juros.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Consórcios - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConsorciosPage() {
  return (
    <>
      <HeroProductSection
        title="Consórcios"
        subtitle="Realize seus sonhos sem pagar juros. Consórcio para imóvel, veículo, serviços e muito mais. Parcelas que cabem no seu bolso com as melhores administradoras do mercado."
        highlights={[
          'Sem juros',
          'Parcelas fixas',
          'Diversas modalidades',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite Informações sobre Consórcio"
      />

      <ProductBenefitsSection
        title="Tipos de Consórcio Disponíveis"
        benefits={[
          {
            title: 'Consórcio Imóvel',
            description: 'Adquira seu imóvel próprio sem pagar juros. Parcelas fixas e possibilidade de contemplação por lance ou sorteio.',
          },
          {
            title: 'Consórcio Veículo',
            description: 'Compre carro, moto ou caminhão através de consórcio. Novos ou usados, sem juros e com parcelas que cabem no seu bolso.',
          },
          {
            title: 'Consórcio Serviços',
            description: 'Consórcio para reforma, viagem, festas, educação e muito mais. Realize seus projetos sem comprometer o orçamento.',
          },
          {
            title: 'Sem Juros',
            description: 'Você paga apenas o valor do bem ou serviço, sem juros. Apenas taxas administrativas transparentes.',
          },
          {
            title: 'Parcelas Fixas',
            description: 'Parcelas que não mudam durante todo o período do consórcio, facilitando o planejamento financeiro.',
          },
          {
            title: 'Contemplação Garantida',
            description: 'Você será contemplado em até 100% das parcelas. Pode antecipar através de lance ou aguardar sorteio.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona o Consórcio?"
        steps={[
          {
            number: 1,
            title: 'Escolha o Plano',
            description: 'Defina o valor do bem ou serviço desejado e o prazo de pagamento que melhor se adequa ao seu orçamento.',
          },
          {
            number: 2,
            title: 'Adesão ao Grupo',
            description: 'Faça sua adesão ao grupo de consórcio e comece a pagar as parcelas mensais.',
          },
          {
            number: 3,
            title: 'Contemplação',
            description: 'Seja contemplado através de sorteio mensal ou lance. Você pode dar lances para antecipar sua contemplação.',
          },
          {
            number: 4,
            title: 'Receba seu Bem',
            description: 'Após contemplação, receba o crédito para adquirir seu imóvel, veículo ou contratar o serviço desejado.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Vantagens do Consórcio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Sem Juros</h3>
                <p className="text-body">
                  Diferente do financiamento, o consórcio não cobra juros. Você paga apenas o valor do bem ou serviço mais taxas administrativas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Planejamento Financeiro</h3>
                <p className="text-body">
                  Parcelas fixas durante todo o período facilitam o planejamento e organização das suas finanças pessoais.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Flexibilidade</h3>
                <p className="text-body">
                  Escolha o valor e prazo que melhor se adequa ao seu perfil. Possibilidade de aumentar ou reduzir parcelas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Diversas Modalidades</h3>
                <p className="text-body">
                  Consórcio para imóvel, veículo, serviços, reformas, viagens e muito mais. Encontre a modalidade ideal para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Consórcios"
        title="Solicite Informações sobre Consórcio"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar os melhores planos de consórcio disponíveis."
      />
    </>
  )
}
