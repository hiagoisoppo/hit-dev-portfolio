'use client'
import { motion } from 'framer-motion'

export default function Skills({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="relative flex h-screen w-screen snap-center items-center justify-center"
    >
      <h1>skills</h1>
    </motion.section>
  )
}
