'use client'
import { motion } from 'motion/react'

export function LinkCertificates() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer w-20 relative sm:top-8 right-6"
    >
      Certificados
    </motion.div>
  )
}
