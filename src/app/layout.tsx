import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import './globals.css'

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
      <body className="flex h-svh w-svw items-center justify-center bg-quaternary-100 p-2 text-primary-700 dark:bg-primary-700 dark:text-secondary-200">
        <Header />
        <main className="h-full w-full bg-primary-700 [clip-path:_polygon(0%_5%,_30%_5%,_35%_0%,_90%_0%,_90%_10%,_100%_15%,_100%_95%,_95.25%_100%,_40%_100%,_35%_94.75%,_0%_94.75%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_40.5%_94.5%,_45.5%_99.75%,_90.5%_99.75%,_99.75%_90.5%,_99.75%_18.5%,_89.75%_13.5%,_89.75%_0.25%,_40%_0.25%,_35%_5.25%,_0%_5.25%)] md:[clip-path:_polygon(0%_5%,_25%_5%,_30%_0%,_93%_0%,_93%_12%,_100%_16%,_100%_95%,_95.25%_100%,_30%_100%,_25%_94.75%,_0%_94.75%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_30%_94.5%,_35%_99.75%,_90.5%_99.75%,_99.75%_90.5%,_99.75%_20%,_92.75%_16%,_92.75%_0.25%,_35%_0.25%,_30%_5.25%,_0%_5.25%)] lg:[clip-path:_polygon(0%_5%,_12%_5%,_15%_0%,_97.5%_0%,_97.5%_9.5%,_100%_12.5%,_100%_96%,_97%_100%,_15%_100%,_12%_94.85%,_0%_94.85%,_0%_5%,_0.25%_5%,_0.25%_94.5%,_14%_94.5%,_17%_99.65%,_94.5%_99.65%,_99.85%_92.5%,_99.85%_15.75%,_97.35%_12.75%,_97.35%_0.35%,_17%_0.35%,_14%_5.35%,_0%_5.35%)] dark:bg-quaternary-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
