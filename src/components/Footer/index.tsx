import DownloadIcon from '../Icons/Download'
import GithubIcon from '../Icons/Github'
import LinkedinIcon from '../Icons/Linkedin'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 h-[7%] w-full p-[2%] md:h-[6%] md:p-[1.5%] lg:h-[6%] lg:p-[0.75%]">
      <div className="flex h-full w-[38%] items-center justify-center md:w-[26%] lg:w-[13%]">
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
          <DownloadIcon />
        </div>
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
          <GithubIcon />
        </div>
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  )
}
