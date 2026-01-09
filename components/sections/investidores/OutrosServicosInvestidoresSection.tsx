'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'
import { useModalFormulario } from '@/contexts/ModalFormularioContext'

export default function OutrosServicosInvestidoresSection() {
  const { openModal } = useModalFormulario()
  
  return (
    <section className="relative bg-gradient-to-br from-gray-light via-white to-gray-light section-padding">
      <div className="container-custom">
        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
