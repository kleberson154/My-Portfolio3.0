import { Source_Code_Pro } from 'next/font/google'
import './globals.css'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin']
})

export const metadata = {
  title: 'Kleberson A.',
  description: 'Meu Portfólio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
