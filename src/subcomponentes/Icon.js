'use client'
import { motion } from 'motion/react'
import { IconContext } from 'react-icons'

export function Icon({ children }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 1.3, 1] }}
      transition={{ type: 'spring', duration: 1, delay: 1 }}
      className="cursor-pointer"
    >
      <motion.div whileHover={{ scale: 1.2 }}>
        <IconContext.Provider value={{ color: 'black', size: '100%' }}>
          {children}
        </IconContext.Provider>
      </motion.div>
    </motion.div>
  )
}
