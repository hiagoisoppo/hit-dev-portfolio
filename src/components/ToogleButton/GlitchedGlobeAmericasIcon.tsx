import { GlobeAmericasIcon } from '@heroicons/react/24/solid'

export default function GlitchedGlobeAmericasIcon() {
  return (
    <div
      className="group/globeglitch1 h-full w-full
      peer-checked/language:hidden peer-checked/language:text-transparent"
    >
      {/* BASE GLITCH */}
      <GlobeAmericasIcon className="absolute z-10 text-inherit group-hover/globeglitch1:animate-[glitch0_700ms_infinite]" />
      <GlobeAmericasIcon className="absolute z-0 text-tertiary-100 opacity-0 group-hover/globeglitch1:animate-[glitch0_500ms_infinite]" />
      <GlobeAmericasIcon className="absolute z-0 text-quaternary-100 opacity-0 group-hover/globeglitch1:animate-[glitch0_315ms_infinite]" />
      <GlobeAmericasIcon className="absolute z-0 text-primary-100 opacity-0 group-hover/globeglitch1:animate-[glitch0_645ms_infinite]" />
      {/* FIRST GLITCH */}
      <GlobeAmericasIcon
        className="absolute z-30 -translate-y-1
        translate-x-1 text-transparent
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/globeglitch1:animate-[glitch1_700ms_infinite]
        group-hover/globeglitch1:text-inherit 
        "
      />
      <GlobeAmericasIcon
        className="absolute z-20 -translate-y-1 translate-x-1 text-tertiary-100
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/globeglitch1:animate-[glitch1_500ms_infinite]
        "
      />
      <GlobeAmericasIcon className="absolute z-20 -translate-y-1 translate-x-1 text-quaternary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/globeglitch1:animate-[glitch1_315ms_infinite]" />
      <GlobeAmericasIcon
        className="absolute z-20 -translate-y-1 translate-x-1 text-primary-100
        opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/globeglitch1:animate-[glitch1_645ms_infinite]
        "
      />
      {/* SECOND GLITCH */}
      <GlobeAmericasIcon
        className="absolute z-50 -translate-x-1
        translate-y-1 text-transparent
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/globeglitch1:animate-[glitch2_700ms_infinite]
        group-hover/globeglitch1:text-inherit 
        "
      />
      <GlobeAmericasIcon
        className="absolute z-40 -translate-x-1 translate-y-1 text-tertiary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/globeglitch1:animate-[glitch2_500ms_infinite]
        "
      />
      <GlobeAmericasIcon
        className="absolute z-40 -translate-x-1 translate-y-1 text-quaternary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/globeglitch1:animate-[glitch2_315ms_infinite]
        "
      />
      <GlobeAmericasIcon
        className="absolute z-40 -translate-x-1 translate-y-1 text-primary-100
        opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/globeglitch1:animate-[glitch2_645ms_infinite]
        "
      />
    </div>
  )
}
