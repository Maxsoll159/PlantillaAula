"use client"
import { ReactNode } from 'react'
import './globals.css'

interface Iprops {
  children: ReactNode,
}

export default function RootLayout({ children }: Iprops) {
  return (
    <html lang="en">
      <body>

          {children}

      </body>
    </html>
  )
}
