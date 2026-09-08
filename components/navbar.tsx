"use client"

import Link from "next/link"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Logo width={40} height={32} />
            <span className="text-xl font-bold text-foreground font-[family-name:var(--font-jura)]">
              BeStack Development
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-jura)]">
            <Link
              href="/#servicios"
              className="text-foreground/80 hover:text-primary transition-colors font-semibold"
            >
              Servicios
            </Link>
            <Link
              href="/proyectos"
              className="text-foreground/80 hover:text-primary transition-colors font-semibold"
            >
              Portfolio
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">Comenzar Proyecto</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="md:hidden py-4 space-y-4 font-[family-name:var(--font-jura)]"
          >
            <Link
              href="/#servicios"
              className="block text-foreground/80 hover:text-primary transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/proyectos"
              className="block text-foreground/80 hover:text-primary transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contacto">Comenzar Proyecto</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
