'use client'

import { Logo } from '@/src/components/Logo'
import { PowerButton } from '@/src/components/PowerButton'
import { motion } from 'motion/react'

export default function page() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-semibold text-base desktop:text-xl ">
      <motion.div
        initial={{
          y: -200,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        id="navbar"
        className="absolute top-0 w-screen flex justify-between items-center py-9 px-4 sm:px-12"
      >
        <Logo />
        <PowerButton />
        <div />
      </motion.div>
    </div>
  )
}
