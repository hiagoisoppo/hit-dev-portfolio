export default function Subtitle({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center pt-[2.5rem] text-base font-light text-secondary-100">
      <span className="clip-format-inside absolute left-0 top-0 z-40 w-full p-1">
        {tag}
      </span>
      <span
        aria-hidden
        className="clip-format-outside absolute left-0 top-0 z-50 w-full bg-primary-100 p-1 text-transparent opacity-50"
      >
        {tag}
      </span>
      <div
        aria-hidden
        className="clip-format-inside absolute top-0 z-0 h-full w-full bg-primary-100 p-2 text-transparent opacity-5"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-0 z-50 h-[.3rem] w-[3rem] bg-secondary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute left-0 top-[50%] z-30 h-[.25rem] w-[.25rem] rotate-45 bg-secondary-100 opacity-50"
      ></div>
      <div
        aria-hidden
        className="absolute right-0 top-[50%] z-30 h-[.25rem] w-[.25rem] rotate-45 bg-secondary-100 opacity-50"
      ></div>
      <h2 className="flex h-full w-full items-center justify-center text-2xl font-normal text-primary-100">
        {text}
      </h2>
    </div>
  )
}
