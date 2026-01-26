import type { Metadata } from 'next'
import HeroProductSection from '@/components/sections/products/HeroProductSection'
import ProductBenefitsSection from '@/components/sections/products/ProductBenefitsSection'
import ProductHowItWorksSection from '@/components/sections/products/ProductHowItWorksSection'
import ProductFormSection from '@/components/sections/products/ProductFormSection'

export const metadata: Metadata = {
  title: 'Empréstimo Pessoal | SmartCred - Solução Rápida para suas Necessidades',
  description: 'Empréstimo pessoal com condições flexíveis e aprovação rápida. Compare as melhores taxas do mercado e encontre a solução ideal para suas necessidades financeiras.',
  keywords: 'empréstimo pessoal, empréstimo online, crédito pessoal, empréstimo rápido, empréstimo sem burocracia, SmartCred',
  authors: [{ name: 'SmartCred' }],
  openGraph: {
    title: 'Empréstimo Pessoal | SmartCred - Solução Rápida',
    description: 'Empréstimo pessoal com condições flexíveis e aprovação rápida. Compare as melhores taxas do mercado.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'Empréstimo Pessoal - SmartCred',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EmprestimoPage() {
  return (
    <>
      <HeroProductSection
        title="Empréstimo Pessoal"
        subtitle="A solução financeira ideal para realizar seus projetos e objetivos. Condições flexíveis, aprovação rápida e as melhores taxas do mercado."
        highlights={[
          'Aprovação em até 24h',
          'Condições flexíveis',
          'Até 84 meses para pagar',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Solicite seu Empréstimo Agora"
      />

      <ProductBenefitsSection
        title="Vantagens do Empréstimo Pessoal"
        benefits={[
          {
            title: 'Aprovação Rápida',
            description: 'Processo simplificado com análise ágil. Em muitos casos, a aprovação sai em até 24 horas úteis.',
          },
          {
            title: 'Condições Flexíveis',
            description: 'Parcelas que cabem no seu bolso. Escolha o prazo que melhor se adequa à sua situação financeira.',
          },
          {
            title: 'Sem Necessidade de Garantia',
            description: 'Empréstimo pessoal sem necessidade de oferecer garantias como imóvel ou veículo.',
          },
          {
            title: 'Uso Livre do Dinheiro',
            description: 'Use o dinheiro para qualquer finalidade: quitar dívidas, reformar a casa, fazer uma viagem ou investir.',
          },
          {
            title: 'Atendimento Personalizado',
            description: 'Nossa equipe especializada analisa seu perfil e encontra a melhor solução para suas necessidades.',
          },
          {
            title: 'Transparência Total',
            description: 'Todas as condições são apresentadas de forma clara e transparente, sem surpresas ou taxas escondidas.',
          },
        ]}
      />

      <ProductHowItWorksSection
        title="Como funciona o Empréstimo Pessoal?"
        steps={[
          {
            number: 1,
            title: 'Solicite Online',
            description: 'Preencha o formulário com seus dados. Nossa equipe entrará em contato para entender sua necessidade e perfil.',
          },
          {
            number: 2,
            title: 'Análise de Crédito',
            description: 'Analisamos seu perfil junto às melhores instituições financeiras do mercado para encontrar a melhor proposta.',
          },
          {
            number: 3,
            title: 'Receba Propostas',
            description: 'Apresentamos as melhores condições disponíveis para seu perfil, com taxas e prazos personalizados.',
          },
          {
            number: 4,
            title: 'Contrate e Receba',
            description: 'Após escolher a melhor proposta, assine o contrato e receba o dinheiro na sua conta em até 48 horas.',
          },
        ]}
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Para que usar o Empréstimo Pessoal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Quitar Dívidas</h3>
                <p className="text-body">
                  Reorganize suas finanças consolidando várias dívidas em uma única parcela com taxa reduzida.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Reformas e Melhorias</h3>
                <p className="text-body">
                  Realize aquela reforma na casa ou melhoria que você sempre sonhou sem comprometer seu orçamento mensal.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Investimentos</h3>
                <p className="text-body">
                  Invista em educação, cursos, equipamentos ou qualquer oportunidade que gere retorno financeiro.
                </p>
              </div>
              <div className="card-product p-6">
                <h3 className="heading-3 mb-4">Emergências</h3>
                <p className="text-body">
                  Tenha uma solução rápida para imprevistos e emergências financeiras que possam surgir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFormSection
        productName="Empréstimo"
        title="Solicite seu Empréstimo Pessoal"
        description="Preencha o formulário e nossa equipe especializada entrará em contato para apresentar as melhores condições disponíveis no mercado."
      />
    </>
  )
}
