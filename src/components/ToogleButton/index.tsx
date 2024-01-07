'use client'

import GlitchedMoonIcon from '../Icons/Moon'
import GlitchedSunIcon from '../Icons/Sun'
import GlitchedTextBrIcon from '../Icons/TextFill'
import GlitchedTextEuaIcon from '../Icons/TextLineIcon'

export default function SwitchButton({ isTheme }: { isTheme: boolean }) {
  return (
    <label
      htmlFor={isTheme ? 'check/theme' : 'check/language'}
      className="relative h-full w-full cursor-pointer bg-green-400 transition-all duration-500"
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
            // onChange={(event) => {
            //   event.target.checked
            //     ? document.documentElement.classList.add('dark')
            //     : document.documentElement.classList.remove('dark')
            // }}
          />
          <GlitchedTextEuaIcon />
          <GlitchedTextBrIcon />
        </>
      )}
    </label>
  )
}
