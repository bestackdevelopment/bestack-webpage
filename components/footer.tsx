import Link from "next/link"

import { Logo } from "@/components/logo"
import { contactEmail } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo width={40} height={32} />
              <h3 className="text-xl font-bold text-foreground">BeStack Development</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Desarrollo web profesional con tecnologías modernas
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/servicios/paginas-informativas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Páginas Informativas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/paginas-corporativas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Páginas Corporativas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/ecommerce"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/mantenimiento-web"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mantenimiento Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/finaliza-tu-web"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Finaliza tu Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/proyectos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              {/* Agrega tus redes sociales aquí */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} BeStack Development. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
