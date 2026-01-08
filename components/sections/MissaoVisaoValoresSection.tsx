'use client'

import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

const valores = [
  {
    icon: FiTarget,
    title: 'Missão',
    description: 'Oferecer soluções financeiras personalizadas e acessíveis, proporcionando crédito inteligente e consultoria especializada para pessoas físicas e jurídicas, sempre com transparência, agilidade e compromisso com a realização dos sonhos de nossos clientes.',
  },
  {
    icon: FiEye,
    title: 'Visão',
    description: 'Ser reconhecida como a principal referência em soluções financeiras na região, destacando-nos pela excelência no atendimento, inovação constante e pela capacidade de transformar desafios financeiros em oportunidades de crescimento e realização.',
  },
  {
    icon: FiHeart,
    title: 'Valores',
    description: 'Transparência em todas as relações, ética como fundamento de nossos negócios, comprometimento com o sucesso de cada cliente, inovação constante em nossos processos e produtos, e respeito pela individualidade e necessidades específicas de cada pessoa ou empresa que confia em nossos serviços.',
  },
]

export default function MissaoVisaoValoresSection() {
  return (
    <section id="quem-somos" className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Os pilares que guiam a Horizonte Soluções Financeiras em cada decisão e ação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-product p-8 text-center"
              >
                <div className="bg-yellow-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-petroleum-dark" />
                </div>
                <h3 className="heading-3 mb-4">{item.title}</h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
