import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hasan Sattar",
  description: "Personal Portfolio site for Hasan Sattar",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}