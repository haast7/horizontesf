import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Seguros | SmartCred - Proteção Completa para Você e sua Família',
  description: 'Seguros personalizados para proteger o que é mais importante. Vida, residencial, automóvel, viagem e muito mais. Compare e encontre o seguro ideal com as melhores condições.',
  keywords: 'seguro de vida, seguro residencial, seguro auto, seguro viagem, seguro empresarial, corretora de seguros, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Seguros | SmartCred - Proteção Completa',
    description: 'Seguros personalizados para proteger o que é mais importante. Compare e encontre o seguro ideal.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Seguros - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SegurosPage() {
  return (
    <>
      <HeroProductSection
        title="Seguros"
        subtitle="Proteja o que é mais importante para você e sua família. Oferecemos seguros personalizados com as melhores coberturas e condições do mercado."
        highlights={[
          'Coberturas personalizadas',
          'Atendimento especializado',
          'Melhores seguradoras',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite uma Cotação Gratuita"
      />

      <ProductBenefitsSection
        title="Tipos de Seguros que Oferecemos"
        benefits={[
          {
            title: 'Seguro de Vida',
            description: 'Proteja sua família com um seguro de vida que garante tranquilidade financeira em caso de imprevistos. Coberturas flexíveis e valores personalizados.',
          },
          {
            title: 'Seguro Residencial',
            description: 'Proteja seu lar contra incêndio, roubo, danos elétricos e muito mais. Coberturas completas para sua residência e bens pessoais.',
          },
          {
            title: 'Seguro Automóvel',
            description: 'Proteção completa para seu veículo com coberturas contra roubo, furto, acidentes e danos a terceiros. Compare as melhores seguradoras.',
          },
          {
            title: 'Seguro Viagem',
            description: 'Viaje tranquilo com seguro viagem nacional ou internacional. Cobertura médica, extravio de bagagem e muito mais.',
          },
          {
            title: 'Seguro Empresarial',
            description: 'Proteja seu negócio com seguros empresariais completos: patrimonial, responsabilidade civil, equipamentos e muito mais.',
          },
          {
            title: 'Seguro Saúde',
            description: 'Planos de saúde e seguros saúde com as melhores operadoras do mercado. Cobertura nacional e internacional.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como contratar um Seguro?"
        steps={[
          {
            number: 1,
            title: 'Solicite uma Cotação',
            description: 'Preencha o formulário informando suas necessidades. Nossa equipe especializada entrará em contato.',
          },
          {
            number: 2,
            title: 'Análise Personalizada',
            description: 'Analisamos seu perfil e necessidades para encontrar o seguro ideal com as melhores coberturas.',
          },
          {
            number: 3,
            title: 'Compare Propostas',
            description: 'Apresentamos propostas das melhores seguradoras do mercado para você comparar e escolher.',
          },
          {
            number: 4,
            title: 'Contrate e Proteja',
            description: 'Após escolher a melhor proposta, formalize a contratação e tenha sua proteção ativa imediatamente.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Por que contratar um Seguro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Tranquilidade</h3>
                <p className="text-body">
                  Tenha paz de espírito sabendo que você e sua família estão protegidos contra imprevistos e situações inesperadas.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Proteção Financeira</h3>
                <p className="text-body">
                  Evite grandes despesas em caso de sinistros. O seguro cobre os custos e protege seu patrimônio.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Assistência 24h</h3>
                <p className="text-body">
                  Conte com assistência 24 horas por dia, 7 dias por semana, para emergências e sinistros.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Coberturas Personalizadas</h3>
                <p className="text-body">
                  Escolha as coberturas que realmente fazem sentido para você, pagando apenas pelo que precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Seguros"
        title="Solicite uma Cotação de Seguro"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar as melhores propostas do mercado."
      />
    </>
  )
}
