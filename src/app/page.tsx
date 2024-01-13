import About from '@/components/Sections/About'
import Contact from '@/components/Sections/Contact'
import Presentation from '@/components/Sections/Presentation'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'

export default function Home() {
  return (
    <>
      <Presentation />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
