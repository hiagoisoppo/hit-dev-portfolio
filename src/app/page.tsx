import About from '@/components/Sections/About'
import Contact from '@/components/Sections/Contact'
import Presentation from '@/components/Sections/Presentation'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'
import TimeLine from '@/components/Sections/Timeline'

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <TimeLine />
    </>
  )
}
