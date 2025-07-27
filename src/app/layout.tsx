import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebCraft Studio - Professional Web Development Services",
  description:
    "Transform your digital presence with WebCraft Studio. Specializing in modern web development, responsive design, and user-centric experiences that drive business growth.",
  keywords: "web development, MERN stack, React, Node.js, responsive design, UI/UX, Mumbai developer",
  icons: {
    icon: "/favicon.ico", // Or .png, .svg
  },
  authors: [{ name: "Atul Mishra" }],
  openGraph: {
    title: "WebCraft Studio - Professional Web Development Services",
    description: "Transform your digital presence with cutting-edge web solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
