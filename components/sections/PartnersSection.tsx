'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Neon', logo: '/Horizontes-Soluções-Financeiras-01-07-2026_12_39_PM.png' },
  { name: 'Safra', logo: '/Grupo_Safra_logo.svg.png' },
  { name: 'Ulend', logo: '/Logo_Oficial_Ulend-SEM-FUNDO.png' },
  { name: 'WMO', logo: '/logo-wmo.png' },
  { name: 'BMG', logo: '/Logo_do_Banco_Bmg.svg.png' },
  { name: 'Itaú', logo: '/2023_Itaú_Unibanco_Logo.png' },
]

export default function PartnersSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-nowrap justify-center items-center gap-6 md:gap-8 lg:gap-12 overflow-x-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
