import type { Metadata, Viewport } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
})

export const metadata: Metadata = {
  title: 'Dey Parivar',
  description: 'A family rooted in Singur, Hooghly, West Bengal for over 250 years.',
}

export const viewport: Viewport = {
  themeColor: '#f0ede8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
