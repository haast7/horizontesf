import { ReactNode } from 'react'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import FacebookPixel from '@/components/analytics/FacebookPixel'
import RDStation from '@/components/analytics/RDStation'
import { ModalFormularioProvider } from '@/contexts/ModalFormularioContext'
import ModalFormularioInvestidores from '@/components/ui/ModalFormularioInvestidores'
import FooterInvestidores from '@/components/layout/FooterInvestidores'

export default function InvestidoresLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
        <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
      )}
      <RDStation />
      <ModalFormularioProvider>
        <main>{children}</main>
        <FooterInvestidores />
        <WhatsAppFloat />
        <ModalFormularioInvestidores />
      </ModalFormularioProvider>
    </>
  )
}
