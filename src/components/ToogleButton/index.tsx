'use client'

import GlitchedGlobeAmericasIcon from './GlitchedGlobeAmericasIcon'
import GlitchedGlobeAsiaAustraliaIcon from './GlitchedGlobeAsiaAustraliaIcon'
import GlitchedMoonIcon from './GlitchedMoonIcon'
import GlitchedSuncon from './GlitchedSunIcon'

export default function SwitchButton({ isTheme }: { isTheme: boolean }) {
  return (
    <label
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
          <GlitchedSuncon />
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
          <GlitchedGlobeAmericasIcon />
          <GlitchedGlobeAsiaAustraliaIcon />
        </>
      )}
    </label>
  )
}
