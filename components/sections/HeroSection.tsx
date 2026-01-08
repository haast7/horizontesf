import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-petroleum-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-2xl">
          <h1 className="heading-1 mb-6">
            Expanda seus horizontes
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Encontre soluções financeiras sob medida para você e para seu negócio.
          </p>
          <Link
            href="#contato"
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Fale com nossos consultores</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
