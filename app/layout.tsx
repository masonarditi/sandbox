import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandbox - A Creative Space for Berkeley Builders",
  description: "Join a community of creators, innovators, and dreamers in UC Berkeley's premier co-working class.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAF9F7]`}>{children}</body>
    </html>
  )
}

