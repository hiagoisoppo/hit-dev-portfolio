'use client'
import { motion } from 'framer-motion'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="no-scrollbar z-10 h-[97%] w-[95%] overflow-scroll bg-primary-700 bg-opacity-15 [clip-path:_polygon(0%_5%,_30%_5%,_35%_0%,_90%_0%,_90%_10%,_100%_15%,_100%_95%,_95.25%_100%,_40%_100%,_35%_94.75%,_0%_94.75%,_0%_5%)] md:h-[98%] md:w-[97%] md:[clip-path:_polygon(0%_5%,_25%_5%,_30%_0%,_93%_0%,_93%_12%,_100%_16%,_100%_95%,_95.25%_100%,_30%_100%,_25%_94.75%,_0%_94.75%,_0%_5%)] lg:h-[97%] lg:w-[99%] lg:[clip-path:_polygon(0%_5%,_12%_5%,_15%_0%,_97.5%_0%,_97.5%_9.5%,_100%_12.5%,_100%_96%,_97%_100%,_15%_100%,_12%_94.85%,_0%_94.85%,_0%_5%)] dark:bg-secondary-100 dark:bg-opacity-15"
    >
      {children}
    </motion.main>
  )
}
