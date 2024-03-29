import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from 'postcss'
import Header from '@/components/Header'
import Conteiner from '@/components/Conteiner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Conteiner>
          <Header />
          {children}
          <Footer />
        </Conteiner>
        
        
        </body>
    </html>
  )
}
