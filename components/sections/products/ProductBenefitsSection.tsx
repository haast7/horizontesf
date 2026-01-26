'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

interface Benefit {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ProductBenefitsSectionProps {
  title?: string
  benefits: Benefit[]
}

export default function ProductBenefitsSection({
  title = 'Por que escolher este produto?',
  benefits,
}: ProductBenefitsSectionProps) {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-product p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon || (
                    <FiCheckCircle className="text-yellow-primary" size={32} />
                  )}
                </div>
                <div>
                  <h3 className="heading-3 mb-2">{benefit.title}</h3>
                  <p className="text-body">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
