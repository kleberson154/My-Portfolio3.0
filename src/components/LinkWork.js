'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

export function LinkWork() {
  return (
    <Link href="/Projects">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer "
      >
        Projetos
      </motion.div>
    </Link>
  )
}
