import type { Metadata } from 'next'
import './globals.css'

import Main from '@/components/Main'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Chakra_Petch as ChakraPetch } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hiago Isoppo Trajano',
  description: 'Personal website of Hiago Isoppo Trajano',
}

const font = ChakraPetch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className + ' dark'}>
      <body className="no-scrollbar flex flex-col gap-5 bg-primary-100 p-2 text-center font-light text-secondary-300 dark:bg-secondary-300 dark:text-primary-100">
        <LanguageProvider>
          <header className="sticky top-0 z-50 h-[5vh] w-full bg-blue-500">
            HEADER
          </header>
          <Main>{children}</Main>
        </LanguageProvider>
      </body>
    </html>
  )
}
