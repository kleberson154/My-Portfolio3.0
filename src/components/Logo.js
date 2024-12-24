'use client'
import { motion } from 'motion/react'
import '../app/fontLogo.css'

export function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="desktop:text-3xl text-2xl cursor-default"
      id="fontLogo"
    >
      KSN
    </motion.div>
  )
}
