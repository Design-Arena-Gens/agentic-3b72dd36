import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electromagnetic Surface Technology - Energy Harvesting & Stealth',
  description: 'Revolutionary multifunctional electromagnetic surface converting radar waves into electricity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
