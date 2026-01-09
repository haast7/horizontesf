'use client'

export default function FooterInvestidores() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-petroleum-dark text-white py-6">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Horizonte Soluções Financeiras / SmartCred. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
