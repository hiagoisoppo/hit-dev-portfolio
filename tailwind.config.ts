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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        glitch0: {
          '0%': { transform: 'translateX(0.25rem) translateY(-0.25rem)', opacity: '90%' },
          '14%': { transform: 'translateX(0.5rem) translateY(0.1rem)', opacity: '90%' },
          '15%': { transform: 'translateX(-0.1rem) translateY(0.7rem)', opacity: '90%' },
          '49%': { transform: 'translateX(0.2rem) translateY(-0.2rem)', opacity: '90%' },
          '50%': { transform: 'translateX(-0.1rem) translateY(-0.3rem)', opacity: '90%' },
          '99%': { transform: 'translateX(-0.2rem) translateY(0.4rem)', opacity: '90%' },
          '100%': { transform: 'translateX(-0.5rem) translateY(0.3rem)', opacity: '90%' },
        },
        glitch1: {
          '0%': { transform: 'translateX(0.25rem) translateY(-0.25rem)', opacity: '90%' },
          '14%': { transform: 'translateX(0.2rem) translateY(-0.1rem)', opacity: '90%' },
          '15%': { transform: 'translateX(0.1rem) translateY(-0.2rem)', opacity: '90%' },
          '49%': { transform: 'translateX(0.3rem) translateY(-0.3rem)', opacity: '90%' },
          '50%': { transform: 'translateX(0.1rem) translateY(-0.4rem)', opacity: '90%' },
          '99%': { transform: 'translateX(0.3rem) translateY(-0.5rem)', opacity: '90%' },
          '100%': { transform: 'translateX(0.1rem) translateY(-0.4rem)', opacity: '90%' },
        },
        glitch2: {
          '0%': { transform: 'translateX(-0.25rem) translateY(0.25rem)', opacity: '90%' },
          '14%': { transform: 'translateX(-0.3rem) translateY(0.1rem)', opacity: '90%' },
          '15%': { transform: 'translateX(-0.1rem) translateY(0.2rem)', opacity: '90%' },
          '49%': { transform: 'translateX(-0.4rem) translateY(0.3rem)', opacity: '90%' },
          '50%': { transform: 'translateX(-0.1rem) translateY(0.4rem)', opacity: '90%' },
          '99%': { transform: 'translateX(-0.4rem) translateY(0.5rem)', opacity: '90%' },
          '100%': { transform: 'translateX(-0.1rem) translateY(0.4rem)', opacity: '90%' },
        },
      },
    },
  },
  plugins: [],
}
export default config