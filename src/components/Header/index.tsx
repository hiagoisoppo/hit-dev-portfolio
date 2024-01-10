import ToogleButton from '@/components/ToogleButton'
import Logo from '../Icons/Logo'

export default function Header() {
  return (
    <header
      className="fixed left-0 top-0 z-50 flex h-[15%]
      w-full justify-between p-2 md:h-[15%] lg:h-[12%]"
    >
      <Logo />
      <div
        className="flex h-full w-[10%] flex-col
        p-[1%] md:w-[7%] md:p-[0.75%] lg:w-[2.5%] lg:p-[0.5%]"
      >
        <ToogleButton isTheme={false} />
        <ToogleButton isTheme />
      </div>
    </header>
  )
}
