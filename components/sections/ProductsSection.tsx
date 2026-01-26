'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  icon: string
  image: string
}

const products: Product[] = [
  {
    id: 'consignado',
    name: 'Consignado',
    icon: '💳',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'emprestimo',
    name: 'Empréstimo',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'seguros',
    name: 'Seguros',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'consorcios',
    name: 'Consórcios',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'financiamentos',
    name: 'Financiamentos',
    icon: '🏦',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'solucoes-energia',
    name: 'Soluções em Energia',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'factoring-securitizacao',
    name: 'Factoring e Securitização',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'solucoes-agro',
    name: 'Soluções Agro',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'divida-assessoria-capital',
    name: 'Dívida e Assessoria de Capital',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'gestao-assessoria-consultoria',
    name: 'Gestão, Assessoria e Consultoria',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'antecipacao-precatorios',
    name: 'Antecipação de Precatórios',
    icon: '⚖️',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
]

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      return () => container.removeEventListener('scroll', checkScrollability)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="produtos" className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-4">
          Realize seus sonhos e ofereça tranquilidade para a sua família
        </h2>
        <p className="text-body text-center mb-12 max-w-3xl mx-auto">
          Conheça nossos produtos financeiros desenvolvidos para atender suas necessidades
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={24} className="text-petroleum-dark" />
            </button>
          )}

          {/* Products Grid/Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-product flex-shrink-0 w-80"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-yellow-primary rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    {product.icon}
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-4">{product.name}</h3>
                  <Link
                    href={`/${product.id}`}
                    className="text-petroleum-dark font-semibold hover:text-petroleum-light transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Saiba mais</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Button Right */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <FiChevronRight size={24} className="text-petroleum-dark" />
            </button>
          )}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link href="#todos-produtos" className="btn-primary inline-flex items-center space-x-2">
            <span>Ver todos os Produtos</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
