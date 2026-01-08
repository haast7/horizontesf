import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function SecondHeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-petroleum-dark/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <h2 className="heading-1 mb-8 max-w-4xl mx-auto">
          Abra sua conta na SmartCred e garanta sua Tranquilidade e Segurança Financeira
        </h2>
        <Link
          href="#abrir-conta"
          className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
        >
          <span>Quero saber mais</span>
          <FiArrowRight />
        </Link>
      </div>
    </section>
  )
}
