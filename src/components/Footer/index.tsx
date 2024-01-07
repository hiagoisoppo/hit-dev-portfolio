import DownloadIcon from '../Icons/Download'
import GithubIcon from '../Icons/Github'
import LinkedinIcon from '../Icons/Linkedin'

export default function Footer() {
  return (
    <footer
      className="absolute bottom-0 left-0 h-[9%] w-full
      p-2 md:h-[15%] lg:h-[12%]"
    >
      <div className="flex h-full w-[40%] items-center justify-evenly bg-opacity-50">
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center p-1">
          <DownloadIcon />
        </div>
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center p-1">
          <GithubIcon />
        </div>
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center p-1">
          <LinkedinIcon />%
        </div>
      </div>
    </footer>
  )
}
