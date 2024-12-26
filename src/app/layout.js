import { Fira_Code } from 'next/font/google'
import './globals.css'
import PageAnimatePresence from '../components/HOC/PageAnimatePrecense'
import { SpeedInsights } from '@vercel/speed-insights/next'

const firaCode = Fira_Code({
  subsets: ['latin']
})

export const metadata = {
  title: 'Kleberson A.',
  description: 'Meu Portfólio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.variable} antialiased`}>
        <PageAnimatePresence>{children}</PageAnimatePresence>
        <SpeedInsights />
      </body>
    </html>
  )
}
