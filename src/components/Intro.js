import { motion } from 'framer-motion'
import Image from 'next/image'

export const Intro = () => {
  return (
    <motion.div
      className=""
      initial={{ height: 0 }}
      animate={{ height: '50vh' }}
      transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div id="subBoxOne" className="">
          <h1>Oi,</h1>
          <h3>Eu sou Kleberson</h3>
          <h6>Eu crio e codifico sites simples e bonitos.</h6>
        </div>
        <div id="subBoxTwo" className="">
          <Image src="/images/profile.png" className="pic" alt="Profile Pic" />
        </div>
      </motion.div>
    </motion.div>
  )
}
