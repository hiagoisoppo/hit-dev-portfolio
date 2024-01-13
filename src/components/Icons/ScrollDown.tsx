import { RiArrowDownDoubleFill } from '@remixicon/react'

export default function ScrollDown() {
  return (
    <div className="group/resumeglitchdownload absolute left-[-40%] flex h-[100%] w-[100%] items-center justify-center opacity-30">
      {/* BASE GLITCH */}
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-10 animate-[glitch3_5.7s_infinite] text-inherit group-hover/resumeglitchdownload:animate-[glitch0_700ms_infinite]"
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-0 animate-[glitch3a_5.5s_infinite] text-tertiary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_500ms_infinite]"
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-0 animate-[glitch3b_5.315s_infinite] text-quaternary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_315ms_infinite]"
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-0 animate-[glitch3c_5.645s_infinite] text-primary-100 opacity-0 group-hover/resumeglitchdownload:animate-[glitch0_645ms_infinite]"
      />
      {/* FIRST GLITCH */}
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-30 -translate-y-1 translate-x-1 animate-[glitch4_5.7s_infinite] text-transparent [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_700ms_infinite] group-hover/resumeglitchdownload:text-inherit  "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 animate-[glitch4a_5.5s_infinite] text-tertiary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_500ms_infinite] "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 animate-[glitch4b_5.315s_infinite] text-quaternary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_315ms_infinite] "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-20 -translate-y-1 translate-x-1 animate-[glitch4c_5.645s_infinite] text-primary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/resumeglitchdownload:animate-[glitch1_645ms_infinite] "
      />
      {/* SECOND GLITCH */}
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-50 -translate-x-1 translate-y-1 animate-[glitch5_5.7s_infinite] text-transparent [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_700ms_infinite] group-hover/resumeglitchdownload:text-inherit  "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 animate-[glitch5a_5.5s_infinite] text-tertiary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_500ms_infinite] "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 animate-[glitch5b_5.315s_infinite] text-quaternary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_315ms_infinite] "
      />
      <RiArrowDownDoubleFill
        size="100%"
        className="absolute z-40 -translate-x-1 translate-y-1 animate-[glitch5c_5.645s_infinite] text-primary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/resumeglitchdownload:animate-[glitch2_645ms_infinite] "
      />
    </div>
  )
}
