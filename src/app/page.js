'use client'
import { motion } from 'motion/react'
import { Logo } from '../components/Logo'
import { PowerButton } from '../components/PowerButton'
import { DigaOi } from '../components/DigaOi'
import { LinkWork } from '../components/LinkWork'
import { LinkAbout } from '../components/LinkAbout'
import { LinkSkills } from '../components/LinkSkills'
import { IconSocials } from '../components/IconSocials'
import { LinkCertificates } from '../components/LinkCertificates'
import { YinYang } from '../data/AllSvg'
import { useState } from 'react'
import { Intro } from '../components/Intro'

export default function Home() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
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
        <DigaOi />
      </motion.div>
      <div className="flex items-center">
        <motion.div
          initial={{
            rotate: 270,
            x: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            x: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
        >
          <LinkCertificates />
        </motion.div>

        <div
          id="center"
          className="h-screen w-screen flex justify-center items-center px-4 sm:px-12 "
        >
          {click ? <Intro click={click} /> : null}
          <motion.button
            className="absolute cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: click ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <YinYang
              onClick={() => handleClick()}
              width={click ? 200 : 200}
              height={click ? 200 : 200}
              fill="currentColor"
              className={'animate-spin-slow'}
            />
            <h2
              className={
                'duration-1000' + (click ? 'opacity-0' : 'opacity-100')
              }
            >
              Click Here
            </h2>
          </motion.button>
        </div>

        <motion.div
          initial={{
            rotate: 90,
            x: 200,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            x: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
        >
          <LinkWork />
        </motion.div>
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
