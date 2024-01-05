import { SunIcon } from '@heroicons/react/24/solid'

export default function GlitchedSuncon() {
  return (
    <div
      className="group/sunglitch absolute right-2 hidden h-8
      w-8 text-transparent
      peer-checked/theme:block peer-checked/theme:text-inherit"
    >
      {/* BASE GLITCH */}
      <SunIcon className="absolute z-10 text-inherit group-hover/sunglitch:animate-[glitch0_700ms_infinite]" />
      <SunIcon className="text-tertiary-100 absolute z-0 opacity-0 group-hover/sunglitch:animate-[glitch0_500ms_infinite]" />
      <SunIcon className="text-quaternary-100 absolute z-0 opacity-0 group-hover/sunglitch:animate-[glitch0_315ms_infinite]" />
      <SunIcon className="text-primary-100 absolute z-0 opacity-0 group-hover/sunglitch:animate-[glitch0_645ms_infinite]" />
      {/* FIRST GLITCH */}
      <SunIcon
        className="absolute z-30 -translate-y-1 translate-x-1 text-transparent [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)]
        group-hover/sunglitch:animate-[glitch1_700ms_infinite] group-hover/sunglitch:text-inherit 
        "
      />
      <SunIcon
        className="text-tertiary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/sunglitch:animate-[glitch1_500ms_infinite]
        "
      />
      <SunIcon
        className="text-quaternary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/sunglitch:animate-[glitch1_315ms_infinite]
        "
      />
      <SunIcon
        className="text-primary-100 absolute z-20 -translate-y-1 translate-x-1
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/sunglitch:animate-[glitch1_645ms_infinite]
        "
      />
      {/* SECOND GLITCH */}
      <SunIcon
        className="absolute z-50 -translate-x-1
        translate-y-1
        text-transparent [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)]
        group-hover/sunglitch:animate-[glitch2_700ms_infinite] group-hover/sunglitch:text-inherit
        "
      />
      <SunIcon
        className="text-tertiary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/sunglitch:animate-[glitch2_500ms_infinite]
        "
      />
      <SunIcon
        className="text-quaternary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/sunglitch:animate-[glitch2_315ms_infinite]
        "
      />
      <SunIcon
        className="text-primary-100 absolute z-40 -translate-x-1 translate-y-1
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/sunglitch:animate-[glitch2_645ms_infinite]
        "
      />
    </div>
  )
}
