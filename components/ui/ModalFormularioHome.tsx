'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiArrowRight, FiPhone, FiMail, FiUser } from 'react-icons/fi'
import { useModalFormularioHome } from '@/contexts/ModalFormularioHomeContext'

export default function ModalFormularioHome() {
  const { isOpen, closeModal } = useModalFormularioHome()
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    produto: '',
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
          produto: '',
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
                    Fale <span className="text-yellow-primary">Conosco</span>
                  </h2>
                  <p className="text-white/80 text-sm mt-1">
                    Preencha o formulário e entraremos em contato em breve
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
                      Nossa equipe entrará em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome Completo */}
                    <div>
                      <label htmlFor="modal-home-nome-completo" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiUser className="inline mr-2" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="modal-home-nome-completo"
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
                      <label htmlFor="modal-home-email" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiMail className="inline mr-2" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="modal-home-email"
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
                      <label htmlFor="modal-home-telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                        <FiPhone className="inline mr-2" />
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="modal-home-telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Produto */}
                    <div>
                      <label htmlFor="modal-home-produto" className="block text-sm font-semibold text-gray-700 mb-2">
                        Selecione o produto de seu interesse *
                      </label>
                      <select
                        id="modal-home-produto"
                        name="produto"
                        value={formData.produto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Selecione o produto de seu interesse</option>
                        <option value="Consignado">Consignado</option>
                        <option value="Empréstimo">Empréstimo</option>
                        <option value="Seguros">Seguros</option>
                        <option value="Consórcio">Consórcio</option>
                        <option value="Financiamento">Financiamento</option>
                        <option value="Energia Solar">Energia Solar</option>
                        <option value="Soluções Agro">Soluções Agro</option>
                        <option value="Produtos PJ">Produtos PJ</option>
                        <option value="Assessoria PJ">Assessoria PJ</option>
                        <option value="Recuperação de Score">Recuperação de Score</option>
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
                          <span>Enviar Formulário</span>
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
