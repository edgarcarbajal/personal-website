'use client'
import Footer from './footer'
import './globals.css'
import Header from './header'
import Navbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{'The best website around!'}</title>
      </head>
      <body>
        <Header title={'Personal Website (仮)'}/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
