import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'Política de Privacidade - Horizonte Soluções Financeiras',
  description: 'Política de privacidade e proteção de dados pessoais da Horizonte Soluções Financeiras.',
}

export default function PrivacidadePage() {
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
          <h1 className="heading-2 mb-4">Política de Privacidade</h1>
          <p className="text-body text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-body">
            <section>
              <h2 className="heading-3 mb-4">1. Introdução</h2>
              <p className="mb-4">
                A <strong>Horizonte Soluções Financeiras</strong>, franquia SmartCred, está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">2. Dados Coletados</h2>
              <p className="mb-4">Coletamos os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Dados de Identificação:</strong> Nome completo, CPF, CNPJ, RG, data de nascimento</li>
                <li><strong>Dados de Contato:</strong> E-mail, telefone, WhatsApp, endereço</li>
                <li><strong>Dados Financeiros:</strong> Informações sobre renda, histórico creditício, necessidades financeiras</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, cookies, páginas visitadas, tempo de permanência</li>
                <li><strong>Dados de Preferências:</strong> Produtos de interesse, preferências de comunicação</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">3. Como Coletamos Seus Dados</h2>
              <p className="mb-4">Coletamos dados pessoais através de:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Formulários preenchidos em nosso site</li>
                <li>Comunicação direta via telefone, e-mail ou WhatsApp</li>
                <li>Cookies e tecnologias similares durante a navegação</li>
                <li>Parceiros comerciais e instituições financeiras</li>
                <li>Bureaus de crédito e bases de dados públicas</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">4. Finalidade do Uso dos Dados</h2>
              <p className="mb-4">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Análise de crédito e aprovação de produtos financeiros</li>
                <li>Prestação de serviços e atendimento ao cliente</li>
                <li>Comunicação sobre produtos, serviços e ofertas</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
                <li>Melhoria de nossos serviços e experiência do usuário</li>
                <li>Prevenção de fraudes e segurança</li>
                <li>Envio de newsletter e conteúdo informativo</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-4">
                A Horizonte Soluções Financeiras pode compartilhar seus dados pessoais com:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Instituições Financeiras Parceiras:</strong> Para análise e aprovação de crédito</li>
                <li><strong>Bureaus de Crédito:</strong> Para consulta e registro de informações creditícias</li>
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos auxiliam na operação do negócio</li>
                <li><strong>Autoridades Competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                <li><strong>SmartCred (Franqueadora):</strong> Para fins de gestão e controle da franquia, conforme contrato de franquia</li>
              </ul>
              <p className="mb-4">
                A Horizonte Soluções Financeiras não vende seus dados pessoais a terceiros.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">6. Segurança dos Dados</h2>
              <p className="mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Criptografia de dados sensíveis</li>
                <li>Controles de acesso restritos</li>
                <li>Monitoramento de segurança</li>
                <li>Treinamento regular de funcionários</li>
                <li>Backup e recuperação de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">7. Retenção de Dados</h2>
              <p className="mb-4">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando os prazos legais e regulatórios aplicáveis. Após esse período, os dados serão eliminados ou anonimizados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">8. Seus Direitos (LGPD)</h2>
              <p className="mb-4">Você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
                <li><strong>Anonimização ou Eliminação:</strong> Solicitar a eliminação de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com seu consentimento</li>
                <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
                <li><strong>Informação:</strong> Obter informações sobre compartilhamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">9. Cookies</h2>
              <p className="mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">10. Alterações nesta Política</h2>
              <p className="mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas através do site ou por e-mail. Recomendamos que você revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">11. Contato e Encarregado de Dados (DPO)</h2>
              <p className="mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato:
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
                <p className="mb-2">
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:smartsantoandre.sp@smartcredbrasil.com.br" className="text-petroleum-dark hover:text-petroleum-light break-all">
                    smartsantoandre.sp@smartcredbrasil.com.br
                  </a>
                </p>
                <p className="mt-4 text-sm text-gray-600">
                  Para questões específicas sobre proteção de dados, mencione "LGPD" ou "Proteção de Dados" no assunto do e-mail.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">12. Consentimento</h2>
              <p className="mb-4">
                Ao utilizar nosso site e fornecer seus dados pessoais, você declara ter lido, compreendido e concordado com esta Política de Privacidade.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
