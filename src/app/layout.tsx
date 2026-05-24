import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Millerify — Enterprise AI Automation',
  description: 'Millerify helps businesses automate operations using AI agents, intelligent dashboards, and automated workflows. Based in Raleigh, NC.',
  keywords: 'AI automation, enterprise AI, AI agents, business automation, Raleigh NC, AI consulting',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Millerify — Enterprise AI Automation',
    description: 'Automate your business operations with enterprise-grade AI agents and intelligent workflows.',
    type: 'website',
    url: 'https://millerify.com',
  },
  themeColor: '#08090a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
