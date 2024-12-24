'use client'
import { motion } from 'motion/react'

export function LinkWork() {
  return (
    <motion.div
      initial={{
        x: -200,
        transition: { type: 'spring', duration: 1.5, delay: 1 },
        transform: 'rotate(90deg)'
      }}
      animate={{
        x: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 },
        transform: 'rotate(90deg)'
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
    >
      Projetos
    </motion.div>
  )
}
