import type { Metadata } from 'next'
import { Martel } from 'next/font/google'
import './globals.css'
const martel = Martel({ subsets: ['latin'], weight: "300" })

export const metadata: Metadata = {
  title: 'Jeffrey Deng',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={martel.className}>{children}</body>
    </html>


  )
}
