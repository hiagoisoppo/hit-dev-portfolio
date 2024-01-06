import ResumeDownloadButton from '../ResumeDownloadButton'

export default function Footer() {
  return (
    <footer
      className="absolute bottom-[2.25%] left-0 h-[5.25%] w-full
      px-4 md:h-[15%] lg:h-[12%]"
    >
      <div className="flex h-full w-[38%] items-center justify-evenly py-[1.5%]">
        <div className="relative h-full w-[25%] cursor-pointer">
          <ResumeDownloadButton />
        </div>
        <div className="relative h-full w-[25%] cursor-pointer">
          <ResumeDownloadButton />
        </div>
        <div className="relative h-full w-[25%] cursor-pointer">
          <ResumeDownloadButton />
        </div>
      </div>
    </footer>
  )
}
