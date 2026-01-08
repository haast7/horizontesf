import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'Termos de Uso - Horizonte Soluções Financeiras',
  description: 'Termos de uso e condições de utilização dos serviços Horizonte Soluções Financeiras.',
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container-custom section-padding">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-petroleum-dark hover:text-petroleum-light transition-colors mb-8"
        >
          <FiArrowLeft />
          <span>Voltar para o site</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Termos de Uso</h1>
          <p className="text-body text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-body">
            <section>
              <h2 className="heading-3 mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e utilizar o site da <strong>Horizonte Soluções Financeiras</strong>, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">2. Sobre a Horizonte Soluções Financeiras</h2>
              <p className="mb-4">
                A <strong>Horizonte Soluções Financeiras</strong> é uma empresa registrada sob o CNPJ 63.106.661/0001-16, localizada em Vila Tibiriça, Santo André - SP. Operamos como franquia da SmartCred, marca registrada, oferecendo soluções financeiras personalizadas para nossos clientes.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">3. Uso do Site</h2>
              <p className="mb-4">
                O site da Horizonte Soluções Financeiras destina-se a fornecer informações sobre nossos produtos e serviços financeiros. Você concorda em:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Utilizar o site apenas para fins legais e de acordo com estes termos</li>
                <li>Não utilizar o site de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores</li>
                <li>Não tentar obter acesso não autorizado a qualquer parte do site</li>
                <li>Fornecer informações precisas e atualizadas ao preencher formulários</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">4. Produtos e Serviços</h2>
              <p className="mb-4">
                As informações sobre produtos e serviços financeiros apresentadas neste site são fornecidas apenas para fins informativos. A aprovação de qualquer produto ou serviço está sujeita à análise de crédito e condições específicas que serão comunicadas durante o processo de contratação.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">5. Privacidade e Proteção de Dados</h2>
              <p className="mb-4">
                O uso de suas informações pessoais está sujeito à nossa Política de Privacidade, que faz parte integrante destes Termos de Uso. Ao utilizar nosso site, você concorda com a coleta e uso de informações conforme descrito na Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">6. Propriedade Intelectual</h2>
              <p className="mb-4">
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade da Horizonte Soluções Financeiras, da SmartCred (marca franqueadora) ou de seus parceiros e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">7. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                A Horizonte Soluções Financeiras não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar este site ou seus serviços.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">8. Modificações dos Termos</h2>
              <p className="mb-4">
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. Recomendamos que você revise periodicamente estes termos.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">9. Lei Aplicável</h2>
              <p className="mb-4">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes de Santo André - SP.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">10. Contato</h2>
              <p className="mb-4">
                Para questões relacionadas a estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-gray-light p-6 rounded-card">
                <p className="mb-2"><strong>Horizonte Soluções Financeiras</strong></p>
                <p className="mb-2 text-sm text-gray-600">Franquia SmartCred</p>
                <p className="mb-2">CNPJ: 63.106.661/0001-16</p>
                <p className="mb-2">Vila Tibiriça, Santo André - SP</p>
                <p className="mb-2">
                  <strong>Telefone/WhatsApp:</strong>{' '}
                  <a href="tel:+5511941556497" className="text-petroleum-dark hover:text-petroleum-light">
                    (11) 94155-6497
                  </a>
                </p>
                <p>
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:smartsantoandre.sp@smartcredbrasil.com.br" className="text-petroleum-dark hover:text-petroleum-light break-all">
                    smartsantoandre.sp@smartcredbrasil.com.br
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
