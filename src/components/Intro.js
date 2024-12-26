import { motion } from 'framer-motion'
import Image from 'next/image'

export const Intro = () => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '60vh', opacity: 1 }}
      transition={{ type: 'spring', duration: 1, delay: 1 }}
      className="w-full  lg:w-4/5 border-2 border-black cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, duration: 1, delay: 1 }}
        className="w-full h-full flex justify-between items-center flex-col lg:flex-row overflow-hidden"
      >
        <div className="lg:w-1/2 md:h-full h-1/3 w-full relative flex flex-col justify-start lg:justify-center pt-8 h-1/2 text-black  lg:gap-8 pl-8">
          <h1 className="text-[calc(2rem+1.5vw)] lg:text-[calc(2rem+1.5vw)]">
            Oi,
          </h1>
          <h3 className="text-[calc(1em+1.5vw)] lg:text-[calc(1em+1.5vw)] leading-10">
            Eu sou Kleberson
          </h3>
          <h6 className="text-[calc(0.5rem+1.5vw)] lg:text-[calc(0.5rem+1.5vw)] font-light">
            Sou desenvolvedor FullStack Javascript e Back-End Java.
          </h6>
        </div>
        <div className="mediumSm:w-1/2 md:h-full relative flex w-full h-1/2">
          <Image
            src="/images/profile.png"
            width={562}
            height={562}
            alt="Profile Pic"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
