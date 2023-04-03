"use client"
import { ReactNode } from 'react'
import './globals.css'
import { ContextAula } from '../context/AulaContext';

interface Iprops {
  children: ReactNode,
}

export default function RootLayout({ children }: Iprops) {
  return (
    <html lang="en">
      <body>
        <ContextAula>
          {children}
        </ContextAula>
      </body>
    </html>
  )
}
