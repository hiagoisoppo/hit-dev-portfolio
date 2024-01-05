import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid"

export default function GlitchedGlobeAsiaAustraliaIcon() {
  return (
    <div
      className="absolute group/globeglitch right-0 w-8 h-8
      transition-all duration-300 text-transparent
      peer-checked/language:text-inherit peer-checked/language:right-10"
    >
      {/* BASE GLITCH */}
      <GlobeAsiaAustraliaIcon
        className="absolute z-10 text-inherit"
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-0 text-green-500 group-hover/globeglitch:animate-[glitch0_500ms_infinite] opacity-0"
      /> 
      <GlobeAsiaAustraliaIcon
        className="absolute z-0 text-red-500 group-hover/globeglitch:animate-[glitch0_315ms_infinite] opacity-0"
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-0 text-blue-500 group-hover/globeglitch:animate-[glitch0_645ms_infinite] opacity-0"
      />
      {/* FIRST GLITCH */}
      <GlobeAsiaAustraliaIcon
        className="absolute z-30 text-transparent
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)]
        translate-x-1 -translate-y-1
        group-hover/globeglitch:text-inherit 
        "
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-20 text-green-500 group-hover/globeglitch:animate-[glitch1_500ms_infinite] opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)]
        translate-x-1 -translate-y-1
        "
      /> 
      <GlobeAsiaAustraliaIcon
        className="absolute z-20 text-red-500 group-hover/globeglitch:animate-[glitch1_315ms_infinite] opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)]
        translate-x-1 -translate-y-1
        "
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-20 text-blue-500 group-hover/globeglitch:animate-[glitch1_645ms_infinite] opacity-0
        [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)]
        translate-x-1 -translate-y-1
        "
      />
      {/* SECOND GLITCH */}
      <GlobeAsiaAustraliaIcon
        className="absolute z-50 text-transparent
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)]
        -translate-x-1 translate-y-1
        group-hover/globeglitch:text-inherit 
        "
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-40 text-green-500 group-hover/globeglitch:animate-[glitch2_500ms_infinite] opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)]
        -translate-x-1 translate-y-1
        "
      /> 
      <GlobeAsiaAustraliaIcon
        className="absolute z-40 text-red-500 group-hover/globeglitch:animate-[glitch2_315ms_infinite] opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)]
        -translate-x-1 translate-y-1
        "
      />
      <GlobeAsiaAustraliaIcon
        className="absolute z-40 text-blue-500 group-hover/globeglitch:animate-[glitch2_645ms_infinite] opacity-0
        [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)]
        -translate-x-1 translate-y-1
        "
      />
    </div>
  )
}