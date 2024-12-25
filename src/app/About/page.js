'use client'

import { IconSocials } from '@/src/components/IconSocials'
import { Logo } from '@/src/components/Logo'
import { PowerButton } from '@/src/components/PowerButton'
import Spaceman from '@/src/components/Spaceman'
import { motion } from 'motion/react'

export default function page() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-semibold text-base desktop:text-xl flex justify-center items-center">
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
        <div className="w-14 sm:w-28" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 xl:top-[30%] right-0 animate-float w-28 sm:w-40 lg:w-80 "
      >
        <Spaceman />
      </motion.div>
      <motion.div
        className="w-[50vw] h-auto sm:h-[70vh] border-2 border-black p-4 md:p-8 z-10 leading-normal flex justify-center items-center text-[calc(0.6rem+1vw)] lg:text-[calc(0.4rem+1vw)] italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Olá, Eu sou Kleberson!
        <br /> <br />
        Sou um desenvolvedor Full-Stack Javascript e Back-End Java que mora em
        Uberlândia, Minas Gerais. Posso desenvolver sites responsivos do zero e
        transformá-los em experiências modernas e fáceis de usar na Web com
        bancos de dados organizados e de alta performance.
        <br /> <br />
        Sou Estudante em Ciências da computação e faco curso Técnico em
        Desenvolvimento de Sistemas, comecei a aprender a programar em 2022 e
        desde então tem sido minha paixão criar sites e ver o desenvolvimento
        incrível deles.
      </motion.div>
      <IconSocials />
    </div>
  )
}
