import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hasan Sattar',
  description: 'A Personal Portfolio website for Hasan Sattar',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en">
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Hasan Sattar" />
        <meta property="og:description" content="A Personal Portfolio website for Hasan Sattar" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://hasansattar.co.uk/" />
        <meta property="og:type" content="website" />
        <body>{children}</body>
      </html>
      <Analytics />
    </>
  )
}
