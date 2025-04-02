import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Vishal Dharam | Senior Developer",
    template: "%s | Vishal Dharam",
  },
  description:
    "Portfolio of Vishal Dharam, a senior developer specializing in web development and software engineering.",
  keywords: ["Vishal Dharam", "senior developer", "web development", "software engineer", "portfolio"],
  authors: [{ name: "Vishal Dharam" }],
  creator: "Vishal Dharam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishaldharam.com",
    title: "Vishal Dharam | Senior Developer",
    description:
      "Portfolio of Vishal Dharam, a senior developer specializing in web development and software engineering.",
    siteName: "Vishal Dharam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Dharam | Senior Developer",
    description:
      "Portfolio of Vishal Dharam, a senior developer specializing in web development and software engineering.",
    creator: "@vishaldharam",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'