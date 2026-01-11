import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import FacebookPixel from '@/components/analytics/FacebookPixel'
import RDStation from '@/components/analytics/RDStation'
import { ModalFormularioProvider } from '@/contexts/ModalFormularioContext'
import ModalFormularioInvestidores from '@/components/ui/ModalFormularioInvestidores'
import { ModalFormularioHomeProvider } from '@/contexts/ModalFormularioHomeContext'
import ModalFormularioHome from '@/components/ui/ModalFormularioHome'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartCred - Expanda seus horizontes financeiros',
  description: 'Encontre soluções financeiras sob medida para você e para seu negócio. As melhores taxas do mercado, crédito descomplicado e atendimento premium.',
  keywords: 'crédito, financiamento, empréstimo, antecipação FGTS, consignado, SmartCred',
  authors: [{ name: 'SmartCred' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'SmartCred - Expanda seus horizontes financeiros',
    description: 'Encontre soluções financeiras sob medida para você e para seu negócio.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo-smart-gold.png',
        width: 1200,
        height: 630,
        alt: 'SmartCred - Crédito Inteligente',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  other: {
    'facebook-domain-verification': '9hnsl740sgj5lckv84ugbzcnbe3x9h',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
        )}
        <RDStation />
        <ModalFormularioProvider>
          <ModalFormularioHomeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
            <ModalFormularioInvestidores />
            <ModalFormularioHome />
          </ModalFormularioHomeProvider>
        </ModalFormularioProvider>
      </body>
    </html>
  )
}
