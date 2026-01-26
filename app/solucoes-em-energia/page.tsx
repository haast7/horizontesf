import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Soluções em Energia Solar | SmartCred - Economia e Sustentabilidade',
  description: 'Energia solar para residências e empresas. Reduza sua conta de luz em até 95% com financiamento facilitado. Soluções completas em energia renovável.',
  keywords: 'energia solar, painel solar, energia fotovoltaica, financiamento energia solar, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Soluções em Energia Solar | SmartCred',
    description: 'Energia solar para residências e empresas. Reduza sua conta de luz em até 95%.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Soluções em Energia Solar - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SolucoesEnergiaPage() {
  return (
    <>
      <HeroProductSection
        title="Soluções em Energia Solar"
        subtitle="Gere sua própria energia e reduza sua conta de luz em até 95%. Financiamento facilitado e instalação completa para residências e empresas."
        highlights={[
          'Economia de até 95%',
          'Financiamento facilitado',
          'Instalação completa',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Proposta de Energia Solar"
      />

      <ProductBenefitsSection
        title="Vantagens da Energia Solar"
        benefits={[
          {
            title: 'Economia na Conta de Luz',
            description: 'Reduza sua conta de energia elétrica em até 95%. O investimento se paga em poucos anos e você continua economizando por décadas.',
          },
          {
            title: 'Valorização do Imóvel',
            description: 'Imóveis com energia solar têm valorização de até 10% no mercado imobiliário, sendo um excelente investimento.',
          },
          {
            title: 'Sustentabilidade',
            description: 'Contribua para o meio ambiente gerando energia limpa e renovável, reduzindo sua pegada de carbono.',
          },
          {
            title: 'Financiamento Facilitado',
            description: 'Financiamento com condições especiais para energia solar, com prazos de até 10 anos e taxas reduzidas.',
          },
          {
            title: 'Instalação Completa',
            description: 'Projeto, instalação, homologação e manutenção. Tudo incluso para você ter energia solar funcionando.',
          },
          {
            title: 'Créditos de Energia',
            description: 'Gere créditos de energia que podem ser utilizados em outras unidades consumidoras ou vendidos para a concessionária.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona a Energia Solar?"
        steps={[
          {
            number: 1,
            title: 'Análise e Projeto',
            description: 'Nossa equipe analisa seu consumo e desenvolve um projeto personalizado para atender suas necessidades.',
          },
          {
            number: 2,
            title: 'Aprovação e Financiamento',
            description: 'Apresentamos propostas de financiamento com condições especiais. Aprovação rápida e sem burocracia.',
          },
          {
            number: 3,
            title: 'Instalação',
            description: 'Equipe técnica especializada realiza a instalação completa dos painéis solares e equipamentos.',
          },
          {
            number: 4,
            title: 'Gere sua Energia',
            description: 'Após homologação, comece a gerar sua própria energia e reduza drasticamente sua conta de luz.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Para quem é ideal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Residências</h3>
                <p className="text-body">
                  Ideal para residências com conta de luz acima de R$ 300. O investimento se paga em poucos anos e você economiza por décadas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Empresas</h3>
                <p className="text-body">
                  Reduza custos operacionais e melhore a sustentabilidade da sua empresa. Investimento com excelente retorno financeiro.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Propriedades Rurais</h3>
                <p className="text-body">
                  Energia solar para propriedades rurais, irrigação e sistemas de bombeamento. Reduza custos e aumente produtividade.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Condomínios</h3>
                <p className="text-body">
                  Soluções para condomínios residenciais e comerciais, reduzindo custos comuns e valorizando o empreendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Soluções em Energia"
        title="Solicite uma Proposta de Energia Solar"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar um projeto personalizado de energia solar."
      />
    </>
  )
}
