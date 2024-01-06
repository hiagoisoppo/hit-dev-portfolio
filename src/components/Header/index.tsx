import ToogleButton from '@/components/ToogleButton'

export default function Header() {
  return (
    <header
      className="absolute left-0 h-[13%] w-full px-4
      md:h-[15%] lg:h-[12%]"
    >
      <h1
        className="h-[40%] w-[32%] text-center text-2xl font-black
        md:h-[35%] md:w-[27%] md:text-4xl
        lg:h-[41%] lg:w-[13%] lg:text-4xl"
      >
        H I A G O
      </h1>
      <div
        className="absolute right-[3.75%] top-0 flex h-full w-[10%] flex-col items-center justify-center p-[1.5%]
        md:right-[2%] md:w-[7%] md:p-[1%] lg:right-[0.85%] lg:w-[2.5%] lg:p-[0.5%]"
      >
        <ToogleButton isTheme />
        <ToogleButton isTheme={false} />
      </div>
    </header>
  )
}
