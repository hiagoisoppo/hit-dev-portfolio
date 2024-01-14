import Section from '.'
import Figure from '../Figure'
import Paragraph from '../Paragraph'
import Subtitle from '../Subtitle'

export default function Presentation() {
  return (
    <Section title="FrontEnd Developer">
      <div className="relative flex h-full w-full items-center justify-center gap-2 p-2">
        <Figure
          url="https://avatars.githubusercontent.com/u/91763705?v=4"
          alt="Photo of myself"
          classBox="w-full h-full flex justify-center items-center clip-format-inside"
          classImg="object-cover w-full h-full"
        />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2">
          <Subtitle tag="Target Full Name" text="Hiago I.T." />
          <Subtitle tag="Target Registration" text="***********" />
          <Subtitle tag="Living Coding Time" text="00:00:00" />
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center px-2 pb-4">
        <Paragraph
          tag="Catchphrase"
          text="Welcome unknown user, remember that all challenges can be solved, it just depends on how much time and coffe you have to offer me!"
        />
      </div>
    </Section>
  )
}
