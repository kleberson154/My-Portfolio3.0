'use client'

import { IconSocials } from '@/src/components/IconSocials'
import { Logo } from '@/src/components/Logo'
import { PowerButton } from '@/src/components/PowerButton'
import { Certificate } from '@/src/data/WorkData'
import { motion } from 'motion/react'

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

export default function page() {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden font-semibold text-base desktop:text-xl flex justify-center items-center ">
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
        <div className="w-14 sm:w-20" />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute top-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:items-stretch pb-8 px-16 sm:px-28 gap-12 "
      >
        {Certificate.reverse().map((item, index) => (
          <motion.div
            key={index}
            variants={Item}
            className="w-full flex flex-col justify-between items-center gap-4 "
          >
            <motion.img
              src={item.image}
              alt={item.alt}
              className="rounded-2xl"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
      <IconSocials />
    </div>
  )
}
