'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const scaleX = useSpring(scrollYProgress)

  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="no-scrollbar fixed h-[97%] w-[95%] overflow-scroll bg-primary-700 bg-opacity-15 [clip-path:_polygon(0%_5%,_30%_5%,_35%_0%,_90%_0%,_90%_10%,_100%_15%,_100%_95%,_95.25%_100%,_40%_100%,_35%_94.75%,_0%_94.75%,_0%_5%)] [scroll-snap-type:_y_mandatory] md:h-[98%] md:w-[97%]
       md:[clip-path:_polygon(0%_5%,_25%_5%,_30%_0%,_93%_0%,_93%_12%,_100%_16%,_100%_95%,_95.25%_100%,_30%_100%,_25%_94.75%,_0%_94.75%,_0%_5%)] lg:h-[97%] lg:w-[99%] lg:[clip-path:_polygon(0%_5%,_12%_5%,_15%_0%,_97.5%_0%,_97.5%_9.5%,_100%_12.5%,_100%_96%,_97%_100%,_15%_100%,_12%_94.85%,_0%_94.85%,_0%_5%)] dark:bg-secondary-100 dark:bg-opacity-15"
    >
      <div className="fixed z-[300] h-[97%] w-[95%] bg-primary-700 [clip-path:_polygon(0%_5%,_30%_5%,_35%_0%,_90%_0%,_90%_10%,_100%_15%,_100%_95%,_95.25%_100%,_40%_100%,_35%_94.75%,_0%_94.75%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_40.5%_94.5%,_45.5%_99.75%,_90.5%_99.75%,_99.75%_90.5%,_99.75%_18.5%,_89.75%_13.5%,_89.75%_0.25%,_40%_0.25%,_35%_5.25%,_0%_5.25%)] md:h-[98%] md:w-[97%] md:[clip-path:_polygon(0%_5%,_25%_5%,_30%_0%,_93%_0%,_93%_12%,_100%_16%,_100%_95%,_95.25%_100%,_30%_100%,_25%_94.75%,_0%_94.75%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_30%_94.5%,_35%_99.75%,_90.5%_99.75%,_99.75%_90.5%,_99.75%_20%,_92.75%_16%,_92.75%_0.25%,_35%_0.25%,_30%_5.25%,_0%_5.25%)] lg:h-[97%] lg:w-[99%] lg:[clip-path:_polygon(0%_5%,_12%_5%,_15%_0%,_97.5%_0%,_97.5%_9.5%,_100%_12.5%,_100%_96%,_97%_100%,_15%_100%,_12%_94.85%,_0%_94.85%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_14%_94.5%,_17%_99.65%,_94.5%_99.65%,_99.85%_92.5%,_99.85%_15.75%,_97.35%_12.75%,_97.35%_0.35%,_17%_0.35%,_14%_5.35%,_0%_5.35%)]  dark:bg-secondary-100">
        <motion.div
          style={{ scaleX }}
          className="h-[100vh] w-[100vw] bg-quaternary-100"
        ></motion.div>
      </div>
      {children}
    </motion.main>
  )
}
