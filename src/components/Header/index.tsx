import ToogleButton from '@/components/ToogleButton'
import Logo from '../Icons/Logo'

export default function Header() {
  return (
    <header
      className="absolute left-0 top-0 flex h-[15%]
      w-full justify-between bg-yellow-500 p-2 md:h-[15%] lg:h-[12%]"
    >
      <Logo />
      <div
        className="flex h-full w-[10%] flex-col
        md:right-[2%] md:w-[7%] md:p-[1%] lg:right-[0.85%] lg:w-[2.5%] lg:p-[0.5%]"
      >
        <ToogleButton isTheme />
        <ToogleButton isTheme={false} />
      </div>
    </header>
  )
}
