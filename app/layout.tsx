import type React from "react"
import type { Metadata, Viewport } from "next"
import { Anton, Barlow_Condensed, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SiteFrame from "@/components/site-frame"
import "./globals.css"
import "lenis/dist/lenis.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["600", "700", "900"],
})

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
})

export const metadata: Metadata = {
  title: "SAS — Alejandro Chávez",
  description:
    "Software developer y Tech Lead. Sistemas web y producto. Chihuahua, MX.",
}

export const viewport: Viewport = {
  themeColor: "#F4EDD8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${barlowCondensed.variable} ${anton.variable} font-sans antialiased`}>
        <SiteFrame>{children}</SiteFrame>
        <Analytics />
      </body>
    </html>
  )
}
