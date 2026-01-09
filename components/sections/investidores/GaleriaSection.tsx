'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Lista de imagens da galeria
const galleryImages = [
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.05 (1).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.05.jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.04 (4).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.04 (3).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.04 (2).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.04 (1).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.04.jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.03 (2).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.03 (1).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.03.jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.02 (2).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.02 (1).jpeg',
  '/galeria/WhatsApp Image 2026-01-08 at 16.29.02.jpeg',
]

export default function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Usar sempre todas as imagens da lista
  const images = galleryImages
  
  // Função para normalizar o caminho da imagem (codificar espaços para URLs)
  const normalizeImagePath = (path: string | null): string => {
    if (!path) return ''
    // Codificar apenas o nome do arquivo, mantendo o caminho da pasta
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const directory = parts.slice(0, -1).join('/')
    // Codificar o nome do arquivo para tratar espaços
    const encodedFileName = encodeURIComponent(fileName)
    return `${directory}/${encodedFileName}`
  }

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const next = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(next)
    setSelectedImage(galleryImages[next])
  }

  const prevImage = () => {
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prev)
    setSelectedImage(galleryImages[prev])
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Nossas <span className="text-yellow-primary">Instalações</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Conheça de perto nossos projetos e instalações de usinas solares
          </p>
        </motion.div>

        {/* Galeria Desktop - Layout em Grid com Preview */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            {images.slice(0, 6).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-card cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className="relative w-full h-full bg-gray-200">
                  <Image
                    src={normalizeImagePath(src)}
                    alt={`Instalação ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 1200px) 33vw, 400px"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImagem não encontrada%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-petroleum-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Galeria Mobile - Layout em Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 6).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-card cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className="relative w-full h-full bg-gray-200">
                  <Image
                    src={normalizeImagePath(src)}
                    alt={`Instalação ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="50vw"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImagem não encontrada%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-petroleum-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal de Visualização */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full max-h-[90vh]"
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-primary transition-colors z-10"
                  aria-label="Fechar"
                >
                  <FiX size={32} />
                </button>
                
                <div className="relative w-full h-[80vh] bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={normalizeImagePath(selectedImage)}
                    alt={`Instalação ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    unoptimized
                  />
                </div>
                
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-r-lg transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-l-lg transition-colors"
                    aria-label="Próxima imagem"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
