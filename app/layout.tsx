import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-display',
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: 'Aditya Rajpoot | Portfolio',
  description:
    'Portfolio of Aditya Rajpoot — B.Tech student, Python developer, and AI & data analytics enthusiast based in Noida, India.',
  keywords: [
    'Aditya Rajpoot',
    'portfolio',
    'python developer',
    'AI',
    'data analytics',
    'machine learning',
    'B.Tech',
    'Noida',
  ],
  authors: [{ name: 'Aditya Rajpoot' }],
  openGraph: {
    title: 'Aditya Rajpoot | Portfolio',
    description:
      'B.Tech student skilled in Python, AI tools, web development, and data analytics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Rajpoot | Portfolio',
    description:
      'B.Tech student skilled in Python, AI tools, web development, and data analytics.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
