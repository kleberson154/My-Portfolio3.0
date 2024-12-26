'use client'

import { IconSocials } from '@/src/components/IconSocials'
import { Logo } from '@/src/components/Logo'
import { PowerButton } from '@/src/components/PowerButton'
import { Develope } from '../../data/AllSvg'
import { motion } from 'motion/react'

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
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-36 flex flex-col xl:flex-row justify-between items-center xl:items-stretch pb-8 xl:px-12 gap-12 "
      >
        <div className="h-full border-2 border-black p-4 flex flex-col justify-center gap-8 px-8 xl:w-1/2 lg:w-4/5 w-2/3">
          <h1 className="flex justify-center items-center gap-2 text-2xl">
            <Develope width={34} height={34} /> Front-End Developer
          </h1>
          <p className="text-[calc(0.2em + 1vw)] ">
            Sou desenvolvedor especializado em JavaScript com habilidades nos
            principais Frameworks de front-end como ReactJs e NextJs.
          </p>
          <div className="text-[calc(0.2em + 1vw)]">
            <strong>HABILIDADES</strong>
            <div className="p-0 m-0">
              Html, Css, JavaScript, TypeScript, React, NextJs, RESTful,
              Tailwild, Styled-Components, Bootstrap, Sass.
            </div>
          </div>
          <div className="text-[calc(0.2em + 1vw)]">
            <strong>FERRAMENTAS</strong>
            <div className="p-0 m-0">VScode, Github, Codepen etc.</div>
          </div>
        </div>
        <div className="border-2 border-black p-4 flex flex-col justify-center gap-8 px-8 xl:w-1/2 lg:w-4/5 w-2/3">
          <h1 className="flex justify-center items-center gap-2 text-2xl">
            <Develope width={34} height={34} /> Back-End Developer
          </h1>
          <p className="text-[calc(0.2em + 1vw)] ">
            Sou desenvolvedor Java com habilidades voltadas para back-end
            utilizando o Framework Spring e com habilidades em NodeJs.
          </p>
          <div className="text-[calc(0.2em + 1vw)]">
            <strong>HABILIDADES</strong>
            <div className="p-0 m-0">
              Java POO, Spring,NodeJs, PostgreSQL, MongoDB, MySQL, ExpressJS,
              RESTful, JWT.
            </div>
          </div>
          <div className="text-[calc(0.2em + 1vw)]">
            <strong>FERRAMENTAS</strong>
            <div className="p-0 m-0">IntelliJ, Github, Spring Initializr.</div>
          </div>
        </div>
      </motion.div>
      <IconSocials />
    </div>
  )
}
