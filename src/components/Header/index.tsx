import ToogleButton from '@/components/ToogleButton'

export default function Header() {
  return (
    <header className="absolute left-0 flex h-[5%] w-full justify-between px-4">
      <h1 className="ml-[1%] w-[20%] text-center text-4xl font-extrabold">
        HIAGO ISOPPO
      </h1>
      <div className="absolute right-[2%] top-0">
        <ToogleButton isTheme />
        <ToogleButton isTheme={false} />
      </div>
    </header>
  )
}
