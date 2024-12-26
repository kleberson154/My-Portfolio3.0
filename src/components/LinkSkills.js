'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

export function LinkSkills() {
  return (
    <Link href="/Skills">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        Habilidades
      </motion.div>
    </Link>
  )
}
