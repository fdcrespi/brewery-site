import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import localFont from 'next/font/local'

const elenaFont = localFont({
  src: [
    {
      path: '../public/tipografias/On the horizon.ttf',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-elena',
  display: 'swap',
})

const casualFont = localFont({
  src: [
    {
      path: '../public/tipografias/Casual Softcore.otf',
      style: 'normal',
      weight: '400',
    },
  ],
  display: 'swap',
})

const trashHandFont = localFont({
  src: [
    {
      path: '../public/tipografias/TrashHand.ttf',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-trash-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${elenaFont.variable} ${casualFont.className} ${trashHandFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
