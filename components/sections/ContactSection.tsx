'use client'

import { useState } from 'react'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    document: '',
    product: 'Consignado',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com sua API ou serviço de formulário
    console.log('Form submitted:', formData)
    alert('Formulário enviado! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      document: '',
      product: 'Consignado',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="relative bg-white section-padding">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        }}
      ></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Fale Conosco</h2>
          <p className="text-body max-w-2xl mx-auto">
            Entre em contato e agende uma consultoria gratuita
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-product p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome e Sobrenome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                  CPF ou CNPJ
                </label>
                <input
                  type="text"
                  id="document"
                  name="document"
                  value={formData.document}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Produto
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent"
                >
                  <option value="Consignado">Consignado</option>
                  <option value="Empréstimo">Empréstimo</option>
                  <option value="Seguros">Seguros</option>
                  <option value="Consórcios">Consórcios</option>
                  <option value="Financiamentos">Financiamentos</option>
                  <option value="Soluções em Energia">Soluções em Energia</option>
                  <option value="Factoring e Securitização">Factoring e Securitização</option>
                  <option value="Soluções Agro">Soluções Agro</option>
                  <option value="Dívida e Assessoria de Capital">Dívida e Assessoria de Capital</option>
                  <option value="Gestão, Assessoria e Consultoria">Gestão, Assessoria e Consultoria</option>
                  <option value="Antecipação de Precatórios">Antecipação de Precatórios</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center space-x-2">
                <span>Enviar</span>
                <FiArrowRight />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-yellow-primary rounded-card p-8 text-center">
              <div className="bg-petroleum-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiPhone size={28} className="text-yellow-primary" />
              </div>
              <h3 className="text-xl font-semibold text-petroleum-dark mb-2">
                Fale conosco via telefone
              </h3>
              <a
                href="tel:+5511941556497"
                className="text-2xl font-bold text-petroleum-dark hover:text-petroleum-light transition-colors"
              >
                (11) 94155-6497
              </a>
              <p className="text-sm text-petroleum-dark mt-2">
                WhatsApp disponível
              </p>
            </div>

            <div className="card-product p-6">
              <h3 className="heading-3 mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-body">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 12h</p>
                <p><strong>Domingo:</strong> Fechado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
