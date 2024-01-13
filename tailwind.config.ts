import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '420px',
      },
      colors: {
        primary: {
          100: '#2251BE',
          200: '#1A3C8E',
          300: '#132C67',
          400: '#0D1F49',
          500: '#0B1A3D',
          600: '#0B1A3D',
          700: '#060E20',
        },
        secondary: {
          100: '#F2F2F2',
          200: '#CFCFCF',
          300: '#A6A6A6',
          400: '#7D7D7D',
          500: '#545454',
        },
        tertiary: {
          100: '#00FA43',
          200: '#00DD3B',
          300: '#00AD2E',
          400: '#008523',
          500: '#005C18',
        },
        quaternary: {
          100: '#E80914',
          200: '#B90710',
          300: '#89050C',
          400: '#560308',
          500: '#4A0307',
        },
      },
      keyframes: {
        glitch0: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '14%': {
            transform: 'translateX(0.5rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '15%': {
            transform: 'translateX(-0.1rem) translateY(0.7rem)',
            opacity: '90%',
          },
          '49%': {
            transform: 'translateX(0.2rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '50%': {
            transform: 'translateX(-0.1rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '99%': {
            transform: 'translateX(-0.2rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '100%': {
            transform: 'translateX(-0.5rem) translateY(0.3rem)',
            opacity: '90%',
          },
        },
        glitch1: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '14%': {
            transform: 'translateX(0.2rem) translateY(-0.1rem)',
            opacity: '90%',
          },
          '15%': {
            transform: 'translateX(0.1rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '49%': {
            transform: 'translateX(0.3rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '50%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
          '99%': {
            transform: 'translateX(0.3rem) translateY(-0.5rem)',
            opacity: '90%',
          },
          '100%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
        },
        glitch2: {
          '0%': {
            transform: 'translateX(-0.25rem) translateY(0.25rem)',
            opacity: '90%',
          },
          '14%': {
            transform: 'translateX(-0.3rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '15%': {
            transform: 'translateX(-0.1rem) translateY(0.2rem)',
            opacity: '90%',
          },
          '49%': {
            transform: 'translateX(-0.4rem) translateY(0.3rem)',
            opacity: '90%',
          },
          '50%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '99%': {
            transform: 'translateX(-0.4rem) translateY(0.5rem)',
            opacity: '90%',
          },
          '100%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
        },
        glitch3: {
          '0%': {
            transform: 'translateX(0.25rem)translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.719%': {
            transform: 'translateX(0.5rem)translateY(0.1rem)',
            opacity: '90%',
          },
          '1.842%': {
            transform: 'translateX(-0.1rem)translateY(0.7rem)',
            opacity: '90%',
          },
          '6.018%': {
            transform: 'translateX(0.2rem)translateY(-0.2rem)',
            opacity: '90%',
          },
          '6.14%': {
            transform: 'translateX(-0.1rem)translateY(-0.3rem)',
            opacity: '90%',
          },
          '12.158%': {
            transform: 'translateX(-0.2rem)translateY(0.4rem)',
            opacity: '90%',
          },
          '12.281%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '100%',
          },
          '100%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '100%',
          },
        },
        glitch3a: {
          '0%': {
            transform: 'translateX(0.25rem)translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.273%': {
            transform: 'translateX(0.5rem)translateY(0.1rem)',
            opacity: '90%',
          },
          '1.364%': {
            transform: 'translateX(-0.1rem)translateY(0.7rem)',
            opacity: '90%',
          },
          '4.455%': {
            transform: 'translateX(0.2rem)translateY(-0.2rem)',
            opacity: '90%',
          },
          '4.545%': {
            transform: 'translateX(-0.1rem)translateY(-0.3rem)',
            opacity: '90%',
          },
          '9%': {
            transform: 'translateX(-0.2rem)translateY(0.4rem)',
            opacity: '90%',
          },
          '9.091%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
        },
        glitch3b: {
          '0%': {
            transform: 'translateX(0.25rem)translateY(-0.25rem)',
            opacity: '90%',
          },
          '0.83%': {
            transform: 'translateX(0.5rem)translateY(0.1rem)',
            opacity: '90%',
          },
          '0.889%': {
            transform: 'translateX(-0.1rem)translateY(0.7rem)',
            opacity: '90%',
          },
          '2.904%': {
            transform: 'translateX(0.2rem)translateY(-0.2rem)',
            opacity: '90%',
          },
          '2.963%': {
            transform: 'translateX(-0.1rem)translateY(-0.3rem)',
            opacity: '90%',
          },
          '5.867%': {
            transform: 'translateX(-0.2rem)translateY(0.4rem)',
            opacity: '90%',
          },
          '5.927%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
        },
        glitch3c: {
          '0%': {
            transform: 'translateX(0.25rem)translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.6%': {
            transform: 'translateX(0.5rem)translateY(0.1rem)',
            opacity: '90%',
          },
          '1.714%': {
            transform: 'translateX(-0.1rem)translateY(0.7rem)',
            opacity: '90%',
          },
          '5.599%': {
            transform: 'translateX(0.2rem)translateY(-0.2rem)',
            opacity: '90%',
          },
          '5.713%': {
            transform: 'translateX(-0.1rem)translateY(-0.3rem)',
            opacity: '90%',
          },
          '11.312%': {
            transform: 'translateX(-0.2rem)translateY(0.4rem)',
            opacity: '90%',
          },
          '11.426%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.5rem)translateY(0.3rem)',
            opacity: '0%',
          },
        },
        glitch4: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.719%': {
            transform: 'translateX(0.2rem) translateY(-0.1rem)',
            opacity: '90%',
          },
          '1.842%': {
            transform: 'translateX(0.1rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '6.018%': {
            transform: 'translateX(0.3rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '6.14%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
          '12.158%': {
            transform: 'translateX(0.3rem) translateY(-0.5rem)',
            opacity: '90%',
          },
          '12.281%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
        },
        glitch4a: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.273%': {
            transform: 'translateX(0.2rem) translateY(-0.1rem)',
            opacity: '90%',
          },
          '1.364%': {
            transform: 'translateX(0.1rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '4.455%': {
            transform: 'translateX(0.3rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '4.545%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
          '9%': {
            transform: 'translateX(0.3rem) translateY(-0.5rem)',
            opacity: '90%',
          },
          '9.091%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
        },
        glitch4b: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '0.83%': {
            transform: 'translateX(0.2rem) translateY(-0.1rem)',
            opacity: '90%',
          },
          '0.889%': {
            transform: 'translateX(0.1rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '2.904%': {
            transform: 'translateX(0.3rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '2.963%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
          '5.867%': {
            transform: 'translateX(0.3rem) translateY(-0.5rem)',
            opacity: '90%',
          },
          '5.927%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
        },
        glitch4c: {
          '0%': {
            transform: 'translateX(0.25rem) translateY(-0.25rem)',
            opacity: '90%',
          },
          '1.6%': {
            transform: 'translateX(0.2rem) translateY(-0.1rem)',
            opacity: '90%',
          },
          '1.714%': {
            transform: 'translateX(0.1rem) translateY(-0.2rem)',
            opacity: '90%',
          },
          '5.599%': {
            transform: 'translateX(0.3rem) translateY(-0.3rem)',
            opacity: '90%',
          },
          '5.713%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '90%',
          },
          '11.312%': {
            transform: 'translateX(0.3rem) translateY(-0.5rem)',
            opacity: '90%',
          },
          '11.426%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(0.1rem) translateY(-0.4rem)',
            opacity: '0%',
          },
        },
        glitch5: {
          '0%': {
            transform: 'translateX(-0.25rem) translateY(0.25rem)',
            opacity: '90%',
          },
          '1.719%': {
            transform: 'translateX(-0.3rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '1.842%': {
            transform: 'translateX(-0.1rem) translateY(0.2rem)',
            opacity: '90%',
          },
          '6.018%': {
            transform: 'translateX(-0.4rem) translateY(0.3rem)',
            opacity: '90%',
          },
          '6.14%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '12.158%': {
            transform: 'translateX(-0.4rem) translateY(0.5rem)',
            opacity: '90%',
          },
          '12.281%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
        },
        glitch5a: {
          '0%': {
            transform: 'translateX(-0.25rem) translateY(0.25rem)',
            opacity: '90%',
          },
          '1.273%': {
            transform: 'translateX(-0.3rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '1.364%': {
            transform: 'translateX(-0.1rem) translateY(0.2rem)',
            opacity: '90%',
          },
          '4.455%': {
            transform: 'translateX(-0.4rem) translateY(0.3rem)',
            opacity: '90%',
          },
          '4.545%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '9%': {
            transform: 'translateX(-0.4rem) translateY(0.5rem)',
            opacity: '90%',
          },
          '9.091%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
        },
        glitch5b: {
          '0%': {
            transform: 'translateX(-0.25rem) translateY(0.25rem)',
            opacity: '90%',
          },
          '0.83%': {
            transform: 'translateX(-0.3rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '0.889%': {
            transform: 'translateX(-0.1rem) translateY(0.2rem)',
            opacity: '90%',
          },
          '2.904%': {
            transform: 'translateX(-0.4rem) translateY(0.3rem)',
            opacity: '90%',
          },
          '2.963%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '5.867%': {
            transform: 'translateX(-0.4rem) translateY(0.5rem)',
            opacity: '90%',
          },
          '5.927%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
        },
        glitch5c: {
          '0%': {
            transform: 'translateX(-0.25rem) translateY(0.25rem)',
            opacity: '90%',
          },
          '1.6%': {
            transform: 'translateX(-0.3rem) translateY(0.1rem)',
            opacity: '90%',
          },
          '1.714%': {
            transform: 'translateX(-0.1rem) translateY(0.2rem)',
            opacity: '90%',
          },
          '5.599%': {
            transform: 'translateX(-0.4rem) translateY(0.3rem)',
            opacity: '90%',
          },
          '5.713%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '90%',
          },
          '11.312%': {
            transform: 'translateX(-0.4rem) translateY(0.5rem)',
            opacity: '90%',
          },
          '11.426%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(-0.1rem) translateY(0.4rem)',
            opacity: '0%',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
