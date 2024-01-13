'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import ScrollDown from '../Icons/ScrollDown'
import HomePicture from '../Pictures/HomePicture'
import Name from '../Texts/Name'

export default function Presentation({ id }: { id: string }) {
  const { isEnglish } = useLanguage()

  return (
    <section
      id={id}
      className="relative flex h-full w-full snap-center items-center justify-center overflow-hidden lg:justify-start"
    >
      <div className="flex h-[80%] w-[100%] flex-col gap-[5%] px-[3%] text-center lg:w-[70%]">
        <Name />
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          className="text-xl leading-6 text-primary-700 sm:text-2xl md:text-3xl lg:text-5xl dark:text-secondary-100"
        >
          {isEnglish
            ? 'Welcome unknown user, remember that all'
            : 'Bem-vindo, usuário desconhecido, lembre-se que todos'}
          <span className="font-bold italic">
            {isEnglish ? ' CHALLENGES ' : ' DESAFIOS '}
          </span>
          {isEnglish ? 'can be' : ' podem ser '}
          <span className="font-bold italic">
            {isEnglish ? ' SOLVED' : ' SOLUCIONADOS'}
          </span>
          {isEnglish
            ? ', it just depends on how much'
            : ', só depende de quanto'}
          <span className="font-bold italic">
            {isEnglish ? ' TIME ' : ' TEMPO '}
          </span>
          {isEnglish ? 'and' : 'e'}
          <span className="font-bold italic">
            {isEnglish ? ' COFFEE ' : ' CAFÉ '}
          </span>
          {isEnglish ? 'you have to offer me' : 'você tem a me oferecer'}
          <span className="font-bold italic">!</span>
        </motion.h1>
        <div className="ml-2 flex h-full w-[50%] flex-col items-start justify-center xs:ml-0 xs:w-[45%] md:ml-2 md:w-[50%] lg:ml-0 lg:w-[100%] lg:items-center">
          <ScrollDown />
          <motion.span
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="text-lg leading-5 md:text-3xl lg:text-4xl"
          >
            {isEnglish ? 'In need of a' : 'Precisando de um'}
            <span className="font-bold italic">
              {isEnglish ? ' DEVELOPER ' : ' DESENVOLVEDOR '}
            </span>
            {isEnglish
              ? '? Feel free and get to know my'
              : '? Fique a vontade e conheça minhas'}
            <span className="font-bold italic">
              {isEnglish ? ' SKILLS' : ' HABILIDADES'}
            </span>
            .
          </motion.span>
        </div>
      </div>
      <HomePicture />
    </section>
  )
}
