'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

interface Step {
  number: number
  title: string
  description: string
}

interface ProductHowItWorksSectionProps {
  title?: string
  steps: Step[]
}

export default function ProductHowItWorksSection({
  title = 'Como funciona?',
  steps,
}: ProductHowItWorksSectionProps) {
  return (
    <section className="bg-gradient-to-br from-petroleum-dark to-petroleum-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="bg-yellow-primary text-petroleum-dark rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <div className="flex items-center justify-center h-0">
                    <FiArrowRight className="text-yellow-primary" size={32} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
