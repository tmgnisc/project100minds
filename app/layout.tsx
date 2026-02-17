import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Project 100 Minds | Cohort I (2026) – DEV Community Nepal",
  description:
    "Project 100 Minds is a DEV Community Nepal initiative empowering students from all academic backgrounds with practical skills, technology awareness, and a future-ready mindset.",
  generator: "v0.app",
  openGraph: {
    title: "Project 100 Minds | Cohort I (2026) – DEV Community Nepal",
    description:
      "A one-year cohort experience focused on skill-building, technology awareness, leadership, and inclusive growth for students across every discipline.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Project 100 Minds by DEV Community Nepal",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
