'use client'
import { motion } from 'motion/react'

export function DigaOi() {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
      href="mailto:kleberson55@hotmail.com"
      target="_blank"
      aria-label="Me mande um email."
    >
      Diga Oi..
    </motion.a>
  )
}
