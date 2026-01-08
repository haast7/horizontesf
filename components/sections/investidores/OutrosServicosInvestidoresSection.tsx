'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp, FiDollarSign, FiShield, FiBarChart2, FiBriefcase, FiHome } from 'react-icons/fi'
import Link from 'next/link'
import { useModalFormulario } from '@/contexts/ModalFormularioContext'

const servicos = [
  {
    icon: FiBriefcase,
    titulo: 'Fundos de Investimento Exclusivos',
    descricao: 'Acesso a fundos fechados com retornos superiores e estratégias sofisticadas para investidores qualificados.',
    cor: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: FiBarChart2,
    titulo: 'Private Equity e Venture Capital',
    descricao: 'Oportunidades em empresas em crescimento com potencial de valorização significativa.',
    cor: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: FiHome,
    titulo: 'Investimentos Imobiliários Premium',
    descricao: 'Fundos imobiliários e projetos de alto padrão com localização estratégica e retorno garantido.',
    cor: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: FiDollarSign,
    titulo: 'Debentures e Títulos Privados',
    descricao: 'Títulos de dívida de empresas sólidas com taxas atrativas e segurança comprovada.',
    cor: 'from-yellow-primary to-yellow-light',
    iconBg: 'bg-yellow-primary/20',
    iconColor: 'text-yellow-primary',
  },
  {
    icon: FiShield,
    titulo: 'Estruturação de Patrimônio',
    descricao: 'Planejamento sucessório, holding familiar e otimização tributária para proteger e multiplicar seu patrimônio.',
    cor: 'from-petroleum-dark to-petroleum-light',
    iconBg: 'bg-petroleum-dark/10',
    iconColor: 'text-petroleum-dark',
  },
  {
    icon: FiTrendingUp,
    titulo: 'Consultoria em Investimentos',
    descricao: 'Análise personalizada do seu perfil e construção de carteira diversificada alinhada aos seus objetivos.',
    cor: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
]

export default function OutrosServicosInvestidoresSection() {
  const { openModal } = useModalFormulario()
  
  return (
    <section className="relative bg-gradient-to-br from-gray-light via-white to-gray-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Outras Oportunidades de{' '}
            <span className="text-yellow-primary">Investimento Exclusivas</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Além de usina solar, oferecemos uma gama completa de soluções de investimento
            para investidores de alto patrimônio diversificarem e maximizarem seus retornos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => {
            const Icon = servico.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-product p-8 hover:scale-105 transition-transform group"
              >
                <div className={`${servico.iconBg} ${servico.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{servico.titulo}</h3>
                <p className="text-body text-sm mb-6">{servico.descricao}</p>
                <button
                  onClick={openModal}
                  className="inline-flex items-center text-petroleum-dark font-semibold hover:text-yellow-primary transition-colors"
                >
                  <span>Saiba mais</span>
                  <FiTrendingUp className="ml-2" />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-petroleum-dark via-petroleum-light to-petroleum-dark rounded-card p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Pronto para Transformar Seu Patrimônio?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para apresentar as melhores
                oportunidades de investimento personalizadas para o seu perfil
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Agendar Reunião Estratégica</span>
                  <FiTrendingUp />
                </button>
                <Link
                  href="/"
                  className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Conhecer Outros Serviços</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
