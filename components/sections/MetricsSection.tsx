'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '600+',
    label: 'Clientes Satisfeitos',
  },
  {
    value: 'R$ 5 mi',
    label: 'Crédito Movimentado',
  },
  {
    value: '+ 26',
    label: 'Bancos Parceiros',
  },
  {
    value: '90%',
    label: 'Clientes Recomendam',
  },
]

export default function MetricsSection() {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-petroleum-dark mb-2">
                {metric.value}
              </div>
              <div className="text-gray-700 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
