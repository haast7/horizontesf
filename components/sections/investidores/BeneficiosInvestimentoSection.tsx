'use client'

import { motion } from 'framer-motion'
import { FiShield, FiTrendingUp, FiDollarSign, FiZap, FiLock, FiAward } from 'react-icons/fi'
import { useModalFormulario } from '@/contexts/ModalFormularioContext'

const beneficios = [
  {
    icon: FiTrendingUp,
    titulo: 'Retorno Previsível e Consistente',
    descricao: 'Receba pagamentos mensais garantidos através de contratos de longo prazo com distribuidoras de energia.',
    cor: 'bg-yellow-primary/10',
    iconColor: 'text-yellow-primary',
  },
  {
    icon: FiShield,
    titulo: 'Segurança Jurídica Total',
    descricao: 'Projetos regulados pela ANEEL com contratos claros e transparentes. Seu investimento está protegido por lei.',
    cor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: FiDollarSign,
    titulo: 'Diversificação de Portfólio',
    descricao: 'Reduza riscos diversificando seus investimentos em um setor em crescimento constante e independente de crises.',
    cor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: FiZap,
    titulo: 'Impacto Ambiental Positivo',
    descricao: 'Gere energia limpa e renovável enquanto lucra. Contribua para um futuro sustentável e valorize sua marca pessoal.',
    cor: 'bg-yellow-primary/10',
    iconColor: 'text-yellow-primary',
  },
  {
    icon: FiLock,
    titulo: 'Proteção Contra Inflação',
    descricao: 'Seus retornos são indexados e acompanham a inflação, protegendo seu poder de compra ao longo do tempo.',
    cor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: FiAward,
    titulo: 'Gestão Profissional',
    descricao: 'Nossa equipe especializada cuida de toda operação, manutenção e relacionamento com distribuidoras.',
    cor: 'bg-petroleum-dark/5',
    iconColor: 'text-petroleum-dark',
  },
]

export default function BeneficiosInvestimentoSection() {
  const { openModal } = useModalFormulario()
  
  return (
    <section className="relative bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Vantagens Exclusivas para{' '}
            <span className="text-yellow-primary">Investidores Qualificados</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Descubra por que investidores de alto patrimônio escolhem usina solar
            como parte essencial de sua estratégia de diversificação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${beneficio.cor} rounded-card p-8 hover:shadow-card-hover transition-all duration-300`}
              >
                <div className={`${beneficio.iconColor} mb-4`}>
                  <Icon size={40} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{beneficio.titulo}</h3>
                <p className="text-body text-sm">{beneficio.descricao}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action Intermediário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-petroleum-dark to-petroleum-light rounded-card p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para Multiplicar Seu Patrimônio?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Agende uma reunião estratégica gratuita com nossos especialistas em investimentos de alto patrimônio
            </p>
            <button
              onClick={openModal}
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Agendar Reunião Agora</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
