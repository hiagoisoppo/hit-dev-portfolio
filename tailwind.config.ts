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
      colors: {
        primary: {
          100: '#FFFCF7',
          200: '#DBD9D5',
          300: '#B3B0AD',
        },
        secondary: {
          100: '#4AD5FF',
          200: '#3495B3',
          300: '#0A1E25',
        },
        tertiary: {
          100: '#FFEE00',
          200: '#DBCD00',
          300: '#B3A700',
        },
      },
    },
  },
  plugins: [],
}
export default config
