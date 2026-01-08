'use client'

import { FiDollarSign, FiLock, FiStar, FiHeadphones } from 'react-icons/fi'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FiDollarSign,
    title: 'As melhores Taxas do Mercado',
    description: 'Negociamos as melhores condições para você',
  },
  {
    icon: FiLock,
    title: 'Crédito descomplicado',
    description: 'Processo simples e rápido, sem burocracia',
  },
  {
    icon: FiStar,
    title: 'Agilidade e praticidade',
    description: 'Respostas rápidas e soluções eficientes',
  },
  {
    icon: FiHeadphones,
    title: 'Atendimento Premium',
    description: 'Equipe especializada pronta para ajudar',
  },
]

export default function OpportunitiesSection() {
  return (
    <section className="bg-petroleum-dark section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-1 text-center mb-16"
        >
          Juntos em um Horizonte de Oportunidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-petroleum-dark" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
