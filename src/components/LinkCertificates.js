'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

export function LinkCertificates() {
  return (
    <Link href="/Certificates">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer w-20 relative sm:top-8 right-6"
      >
        Certificados
      </motion.div>
    </Link>
  )
}
