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
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
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
          100: '#DB0E4D',
          200: '#B80B3F',
          300: '#8F0931',
          400: '#660623',
          500: '#3D0415',
        },
        quaternary: {
          100: '#E80914',
          200: '#B90710',
          300: '#89050C',
          400: '#560308',
          500: '#4A0307',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
      },
    },
  },
  plugins: [],
}
export default config
