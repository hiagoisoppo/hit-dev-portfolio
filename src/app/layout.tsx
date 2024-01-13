import type { Metadata } from 'next'
import './globals.css'

import Main from '@/components/Main'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hiago Isoppo Trajano',
  description: 'Personal website of Hiago Isoppo Trajano',
}

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
      <body className="no-scrollbar flex h-svh w-svw flex-col gap-3 bg-primary-100 p-2 text-secondary-300 dark:bg-secondary-300 dark:text-primary-100">
        <LanguageProvider>
          <header className="sticky top-0 z-50 h-[5%] w-full bg-blue-500">
            HEADER
          </header>
          <Main>{children}</Main>
        </LanguageProvider>
      </body>
    </html>
  )
}
