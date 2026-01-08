'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiInstagram, FiFacebook, FiLinkedin, FiArrowRight } from 'react-icons/fi'

export default function Footer() {
  const pathname = usePathname()

  // Não renderizar o Footer na página de investidores
  if (pathname?.includes('/investidores-usina-solar')) {
    return null
  }

  return (
    <footer className="bg-petroleum-dark text-white relative">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="container-custom">
          <div className="relative h-1">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-primary to-transparent"></div>
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-petroleum-dark px-6 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom section-padding pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo-smart-gold.png"
                alt="SmartCred - Crédito Inteligente"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-yellow-primary">
                HORIZONTE SOLUÇÕES FINANCEIRAS
              </p>
              <p className="text-xs text-gray-400 italic">
                Franquia SmartCred
              </p>
            </div>
            <p className="text-sm text-gray-300">
              TOQUIO E VANTINI SERVIÇOS LTDA
            </p>
            <p className="text-sm text-gray-300">
              CNPJ: 63.106.661/0001-16
            </p>
            <p className="text-sm text-gray-300">
              Vila Tibiriça<br />
              Santo André - SP
            </p>
            <p className="text-sm text-gray-300">
              <a href="tel:+5511941556497" className="hover:text-yellow-primary transition-colors">
                (11) 94155-6497
              </a>
            </p>
            <p className="text-sm text-gray-300">
              <a href="mailto:smartsantoandre.sp@smartcredbrasil.com.br" className="hover:text-yellow-primary transition-colors break-all">
                smartsantoandre.sp@smartcredbrasil.com.br
              </a>
            </p>
            <Link href="#contato" className="btn-primary inline-flex items-center space-x-2">
              <span>Entre em Contato</span>
              <FiArrowRight />
            </Link>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contato" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Nossos Produtos
                </Link>
              </li>
              <li>
                <Link href="#quem-somos" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#time" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Nosso Time
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#consignado" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Consignado
                </Link>
              </li>
              <li>
                <Link href="#emprestimo" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Empréstimo
                </Link>
              </li>
              <li>
                <Link href="#seguros" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Seguros
                </Link>
              </li>
              <li>
                <Link href="#consorcios" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Consórcios
                </Link>
              </li>
              <li>
                <Link href="#financiamentos" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Financiamentos
                </Link>
              </li>
              <li>
                <Link href="#solucoes-energia" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Soluções em Energia
                </Link>
              </li>
              <li>
                <Link href="#factoring-securitizacao" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Factoring e Securitização
                </Link>
              </li>
              <li>
                <Link href="#solucoes-agro" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Soluções Agro
                </Link>
              </li>
              <li>
                <Link href="#divida-assessoria-capital" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Dívida e Assessoria de Capital
                </Link>
              </li>
              <li>
                <Link href="#gestao-assessoria-consultoria" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Gestão, Assessoria e Consultoria
                </Link>
              </li>
              <li>
                <Link href="#antecipacao-precatorios" className="text-gray-300 hover:text-yellow-primary transition-colors">
                  Antecipação de Precatórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/smartcred"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/smartcred"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://linkedin.com/company/smartcred"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-petroleum-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300 text-center md:text-left space-y-1">
              <p>
                © 2024 <span className="font-semibold text-yellow-primary">HORIZONTE SOLUÇÕES FINANCEIRAS</span> - Franquia SmartCred.
              </p>
              <p className="text-xs text-gray-400">
                SmartCred é marca registrada. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/termos" className="text-sm text-gray-300 hover:text-yellow-primary transition-colors">
                TERMOS DE USO
              </Link>
              <Link href="/privacidade" className="text-sm text-gray-300 hover:text-yellow-primary transition-colors">
                POLÍTICA DE PRIVACIDADE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
