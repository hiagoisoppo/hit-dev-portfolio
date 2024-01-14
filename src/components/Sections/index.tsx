export default function Section({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section className="relative flex h-[90vh] w-full flex-col items-center justify-center gap-2 px-[0.5rem] pt-[5rem] md:flex-row">
      <h1 className="clip-format-inside absolute top-0 h-fit w-full p-4 text-center text-4xl font-bold uppercase">
        {title}
      </h1>
      <span
        aria-hidden
        className="clip-format-outside absolute top-0 h-fit w-full bg-primary-100 p-4 text-center text-4xl font-bold uppercase text-transparent opacity-45"
      >
        {title}
      </span>
      <div
        aria-hidden
        className="clip-format-outside absolute top-[0.2rem] h-[calc(100%_-_var(--discount-width))] w-[calc(100%_-_var(--discount-width))] bg-primary-100 p-2 text-3xl text-transparent opacity-10"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[.5rem] w-[5rem] bg-tertiary-100 opacity-50"
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
