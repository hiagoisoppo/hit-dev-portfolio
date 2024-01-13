export default function Subtext({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-2 px-[0.5rem] pt-[2.5rem] text-secondary-100">
      <span className="clip-format-inside absolute left-0 top-0 w-full pl-4 pt-1.5 text-sm font-normal uppercase">
        {tag}
      </span>
      <span
        aria-hidden
        className="clip-format-outside absolute left-0 top-0 h-[1.75rem] w-[75%] bg-primary-100 p-2 text-sm font-normal uppercase text-transparent opacity-45"
      >
        {tag}
      </span>
      <div
        aria-hidden
        className="clip-format-inside absolute top-0 h-full w-full bg-primary-100 p-2 text-sm text-transparent opacity-10"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[.25rem] w-[2rem] bg-secondary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute left-0 top-[50%] h-[.25rem] w-[.25rem] rotate-45 bg-secondary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-[50%] h-[.25rem] w-[.25rem] rotate-45 bg-secondary-100 opacity-50"
      ></div>
      <h2 className="flex h-full w-full items-center justify-center text-center text-4xl uppercase text-primary-200">
        {text}
      </h2>
    </div>
  )
}
