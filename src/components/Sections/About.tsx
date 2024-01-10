'use client'
import { motion } from 'framer-motion'

export default function About({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="relative flex h-screen w-screen snap-center items-center justify-center"
    >
      <h1>ABOUT</h1>
    </motion.section>
  )
}
