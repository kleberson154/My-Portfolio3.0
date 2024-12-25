'use client'
import { motion } from 'motion/react'

export function LinkWork() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer "
    >
      Projetos
    </motion.div>
  )
}
