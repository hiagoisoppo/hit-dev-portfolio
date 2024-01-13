'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import GlitchedTextBrIcon from '../Icons/FlagBr'
import GlitchedTextEuaIcon from '../Icons/FlagUsa'
import GlitchedMoonIcon from '../Icons/Moon'
import GlitchedSunIcon from '../Icons/Sun'

export default function SwitchButton({ isTheme }: { isTheme: boolean }) {
  const { toggleLanguage } = useLanguage()

  return (
    <motion.label
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: isTheme ? 0.4 : 0.6 }}
      htmlFor={isTheme ? 'check/theme' : 'check/language'}
      className="relative h-full w-full cursor-pointer transition-all duration-500"
    >
      {isTheme ? (
        <>
          <input
            type="checkbox"
            id="check/theme"
            className="peer/theme sr-only"
            onChange={(event) => {
              event.target.checked
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark')
            }}
          />
          <GlitchedMoonIcon />
          <GlitchedSunIcon />
        </>
      ) : (
        <>
          <input
            type="checkbox"
            id="check/language"
            className="peer/language sr-only"
            onChange={() => {
              toggleLanguage()
            }}
          />
          <GlitchedTextEuaIcon />
          <GlitchedTextBrIcon />
        </>
      )}
    </motion.label>
  )
}
