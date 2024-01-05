import { MoonIcon } from '@heroicons/react/24/solid'

export default function GlitchedMoonIcon() {
  return (
    <div
      className="group/moonglitch absolute right-2 h-8 w-8
      peer-checked/theme:hidden peer-checked/theme:text-transparent"
    >
      {/* BASE GLITCH */}
      <MoonIcon className="absolute z-10 text-inherit group-hover/moonglitch:animate-[glitch0_700ms_infinite]" />
      <MoonIcon className="text-tertiary-100 absolute z-0 opacity-0 group-hover/moonglitch:animate-[glitch0_500ms_infinite]" />
      <MoonIcon className="text-quaternary-100 absolute z-0 opacity-0 group-hover/moonglitch:animate-[glitch0_315ms_infinite]" />
      <MoonIcon className="text-primary-100 absolute z-0 opacity-0 group-hover/moonglitch:animate-[glitch0_645ms_infinite]" />
      {/* FIRST GLITCH */}
      <MoonIcon
        className="absolute z-30 -translate-y-1
        translate-x-1 text-transparent
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_700ms_infinite]
        group-hover/moonglitch:text-inherit 
        "
      />
      <MoonIcon
        className="text-tertiary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_500ms_infinite]
        "
      />
      <MoonIcon
        className="text-quaternary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_315ms_infinite]
        "
      />
      <MoonIcon
        className="text-primary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/moonglitch:animate-[glitch1_645ms_infinite]
        "
      />
      {/* SECOND GLITCH */}
      <MoonIcon
        className="absolute z-50 -translate-x-1
        translate-y-1 text-transparent
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_700ms_infinite]
        group-hover/moonglitch:text-inherit 
        "
      />
      <MoonIcon
        className="text-tertiary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_500ms_infinite]
        "
      />
      <MoonIcon
        className="text-quaternary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_315ms_infinite]
        "
      />
      <MoonIcon
        className="text-primary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/moonglitch:animate-[glitch2_645ms_infinite]
        "
      />
    </div>
  )
}
