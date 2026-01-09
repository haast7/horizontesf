'use client'

import { FiArrowRight, FiCreditCard } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useModalFormularioHome } from '@/contexts/ModalFormularioHomeContext'

export default function NewsletterSection() {
  const { openModal } = useModalFormularioHome()

  return (
    <section className="bg-petroleum-dark section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-yellow-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <FiCreditCard size={28} className="text-petroleum-dark" />
          </div>
          <h2 className="heading-1 mb-6">
            Faça um orçamento ou libere seu crédito de forma segura e rápida
          </h2>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-yellow-primary hover:bg-yellow-600 text-petroleum-dark font-semibold px-8 py-4 rounded-button transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Saiba mais</span>
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
