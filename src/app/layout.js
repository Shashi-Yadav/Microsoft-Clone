import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Microsoft - Cloud, Computers, Apps & Gaming',
  description: 'Explore Microsoft products and services for your home or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure and more. Find downloads and get support.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>

    </html>
  )
}
