'use client'

import { IconSocials } from '@/src/components/IconSocials'
import { Logo } from '@/src/components/Logo'
import { PowerButton } from '@/src/components/PowerButton'
import { Work } from '@/src/data/WorkData'
import { motion } from 'motion/react'
import { BsGithub } from 'react-icons/bs'

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.2
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
    <div className="relative w-screen h-screen ssm:overflow-x-hidden font-semibold text-base desktop:text-xl flex justify-center items-center ">
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
        className="absolute top-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:items-stretch pb-8 ssm:px-16 sm:px-28 gap-12 "
      >
        {Work.reverse().map((item, index) => (
          <motion.div
            key={index}
            variants={Item}
            className=" w-[18rem] sm:w-[22rem] flex flex-col justify-between items-center border-2 border-black rounded-2xl px-6 pb-8 pt-2"
            whileHover={{ scale: 1.1 }}
          >
            <h1 className="text-xl py-2">{item.name}</h1>
            <motion.img
              src={item.image}
              alt={item.alt}
              className="rounded-2xl"
            />
            <p className="text-base py-3">{item.description}</p>
            <div className="border-t-2 border-black w-full flex justify-center gap-4 pt-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="w-full flex justify-between gap-4 pt-2">
              <a
                href={item.demo}
                target="_blank"
                className="w-1/2 text-lg text-white-450 bg-black hover:bg-opacity-80 flex justify-center items-center rounded-s-3xl py-2"
              >
                visitar
              </a>
              <a
                href={item.github}
                target="_blank"
                className="w-1/2 text-lg text-white-450 bg-black hover:bg-opacity-80 flex justify-center items-center rounded-e-3xl gap-2"
              >
                <BsGithub width={30} height={30} />
                Codigo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <IconSocials />
    </div>
  )
}
