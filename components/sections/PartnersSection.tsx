'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Neon', logo: 'https://via.placeholder.com/150x80?text=NEON' },
  { name: 'Safra', logo: 'https://via.placeholder.com/150x80?text=SAFRA' },
  { name: 'Ulend', logo: 'https://via.placeholder.com/150x80?text=ULEND' },
  { name: 'WMO', logo: 'https://via.placeholder.com/150x80?text=WMO' },
  { name: 'BMG', logo: 'https://via.placeholder.com/150x80?text=BMG' },
  { name: 'Itaú', logo: 'https://via.placeholder.com/150x80?text=ITAU' },
]

export default function PartnersSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
