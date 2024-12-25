'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { PowerBtn } from '../data/AllSvg'

import React from 'react'

export function PowerButton() {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Button Home"
        className="bg-white-450 desktop:w-10 desktop:h-10 w-9 h-9 border-2 rounded-full border-black p-1 cursor-pointer hover:bg-green-450 hover:shadow-3xl hover:shadow-green-450"
      >
        <PowerBtn />
      </motion.div>
    </Link>
  )
}
