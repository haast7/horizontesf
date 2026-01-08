'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiTrendingUp, FiShield } from 'react-icons/fi'
import { useModalFormulario } from '@/contexts/ModalFormularioContext'

export default function HeroInvestidoresSection() {
  const { openModal } = useModalFormulario()
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-petroleum-dark/95 via-petroleum-dark/90 to-petroleum-dark/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge de Exclusividade */}
            <div className="inline-flex items-center space-x-2 bg-yellow-primary/20 backdrop-blur-sm border border-yellow-primary/30 rounded-full px-6 py-2 mb-6">
              <FiShield className="text-yellow-primary" size={20} />
              <span className="text-yellow-primary font-semibold text-sm md:text-base">
                Oportunidade Exclusiva para Investidores Qualificados
              </span>
            </div>

            <h1 className="heading-1 mb-6">
              Invista em Usina Solar e{' '}
              <span className="text-yellow-primary">Gere Renda Passiva</span>{' '}
              com Retorno de até 2,5% ao Mês
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed font-light">
              Transforme seu patrimônio em uma fonte de renda sustentável e previsível.
              <br />
              <span className="text-yellow-primary font-semibold">
                Investimento mínimo: R$ 300.000
              </span>
            </p>

            {/* Destaques Rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20"
              >
                <FiTrendingUp className="text-yellow-primary mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg">Até 2,5% ao Mês</p>
                <p className="text-white/80 text-sm">Retorno Garantido</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20"
              >
                <FiShield className="text-yellow-primary mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg">100% Seguro</p>
                <p className="text-white/80 text-sm">Contratos Regulados</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20"
              >
                <FiTrendingUp className="text-yellow-primary mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg">Renda Mensal</p>
                <p className="text-white/80 text-sm">Pagamentos Garantidos</p>
              </motion.div>
            </div>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={openModal}
                className="btn-primary inline-flex items-center space-x-3 text-lg px-10 py-5 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                <span>Agende Sua Reunião Estratégica Gratuita</span>
                <FiArrowDown />
              </button>
              <p className="text-white/70 text-sm mt-4">
                ⚡ Reunião exclusiva com especialista em investimentos de alto patrimônio
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowDown className="text-yellow-primary" size={24} />
        </motion.div>
      </div>
    </section>
  )
}
