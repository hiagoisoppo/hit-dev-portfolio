import { RiMoonFill } from '@remixicon/react'

export default function MoonIcon() {
  return (
    <div className="group/moonglitch flex h-full w-full items-center justify-center peer-checked/theme:hidden peer-checked/theme:text-transparent">
      {/* BASE GLITCH */}
      <RiMoonFill className=" absolute z-10 text-inherit drop-shadow-[1px_1px_1px_rgb(19_44_103)] group-hover/moonglitch:animate-[glitch0_700ms_infinite] dark:drop-shadow-[1px_1px_1px_rgb(166_166_166)]" />
      <RiMoonFill className="absolute z-0 text-tertiary-100 opacity-0 group-hover/moonglitch:animate-[glitch0_500ms_infinite]" />
      <RiMoonFill className="absolute z-0 text-quaternary-100 opacity-0 group-hover/moonglitch:animate-[glitch0_315ms_infinite]" />
      <RiMoonFill className="absolute z-0 text-primary-100 opacity-0 group-hover/moonglitch:animate-[glitch0_645ms_infinite]" />
      {/* FIRST GLITCH */}
      <RiMoonFill
        className="absolute z-30 -translate-y-1
        translate-x-1 text-transparent
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_700ms_infinite]
        group-hover/moonglitch:text-inherit 
        "
      />
      <RiMoonFill
        className="absolute z-20 -translate-y-1 translate-x-1 text-tertiary-100
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_500ms_infinite]
        "
      />
      <RiMoonFill
        className="absolute z-20 -translate-y-1 translate-x-1 text-quaternary-100
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_315ms_infinite]
        "
      />
      <RiMoonFill
        className="absolute z-20 -translate-y-1 translate-x-1 text-primary-100
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_645ms_infinite]
        "
      />
      {/* SECOND GLITCH */}
      <RiMoonFill
        className="absolute z-50 -translate-x-1
        translate-y-1 text-transparent
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_700ms_infinite]
        group-hover/moonglitch:text-inherit 
        "
      />
      <RiMoonFill
        className="absolute z-40 -translate-x-1 translate-y-1 text-tertiary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_500ms_infinite]
        "
      />
      <RiMoonFill
        className="absolute z-40 -translate-x-1 translate-y-1 text-quaternary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_315ms_infinite]
        "
      />
      <RiMoonFill
        className="absolute z-40 -translate-x-1 translate-y-1 text-primary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_645ms_infinite]
        "
      />
    </div>
  )
}
