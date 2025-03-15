import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Anniversary App',
  description: 'Created with The Love',
  generator: 'The Love',
}

useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
}, []);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <Head>
        <link rel="manifest" href="/public/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icon.png" />

        {/* Apple specific meta */}
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <body>{children}</body>
    </html>
  )
}
