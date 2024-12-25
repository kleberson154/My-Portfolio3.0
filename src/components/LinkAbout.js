'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

export function LinkAbout() {
  return (
    <Link href="/About">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        Sobre Mim
      </motion.div>
    </Link>
  )
}
