'use client'

import HardSkills from '@/components/Texts/HardSkills'
import { useLanguage } from '@/contexts/LanguageContext'
import { HardSkill, hardSkills } from '@/mocks/skillsMocks'
import Image from 'next/image'

export default function Skills({ id }: { id: string }) {
  const { isEnglish } = useLanguage()
  return (
    <section
      id={id}
      className="negativepattern flex h-screen w-screen snap-center flex-col items-center justify-center gap-2 bg-primary-700 text-center text-secondary-100 dark:bg-secondary-100 dark:text-primary-700"
    >
      <HardSkills text={isEnglish ? 'Hard Skills' : 'Competências'} />
      {hardSkills.map(({ name, experience, thumb, experiencia }: HardSkill) => {
        return (
          <article
            key={name}
            className="pattern mr-[5%] flex h-[10%] w-[80%] items-center justify-between overflow-hidden"
          >
            <Image
              loader={() => thumb}
              src={thumb}
              width={100}
              height={100}
              alt={`${name} icon`}
              className="h-[100%] w-[15%] object-contain"
            />
            <span className="w-[40%] text-xl font-medium">{name}</span>
            <div className="h-[70%] w-[3px] bg-secondary-100 dark:bg-primary-700"></div>
            <span className="w-[30%] text-xl font-light">
              {isEnglish ? experience : experiencia}
            </span>
          </article>
        )
      })}
    </section>
  )
}
