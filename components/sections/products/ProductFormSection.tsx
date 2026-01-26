'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiMail, FiUser } from 'react-icons/fi'
import { trackMetaLead } from '@/lib/services/metaConversions'
import { trackRDStationLead } from '@/lib/services/rdStation'

interface ProductFormSectionProps {
  productName: string
  title?: string
  description?: string
}

export default function ProductFormSection({
  productName,
  title = 'Solicite uma Proposta Personalizada',
  description = 'Preencha o formulário e nossa equipe entrará em contato em até 24 horas',
}: ProductFormSectionProps) {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Separar nome completo em primeiro e último nome
      const nameParts = formData.nomeCompleto.trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

      // Enviar conversão para Meta
      await trackMetaLead({
        email: formData.email,
        phone: formData.telefone,
        firstName,
        lastName,
        product: productName,
        source: `product_page_${productName.toLowerCase().replace(/\s+/g, '_')}`,
      })

      // Enviar lead para RD Station
      await trackRDStationLead({
        email: formData.email,
        name: formData.nomeCompleto,
        phone: formData.telefone,
        product: productName,
        source: `product_page_${productName.toLowerCase().replace(/\s+/g, '_')}`,
      })

      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nomeCompleto: '',
          email: '',
          telefone: '',
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Ainda mostra sucesso mesmo se o tracking falhar
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          nomeCompleto: '',
          email: '',
          telefone: '',
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-gradient-to-br from-gray-light to-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="text-body max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-product p-8"
          >
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
              <form 
                name={`formulario-${productName.toLowerCase().replace(/\s+/g, '-')}`}
                id={`formulario-${productName.toLowerCase().replace(/\s+/g, '-')}`}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Nome Completo */}
                <div>
                  <label htmlFor="nome-completo" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FiUser className="inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome-completo"
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FiMail className="inline mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
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
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FiPhone className="inline mr-2" />
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all"
                  />
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
                      <span>Solicitar Proposta</span>
                      <FiArrowRight />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Ao enviar este formulário, você concorda em ser contatado por nossa equipe.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
