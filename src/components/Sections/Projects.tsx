'use client'

export default function Projects({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative flex h-screen w-screen snap-center items-center justify-center"
    >
      <div className="negativepattern absolute top-0 z-0 flex h-[50%] w-full bg-primary-700 dark:bg-secondary-100"></div>
      <h1>PROJECTS</h1>
    </section>
  )
}
