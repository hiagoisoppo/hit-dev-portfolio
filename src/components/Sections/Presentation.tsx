'use client'
import { motion } from 'framer-motion'
import HomePicture from '../Pictures/HomePicture'
import Name from '../Texts/Name'

export default function Presentation({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="relative flex h-screen w-screen snap-center items-center justify-center overflow-hidden"
    >
      <div className="flex h-[80%] w-[85%] flex-col gap-[5%] text-center">
        <Name />
        <motion.h1 className="text-xl leading-6 text-primary-700 dark:text-secondary-100">
          Bem-vindo usuário anônimo e lembre-se: todos
          <span className="font-bold italic">{' DESAFIOS '}</span>
          podem ser <span className="font-bold italic">{' SOLUCIONADOS '}</span>
          , só depende de quanto{' '}
          <span className="font-bold italic">{' TEMPO '}</span>e
          <span className="font-bold italic">{' CAFÉ '}</span> você tem a me
          oferecer!
        </motion.h1>
      </div>
      <HomePicture />
    </motion.section>
  )
}
