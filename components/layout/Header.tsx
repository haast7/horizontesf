'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Não renderizar o Header na página de investidores
  if (pathname?.includes('/investidores-usina-solar')) {
    return null
  }

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
            <Link href="#conta" className="text-white hover:text-petroleum-dark transition-colors">
              Acesse sua Conta
            </Link>
            <Link href="#abrir-conta" className="btn-primary">
              Abra sua Conta
            </Link>
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
              <Link
                href="#conta"
                className="text-white hover:text-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Acesse sua Conta
              </Link>
              <Link
                href="#abrir-conta"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Abra sua Conta
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
