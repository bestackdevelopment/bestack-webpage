import type { Metadata } from "next"
import { IconClock, IconMail } from "@tabler/icons-react"

import { ContactForm } from "@/components/contact-form"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos sobre tu idea y te responderemos en menos de 24 horas.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance font-[family-name:var(--font-jura)]">
            Hablemos de tu{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Proyecto
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Cuéntanos sobre tu idea y te responderemos en menos de 24 horas
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-[family-name:var(--font-jura)]">
            Información de Contacto
          </h2>
          <p className="text-muted-foreground text-lg mb-12 text-center">
            También puedes contactarnos directamente a través de estos medios:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <IconMail className="w-8 h-8 text-primary" stroke={1.5} />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-[family-name:var(--font-jura)]">
                  Email
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                <IconClock className="w-8 h-8 text-accent" stroke={1.5} />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-[family-name:var(--font-jura)]">
                  Horario
                </h3>
                <p className="text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
