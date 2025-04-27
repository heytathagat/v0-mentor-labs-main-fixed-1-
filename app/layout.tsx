import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import { PageTransition } from "@/components/page-transition"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mentor Labs - Connecting Mentors and Startups",
  description:
    "Mentor Labs bridges the gap between experienced industry leaders and innovative startups, fostering growth and success.",
  generator: "v0.dev",
  metadataBase: new URL('https://mentorlabs.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mentorlabs.com',
    title: 'Mentor Labs - Connecting Mentors and Startups',
    description: 'Mentor Labs bridges the gap between experienced industry leaders and innovative startups, fostering growth and success.',
    siteName: 'Mentor Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentor Labs - Connecting Mentors and Startups',
    description: 'Mentor Labs bridges the gap between experienced industry leaders and innovative startups, fostering growth and success.',
    creator: '@mentorlabs',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-montserrat antialiased bg-white text-black selection:bg-primary/10 selection:text-primary dark:bg-gray-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <ScrollProgress />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 w-full">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
          <FloatingNav />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
