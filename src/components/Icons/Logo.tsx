'use client'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="group/logoglitch relative flex h-[35%] w-[30%] items-center justify-center text-2xl font-black italic md:w-[25%] md:text-5xl lg:h-[45%] lg:w-[12%] lg:text-4xl"
    >
      {/* BASE GLITCH */}
      <span className="absolute z-10 text-inherit group-hover/logoglitch:animate-[glitch0_700ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-0 text-tertiary-100 opacity-0 group-hover/logoglitch:animate-[glitch0_500ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-0 text-quaternary-100 opacity-0 group-hover/logoglitch:animate-[glitch0_315ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-0 text-primary-100 opacity-0 group-hover/logoglitch:animate-[glitch0_645ms_infinite]">
        {'<HIT/>'}
      </span>
      {/* FIRST GLITCH */}
      <span className="absolute z-30 -translate-y-1 translate-x-1 text-transparent [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/logoglitch:animate-[glitch1_700ms_infinite] group-hover/logoglitch:text-inherit">
        {'<HIT/>'}
      </span>
      <span className="-translatse-y-1 absolute z-20 translate-x-1 text-tertiary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/logoglitch:animate-[glitch1_500ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-20 -translate-y-1 translate-x-1 text-quaternary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/logoglitch:animate-[glitch1_315ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-20 -translate-y-1 translate-x-1 text-primary-100 opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/logoglitch:animate-[glitch1_645ms_infinite]">
        {'<HIT/>'}
      </span>
      {/* SECOND GLITCH */}
      <span className="absolute z-50 -translate-x-1 translate-y-1 text-transparent [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/logoglitch:animate-[glitch2_700ms_infinite] group-hover/logoglitch:text-inherit">
        {'<HIT/>'}
      </span>
      <span className="absolute z-40 -translate-x-1 translate-y-1 text-tertiary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/logoglitch:animate-[glitch2_500ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-40 -translate-x-1 translate-y-1 text-quaternary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/logoglitch:animate-[glitch2_315ms_infinite]">
        {'<HIT/>'}
      </span>
      <span className="absolute z-40 -translate-x-1 translate-y-1 text-primary-100 opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/logoglitch:animate-[glitch2_645ms_infinite]">
        {'<HIT/>'}
      </span>
    </motion.div>
  )
}
