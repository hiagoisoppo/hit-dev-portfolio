export default function Section({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section className="relative flex h-[95%] w-full flex-col items-center justify-center gap-2 px-[0.5rem] pt-[3.5rem] md:flex-row">
      <h1 className="clip-format-inside absolute top-0 w-full pl-6 pt-2 text-3xl uppercase">
        {title}
      </h1>
      <span
        aria-hidden
        className="clip-format-outside absolute top-0 w-full bg-primary-100 p-2 text-3xl uppercase text-transparent opacity-45"
      >
        {title}
      </span>
      <div
        aria-hidden
        className="clip-format-outside absolute top-[0.2rem] h-[calc(100%_-_var(--discount-width))] w-[calc(100%_-_var(--discount-width))] bg-primary-100 p-2 text-3xl text-transparent opacity-10"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[.25rem] w-[3rem] bg-tertiary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute left-0 top-[50%] h-[.25rem] w-[.25rem] rotate-45 bg-tertiary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-[50%] h-[.25rem] w-[.25rem] rotate-45 bg-tertiary-100 opacity-50"
      ></div>
      {children}
    </section>
  )
}
