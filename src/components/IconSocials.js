'use client'
import { motion } from 'motion/react'

import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Icon } from '../subcomponentes/Icon'

export function IconSocials() {
  return (
    <div className="fixed bottom-0 sm:left-14 left-4 flex flex-col items-center justify-between h-48 desktop:h-56 w-6 desktop:w-8">
      <a
        href="https://github.com/kleberson154"
        aria-label="Link para o meu github."
        target="_blank"
      >
        <Icon>
          <BsGithub />
        </Icon>
      </a>
      <a
        href="https://www.instagram.com/kleberson.14/"
        aria-label="Link para o meu Instagram."
        target="_blank"
      >
        <Icon>
          <BsInstagram />
        </Icon>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5534991336956"
        aria-label="Link para o meu numero de telefone no whatsapp."
        target="_blank"
      >
        <Icon>
          <BsWhatsapp />
        </Icon>
      </a>
      <a
        href="https://www.linkedin.com/in/kleberson-andrade-47187520a/"
        aria-label="Link para o meu linkedin."
        target="_blank"
      >
        <Icon>
          <BsLinkedin />
        </Icon>
      </a>

      <motion.div
        id="Line"
        initial={{
          height: 0
        }}
        animate={{
          height: '3rem'
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8
        }}
        className="w-1 bg-black"
      />
    </div>
  )
}
