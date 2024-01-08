import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import './globals.css'

import LayoutBox from '@/components/LayoutBox'
import { Genos } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hiago Isoppo Trajano',
  description: 'Personal website of Hiago Isoppo Trajano',
}

const genos = Genos({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
    <html lang="en" className={genos.className}>
      <body className="flex h-svh w-svw items-center justify-center bg-quaternary-100 p-2 text-primary-700 dark:bg-primary-700 dark:text-secondary-100">
        <LayoutBox />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
