'use client'
import { motion } from 'framer-motion'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="z-10 h-full w-full"
    >
      {children}
    </motion.main>
  )
}
