'use client'

import { useState } from 'react'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com sua API de newsletter
    console.log('Newsletter signup:', email)
    alert('Inscrição realizada com sucesso!')
    setEmail('')
  }

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
            <FiMail size={28} className="text-petroleum-dark" />
          </div>
          <h2 className="heading-1 mb-6">
            Assine nosso boletim mensal e fique por dentro das melhores ofertas, juros mais baixos, oportunidades exclusivas e novidades do mercado financeiro.
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 rounded-button border-0 focus:outline-none focus:ring-2 focus:ring-yellow-primary text-gray-900"
            />
            <button
              type="submit"
              className="bg-petroleum-dark hover:bg-petroleum-light text-white font-semibold px-8 py-4 rounded-button transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Assinar</span>
              <FiArrowRight />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
