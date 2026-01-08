'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiArrowRight, FiPhone, FiMail, FiUser } from 'react-icons/fi'
import { useModalFormulario } from '@/contexts/ModalFormularioContext'

export default function ModalFormularioInvestidores() {
  const { isOpen, closeModal } = useModalFormulario()
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    patrimonio: '',
    saldoInvestimento: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          nomeCompleto: '',
          email: '',
          telefone: '',
          patrimonio: '',
          saldoInvestimento: '',
        })
        setSubmitted(false)
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio - aqui você integraria com sua API
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        closeModal()
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-card shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-petroleum-dark to-petroleum-light px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Agende Sua{' '}
                    <span className="text-yellow-primary">Reunião Estratégica</span>
                  </h2>
                  <p className="text-white/80 text-sm mt-1">
                    Preencha o formulário e entraremos em contato em até 24 horas
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-yellow-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label="Fechar modal"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                    >
                      <FiArrowRight className="text-green-600 rotate-[-45deg]" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-petroleum-dark mb-4">
                      Formulário Enviado com Sucesso!
                    </h3>
                    <p className="text-body">
                      Nossa equipe entrará em contato em até 24 horas para agendar sua reunião estratégica.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome Completo */}
                    <div>
                      <label htmlFor="modal-nome-completo" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiUser className="inline mr-2" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="modal-nome-completo"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiMail className="inline mr-2" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="modal-telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiPhone className="inline mr-2" />
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="modal-telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Patrimônio Total */}
                    <div>
                      <label htmlFor="modal-patrimonio" className="block text-sm font-semibold text-gray-700 mb-2">
                        Patrimônio Total *
                      </label>
                      <select
                        id="modal-patrimonio"
                        name="patrimonio"
                        value={formData.patrimonio}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="300k-500k">R$ 300.000 - R$ 500.000</option>
                        <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                        <option value="1m-3m">R$ 1.000.000 - R$ 3.000.000</option>
                        <option value="3m-5m">R$ 3.000.000 - R$ 5.000.000</option>
                        <option value="5m-10m">R$ 5.000.000 - R$ 10.000.000</option>
                        <option value="acima-10m">Acima de R$ 10.000.000</option>
                      </select>
                    </div>

                    {/* Saldo Para Investimento */}
                    <div>
                      <label htmlFor="modal-saldo-investimento" className="block text-sm font-semibold text-gray-700 mb-2">
                        Saldo Disponível para Investimento *
                      </label>
                      <select
                        id="modal-saldo-investimento"
                        name="saldoInvestimento"
                        value={formData.saldoInvestimento}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="até-100k">Até R$ 100.000</option>
                        <option value="100k-300k">R$ 100.000 - R$ 300.000</option>
                        <option value="300k-500k">R$ 300.000 - R$ 500.000</option>
                        <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                        <option value="1m-3m">R$ 1.000.000 - R$ 3.000.000</option>
                        <option value="3m-5m">R$ 3.000.000 - R$ 5.000.000</option>
                        <option value="acima-5m">Acima de R$ 5.000.000</option>
                      </select>
                    </div>

                    {/* Botão Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full inline-flex items-center justify-center space-x-2 text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Enviando...</span>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-petroleum-dark"></div>
                        </>
                      ) : (
                        <>
                          <span>Agendar Reunião Estratégica Gratuita</span>
                          <FiArrowRight />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                      Ao enviar este formulário, você concorda em ser contatado por nossa equipe.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
