'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Logo } from '../components/Logo'
import { PowerButton } from '../components/PowerButton'
import { DigaOi } from '../components/DigaOi'
import { LinkWork } from '../components/LinkWork'
import { LinkAbout } from '../components/LinkAbout'
import { LinkSkills } from '../components/LinkSkills'
import { IconSocials } from '../components/IconSocials'

export default function Home() {
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
        className="flex justify-between items-center py-9 px-4 desktop:px-12"
      >
        <Logo />
        <PowerButton />
        <DigaOi />
      </motion.div>
      <div id="center" className="flex justify-between items-center">
        {/* <LinkWork /> */}
      </div>
      <IconSocials />
      <motion.div
        id="footer"
        initial={{
          y: 200,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        className="absolute bottom-0 w-screen flex justify-evenly items-center py-9"
      >
        <LinkAbout />
        <LinkSkills />
      </motion.div>
    </div>
  )
}
