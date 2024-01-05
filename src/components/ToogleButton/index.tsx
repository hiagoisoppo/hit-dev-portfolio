'use client'

import GlitchedMoonIcon from "./GlitchedMoonIcon"
import GlitchedSuncon from "./GlitchedSunIcon"
import GlitchedGlobeAmericasIcon from "./GlitchedGlobeAmericasIcon"
import GlitchedGlobeAsiaAustraliaIcon from "./GlitchedGlobeAsiaAustraliaIcon"

export default function SwitchButton({bool}: {bool: boolean}) {
  return (
    <label
      htmlFor={bool ? 'check/theme' : 'check/language'}
      className=' flex items-center cursor-pointer relative overflow-hidden
      transition-all duration-500
      w-12 h-2
      lg:w-20 lg:h-10
      dark:text-slate-100'
    >      
      { bool ? (
        <>
          <input
            type="checkbox"
            id="check/theme"
            className='peer/theme sr-only'
            onChange={ (event) => {
              event.target.checked ? document.documentElement.classList.add('dark') 
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
            className='peer/language sr-only'
          />
          <GlitchedGlobeAmericasIcon />
          <GlitchedGlobeAsiaAustraliaIcon />
        </>
      ) }      
    </label>
  )
}


{/* <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
</div>
<label for="toggle" class="text-xs text-gray-700">Toggle me.</label> */}

// <button
    //     className='font-rubik font-extrabold text-6xl text-red-600 transition-all active:animate-switch
    //     opacity-0 active:opacity-100
    //     '
    //     
    //   >
    //     |
    //   </button>