'use client'
import { motion } from 'framer-motion'

export default function About({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="relative flex h-screen w-screen snap-center items-center justify-center bg-opacity-30 bg-gradient-to-b from-primary-700"
    >
      <h1>ABOUT</h1>
    </motion.section>
  )
}
