'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiMail, FiUser } from 'react-icons/fi'
import { trackMetaLead } from '@/lib/services/metaConversions'
import { trackRDStationLead } from '@/lib/services/rdStation'

export default function FormularioInvestidoresSection() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    patrimonio: '',
    saldoInvestimento: '',
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
        product: `Investidores - Patrimônio: ${formData.patrimonio}, Saldo: ${formData.saldoInvestimento}`,
        source: 'investidores_page',
      })

      // Enviar lead para RD Station
      await trackRDStationLead({
        email: formData.email,
        name: formData.nomeCompleto,
        phone: formData.telefone,
        product: `Investidores - Patrimônio: ${formData.patrimonio}, Saldo: ${formData.saldoInvestimento}`,
        source: 'investidores_page',
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
          patrimonio: '',
          saldoInvestimento: '',
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
          patrimonio: '',
          saldoInvestimento: '',
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="formulario-investidor" className="relative bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Agende Sua{' '}
            <span className="text-yellow-primary">Reunião Estratégica Gratuita</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Preencha o formulário abaixo e um de nossos especialistas em investimentos
            de alto patrimônio entrará em contato em até 24 horas para uma conversa exclusiva.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-product p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <FiArrowRight className="text-green-600 rotate-[-45deg]" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-petroleum-dark mb-4">
                  Formulário Enviado com Sucesso!
                </h3>
                <p className="text-body">
                  Nossa equipe entrará em contato em até 24 horas para agendar sua reunião estratégica.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome e Sobrenome */}
                <div>
                  <label htmlFor="nome-completo" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FiUser className="inline mr-2" />
                    Nome e Sobrenome *
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

                {/* Patrimônio Total */}
                <div>
                  <label htmlFor="patrimonio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Patrimônio Total *
                  </label>
                  <select
                    id="patrimonio"
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
                  <label htmlFor="saldoInvestimento" className="block text-sm font-semibold text-gray-700 mb-2">
                    Saldo Disponível para Investimento *
                  </label>
                  <select
                    id="saldoInvestimento"
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
          </motion.div>

          {/* Informações de Contato Alternativas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-petroleum-dark rounded-card p-6 text-white text-center">
              <FiPhone className="mx-auto mb-3 text-yellow-primary" size={32} />
              <h3 className="font-semibold mb-2">Prefere Ligar?</h3>
              <a
                href="tel:+5511941556497"
                className="text-yellow-primary hover:text-yellow-light transition-colors text-lg font-semibold"
              >
                (11) 94155-6497
              </a>
            </div>

            <div className="bg-petroleum-dark rounded-card p-6 text-white text-center">
              <FiMail className="mx-auto mb-3 text-yellow-primary" size={32} />
              <h3 className="font-semibold mb-2">Ou Envie um E-mail</h3>
              <a
                href="mailto:investidores@smartcred.com.br"
                className="text-yellow-primary hover:text-yellow-light transition-colors text-lg font-semibold"
              >
                investidores@smartcred.com.br
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
