import type { Metadata } from "next"
import { Jura, Montserrat } from "next/font/google"

import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { siteName, siteUrl } from "@/lib/site"

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Agencia de Desarrollo Web Profesional`,
    template: `%s | ${siteName}`,
  },
  description:
    "Creamos páginas web profesionales, rápidas y optimizadas. Servicios de desarrollo, mantenimiento y ecommerce.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName,
    url: siteUrl,
    title: `${siteName} | Agencia de Desarrollo Web Profesional`,
    description:
      "Creamos páginas web profesionales, rápidas y optimizadas. Servicios de desarrollo, mantenimiento y ecommerce.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${jura.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
