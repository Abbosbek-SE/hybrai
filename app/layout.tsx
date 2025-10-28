import type React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { fontCssVariables } from '@/lib/theme'

import './globals.css'

export const metadata: Metadata = {
  title: 'Hybrai',
  description: 'Cinematic AI streaming platform for films, series, and animations.',
  generator: 'Hybrai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{fontCssVariables}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
