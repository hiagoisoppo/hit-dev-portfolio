import { RiGithubFill } from '@remixicon/react'

export default function GithubIcon() {
  return (
    <div className="group/resumeglitchdownload flex items-center justify-center">
      {/* BASE GLITCH */}
      <RiGithubFill
        size="100%"
        className="absolute z-10 text-inherit group-hover/resumeglitchdownload:animate-[glitch0_700ms_infinite]"
      />
      <RiGithubFill
        size="100%"
        className="absolute z-0 text-tertiary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_500ms_infinite]"
      />
      <RiGithubFill
        size="100%"
        className="absolute z-0 text-quaternary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_315ms_infinite]"
      />
      <RiGithubFill
        size="100%"
        className="absolute z-0 text-primary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_645ms_infinite]"
      />
      {/* FIRST GLITCH */}
      <RiGithubFill
        size="100%"
        className="absolute z-30 -translate-y-1 translate-x-1 text-transparent [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_700ms_infinite] group-hover/resumeglitchdownload:text-inherit  "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 text-tertiary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_500ms_infinite] "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 text-quaternary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_315ms_infinite] "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 text-primary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_645ms_infinite] "
      />
      {/* SECOND GLITCH */}
      <RiGithubFill
        size="100%"
        className="absolute z-50 -translate-x-1 translate-y-1 text-transparent [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_700ms_infinite] group-hover/resumeglitchdownload:text-inherit  "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 text-tertiary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_500ms_infinite] "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 text-quaternary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_315ms_infinite] "
      />
      <RiGithubFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 text-primary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_645ms_infinite] "
      />
    </div>
  )
}
