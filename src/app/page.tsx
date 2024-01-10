import About from '@/components/Sections/About'
import Contact from '@/components/Sections/Contact'
import Presentation from '@/components/Sections/Presentation'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skiils'

export default function Home() {
  return (
    <>
      <Presentation id="presentation" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  )
}
