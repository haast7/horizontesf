'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock } from 'react-icons/fi'

const fases = [
  {
    numero: 1,
    titulo: 'Estudo de Viabilidade',
    descricoes: [
      'Estudo de viabilidade',
    ],
    duracao: '30 Dias',
    cor: 'bg-green-500',
  },
  {
    numero: 2,
    titulo: 'Projeto Aprovado e Início da Obra',
    descricoes: [
      'Projeto aprovado',
      'Pagamento integral para compra do material',
      'Início da obra',
    ],
    duracao: '15 Dias',
    cor: 'bg-blue-500',
  },
  {
    numero: 3,
    titulo: 'Instalação',
    descricoes: [
      'Instalação',
    ],
    duracao: '15 Dias',
    cor: 'bg-yellow-primary',
  },
  {
    numero: 4,
    titulo: 'Troca do Medidor e Aquisição de Locatários',
    descricoes: [
      'Troca do medidor pela concessionária',
      'Início da geração e aquisição de locatários',
    ],
    duracao: '4 Meses',
    cor: 'bg-purple-500',
  },
  {
    numero: 5,
    titulo: 'Início dos Recebimentos',
    descricoes: [
      'Início dos recebimentos',
    ],
    duracao: '6 Meses',
    cor: 'bg-petroleum-dark',
  },
]

export default function CronogramaSection() {
  return (
    <section className="relative bg-gradient-to-b from-petroleum-dark to-petroleum-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">
            Cronograma do <span className="text-yellow-primary">Investimento</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Entenda o processo completo desde o estudo de viabilidade até o início dos recebimentos
          </p>
        </motion.div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 transform -translate-y-1/2 z-0"></div>
            
            <div className="relative flex justify-between items-start">
              {fases.map((fase, index) => (
                <motion.div
                  key={fase.numero}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-1 flex flex-col items-center relative z-10"
                >
                  {/* Card */}
                  <div className="bg-white rounded-card p-6 w-full max-w-xs shadow-card-hover hover:shadow-2xl transition-all duration-300 mb-4">
                    {/* Barra colorida inferior */}
                    <div className={`${fase.cor} h-2 rounded-b-card absolute bottom-0 left-0 right-0`}></div>
                    
                    {/* Conteúdo */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-petroleum-dark">
                          {fase.numero}
                        </span>
                        <div className={`${fase.cor} rounded-full p-2`}>
                          <FiCheckCircle className="text-white" size={20} />
                        </div>
                      </div>
                      <h3 className="heading-3 text-lg mb-3 text-petroleum-dark">
                        {fase.titulo}
                      </h3>
                      <ul className="space-y-2 mb-4">
                        {fase.descricoes.map((desc, idx) => (
                          <li key={idx} className="text-body text-sm flex items-start">
                            <span className="text-petroleum-dark mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Duração */}
                    <div className={`${fase.cor} text-white px-4 py-2 rounded-button flex items-center justify-center space-x-2`}>
                      <FiClock size={16} />
                      <span className="font-semibold text-sm">{fase.duracao}</span>
                    </div>
                  </div>

                  {/* Conector para próxima fase */}
                  {index < fases.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-1/2 h-1 bg-white/20 transform translate-y-4 z-0"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-6">
          {fases.map((fase, index) => (
            <motion.div
              key={fase.numero}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Linha vertical conectora */}
              {index < fases.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/30 z-0"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Número e ícone */}
                <div className={`${fase.cor} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10 relative`}>
                  {fase.numero}
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-card p-6 flex-1 shadow-card-hover">
                  {/* Barra colorida inferior */}
                  <div className={`${fase.cor} h-2 rounded-b-card absolute bottom-0 left-0 right-0`}></div>
                  
                  <h3 className="heading-3 text-lg mb-3 text-petroleum-dark">
                    {fase.titulo}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {fase.descricoes.map((desc, idx) => (
                      <li key={idx} className="text-body text-sm flex items-start">
                        <span className="text-petroleum-dark mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Duração */}
                  <div className={`${fase.cor} text-white px-4 py-2 rounded-button inline-flex items-center space-x-2`}>
                    <FiClock size={16} />
                    <span className="font-semibold text-sm">{fase.duracao}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
