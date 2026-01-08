'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiFileText, FiUsers, FiAward } from 'react-icons/fi'

const garantias = [
  {
    icon: FiFileText,
    titulo: 'Contratos Regulados pela ANEEL',
    descricao: 'Todos os projetos seguem rigorosamente as normas da Agência Nacional de Energia Elétrica.',
  },
  {
    icon: FiCheckCircle,
    titulo: 'Due Diligence Completo',
    descricao: 'Análise técnica, jurídica e financeira detalhada antes de qualquer investimento.',
  },
  {
    icon: FiUsers,
    titulo: 'Equipe Especializada',
    descricao: 'Engenheiros, advogados e analistas financeiros com décadas de experiência no setor.',
  },
  {
    icon: FiAward,
    titulo: 'Histórico Comprovado',
    descricao: 'Mais de R$ 500 milhões em projetos entregues com sucesso para investidores qualificados.',
  },
]

export default function GarantiasSection() {
  return (
    <section className="relative bg-gradient-to-br from-petroleum-dark to-petroleum-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sua Tranquilidade é Nossa{' '}
            <span className="text-yellow-primary">Prioridade</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Investimos em processos rigorosos para garantir a segurança e transparência
            de cada projeto apresentado aos nossos investidores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {garantias.map((garantia, index) => {
            const Icon = garantia.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-primary flex-shrink-0">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {garantia.titulo}
                    </h3>
                    <p className="text-white/80">{garantia.descricao}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Destaque de Segurança */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-yellow-primary rounded-card p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-petroleum-dark mb-4">
            Investimento com Segurança e Transparência Total
          </h3>
          <p className="text-lg text-petroleum-dark/90 max-w-2xl mx-auto">
            Trabalhamos apenas com projetos que passam por rigorosa análise de risco.
            Seu patrimônio merece o melhor.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
