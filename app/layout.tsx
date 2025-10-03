import type React from "react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import AOSInit from "@/components/AOSInit"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portafolio | Desarrollador Full Stack",
  description: "Portafolio personal de desarrollador especializado en JavaScript, React y Next.js",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        <AOSInit />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
