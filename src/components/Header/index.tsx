import ToogleButton from '@/components/ToogleButton'

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1>LOGO</h1>
      <div>
        <ToogleButton isTheme />
        <ToogleButton isTheme={false} />
      </div>
    </header>
  )
}