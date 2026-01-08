'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import { useModalFormularioHome } from '@/contexts/ModalFormularioHomeContext'

function HeaderContent() {
  const { openModal } = useModalFormularioHome()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-petroleum-dark shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-smart-gold.png"
              alt="SmartCred - Crédito Inteligente"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#quem-somos" className="text-white hover:text-yellow-primary transition-colors">
              Quem Somos
            </Link>
            <Link href="#produtos" className="text-white hover:text-yellow-primary transition-colors">
              Produtos
            </Link>
            <Link href="#atendimento" className="text-white hover:text-yellow-primary transition-colors">
              Atendimento
            </Link>
            <button onClick={openModal} className="btn-primary">
              Saiba Mais
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-petroleum-light">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#quem-somos"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="#produtos"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="#atendimento"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Atendimento
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openModal()
                }}
                className="btn-primary text-center"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default function Header() {
  const pathname = usePathname()

  // Não renderizar o Header na página de investidores
  if (pathname?.includes('/investidores-usina-solar')) {
    return null
  }

  return <HeaderContent />

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-petroleum-dark shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-smart-gold.png"
              alt="SmartCred - Crédito Inteligente"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#quem-somos" className="text-white hover:text-yellow-primary transition-colors">
              Quem Somos
            </Link>
            <Link href="#produtos" className="text-white hover:text-yellow-primary transition-colors">
              Produtos
            </Link>
            <Link href="#atendimento" className="text-white hover:text-yellow-primary transition-colors">
              Atendimento
            </Link>
            <button onClick={openModal} className="btn-primary">
              Saiba Mais
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-petroleum-light">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#quem-somos"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="#produtos"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="#atendimento"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Atendimento
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openModal()
                }}
                className="btn-primary text-center"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
