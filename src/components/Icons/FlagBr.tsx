import FlagBR from '@/assets/FlagBR.svg'
import FlagGlitchBlue from '@/assets/FlagGlitchBlue.svg'
import FlagGlitchGreen from '@/assets/FlagGlitchGreen.svg'
import FlagGlitchRed from '@/assets/FlagGlitchRed.svg'
import Image from 'next/image'

export default function FlagIconBr() {
  return (
    <div className="group/flagglitch hidden h-full w-full items-center justify-center peer-checked/language:flex">
      {/* BASE GLITCH */}
      <Image
        src={FlagBR}
        alt="Brazil Country Flag"
        className="absolute z-10 group-hover/flagglitch:animate-[glitch0_700ms_infinite]"
      />
      <Image
        src={FlagGlitchGreen}
        alt="Flag Copy for visual effects"
        className="absolute z-0 opacity-0 group-hover/flagglitch:animate-[glitch0_500ms_infinite]"
      />
      <Image
        src={FlagGlitchRed}
        alt="Flag Copy for visual effects"
        className="absolute z-0 opacity-0 group-hover/flagglitch:animate-[glitch0_315ms_infinite]"
      />
      <Image
        src={FlagGlitchBlue}
        alt="Flag Copy for visual effects"
        className="absolute z-0 opacity-0 group-hover/flagglitch:animate-[glitch0_645ms_infinite]"
      />
      {/* FIRST GLITCH */}
      <Image
        src={FlagBR}
        alt="Flag Copy for visual effects"
        className="group-hover/flagglitch absolute z-30 -translate-y-1 translate-x-1 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/flagglitch:animate-[glitch1_700ms_infinite]"
      />
      <Image
        src={FlagGlitchGreen}
        alt="Flag Copy for visual effects"
        className="absolute z-20 -translate-y-1 translate-x-1 opacity-0  [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/flagglitch:animate-[glitch1_500ms_infinite]"
      />
      <Image
        src={FlagGlitchRed}
        alt="Flag Copy for visual effects"
        className="absolute z-20 -translate-y-1 translate-x-1 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/flagglitch:animate-[glitch1_315ms_infinite]"
      />
      <Image
        src={FlagGlitchBlue}
        alt="Flag Copy for visual effects"
        className="absolute z-20 -translate-y-1 translate-x-1 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/flagglitch:animate-[glitch1_645ms_infinite]"
      />
      {/* SECOND GLITCH */}
      <Image
        src={FlagBR}
        alt="Flag Copy for visual effects"
        className="group-hover/flagglitch absolute z-50 -translate-x-1 translate-y-1 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/flagglitch:animate-[glitch2_700ms_infinite]"
      />
      <Image
        src={FlagGlitchGreen}
        alt="Flag Copy for visual effects"
        className="absolute z-40 -translate-x-1 translate-y-1 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/flagglitch:animate-[glitch2_500ms_infinite]"
      />
      <Image
        src={FlagGlitchRed}
        alt="Flag Copy for visual effects"
        className="absolute z-40 -translate-x-1 translate-y-1 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/flagglitch:animate-[glitch2_315ms_infinite]"
      />
      <Image
        src={FlagGlitchBlue}
        alt="Flag Copy for visual effects"
        className="absolute z-40 -translate-x-1 translate-y-1 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/flagglitch:animate-[glitch2_645ms_infinite]"
      />
    </div>
  )
}
