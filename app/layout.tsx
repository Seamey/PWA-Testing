import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Testing Love',
  description: 'Created with The Love',
  generator: 'The Love',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
