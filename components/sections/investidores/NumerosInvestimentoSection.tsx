'use client'

import { motion } from 'framer-motion'
import { FiDollarSign, FiTrendingUp, FiCalendar, FiZap } from 'react-icons/fi'

const numeros = [
  {
    icon: FiTrendingUp,
    valor: '1,7% - 2,5%',
    label: 'Retorno Mensal Médio',
    descricao: 'Taxa de retorno comprovada',
    cor: 'text-yellow-primary',
  },
  {
    icon: FiDollarSign,
    valor: 'R$ 300K',
    label: 'Investimento Mínimo',
    descricao: 'Valor inicial recomendado',
    cor: 'text-green-500',
  },
  {
    icon: FiCalendar,
    valor: '25 anos',
    label: 'Vida Útil do Projeto',
    descricao: 'Geração contínua de energia',
    cor: 'text-blue-500',
  },
  {
    icon: FiZap,
    valor: '100%',
    label: 'Energia Limpa',
    descricao: 'Impacto ambiental positivo',
    cor: 'text-yellow-primary',
  },
]

export default function NumerosInvestimentoSection() {
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
            Por Que Investidores Escolhem{' '}
            <span className="text-yellow-primary drop-shadow-lg">Usina Solar</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Números que comprovam a excelência do investimento em energia solar
            para quem busca diversificação e retorno consistente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {numeros.map((numero, index) => {
            const Icon = numero.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-product p-8 text-center hover:scale-105 transition-transform"
              >
                <div className={`${numero.cor} mb-4 flex justify-center ${numero.cor === 'text-yellow-primary' ? 'drop-shadow-lg' : ''}`}>
                  <Icon size={48} />
                </div>
                <div className="text-5xl font-bold text-petroleum-dark mb-2">
                  {numero.valor}
                </div>
                <h3 className="heading-3 text-lg mb-2">{numero.label}</h3>
                <p className="text-gray-600 text-sm">{numero.descricao}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Cálculo de Retorno */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-petroleum-dark to-petroleum-light rounded-card p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Exemplo de Retorno sobre Investimento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-primary mb-2">R$ 300.000</div>
              <p className="text-white/80">Investimento Inicial</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-primary mb-2">2,5%</div>
              <p className="text-white/80">Retorno Mensal Máximo</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-primary mb-2">R$ 7.500</div>
              <p className="text-white/80">Renda Mensal Estimada</p>
            </div>
          </div>
          <p className="text-center text-white/70 mt-6 text-sm">
            * Valores estimados baseados em projetos similares. Retorno real pode variar conforme condições de mercado.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
