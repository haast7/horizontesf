'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Antecipe o Saque-Aniversário do FGTS e Realize Seus Projetos em 2025',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Entenda como antecipar seu saque-aniversário e realizar seus projetos ainda este ano.',
  },
  {
    id: 2,
    title: 'Alerta de Fraude: Entenda o Golpe do "Pix Errado" e Saiba Como se Proteger',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Fique atento aos golpes mais comuns e aprenda a se proteger de fraudes financeiras.',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Nossos últimos insights
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Conteúdo para você entender, planejar e conquistar suas finanças
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-product overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 mb-3 group-hover:text-petroleum-light transition-colors">
                  {post.title}
                </h3>
                <p className="text-body mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-petroleum-dark font-semibold hover:text-petroleum-light transition-colors inline-flex items-center space-x-2"
                >
                  <span>Ler mais</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-primary inline-flex items-center space-x-2">
            <span>Mais artigos</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
