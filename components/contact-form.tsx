"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  IconBrandWhatsapp,
  IconCertificate,
  IconChartHistogram,
  IconDeviceLaptop,
  IconMail,
  IconPaint,
  IconShoppingCartSearch,
} from "@tabler/icons-react"

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      services: {
        info: false,
        corporate: false,
        maintenance: false,
        catalog: false,
        finalize: false,
      },
      contactMethods: {
        whatsApp: false,
        email: false,
      },
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    // <PLACEHOLDER> Implementar envío del formulario
    console.log("Form data:", data)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl border-2 border-primary/20 p-8 flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-20 shadow-lg">
      {/* Left side - Info */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <h3 className="text-3xl font-bold font-[family-name:var(--font-jura)] bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Cotiza tu desarrollo
        </h3>
        <div className="w-full flex flex-col gap-5">
          <p className="text-muted-foreground leading-relaxed">
            Contáctanos a través de este formulario para platicar acerca de tu
            desarrollo, en todas nuestras cotizaciones recibirás diferentes
            propuestas dependiendo la solución que necesites, así tendrás para
            elegir dependiendo tu presupuesto.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4">
          <h4 className="text-lg font-semibold font-[family-name:var(--font-jura)]">
            Información de contacto
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            {/* Contact info */}
            <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Nombre *"
                  {...register("firstName")}
                  className="w-full rounded-lg border-2 border-primary/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                />
                {errors.firstName && (
                  <span className="text-xs text-destructive">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Apellido *"
                  {...register("lastName")}
                  className="w-full rounded-lg border-2 border-primary/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                />
                {errors.lastName && (
                  <span className="text-xs text-destructive">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full flex flex-col gap-1">
                <input
                  type="email"
                  placeholder="Correo *"
                  {...register("email")}
                  className="w-full rounded-lg border-2 border-primary/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                />
                {errors.email && (
                  <span className="text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  type="tel"
                  placeholder="Teléfono *"
                  {...register("phone")}
                  className="w-full rounded-lg border-2 border-primary/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                />
                {errors.phone && (
                  <span className="text-xs text-destructive">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            {/* Services interested in */}
            <div className="w-full flex flex-col gap-4">
              <span className="font-semibold text-sm">Estoy interesado en:</span>
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
                  <Controller
                    name="services.info"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <div className="flex items-center gap-2">
                          <IconDeviceLaptop
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={28}
                            stroke={1}
                          />
                          <span className="text-sm">Páginas informativas</span>
                        </div>
                      </label>
                    )}
                  />
                  <Controller
                    name="services.corporate"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <div className="flex items-center gap-2">
                          <IconChartHistogram
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={28}
                            stroke={1}
                          />
                          <span className="text-sm">Páginas corporativas</span>
                        </div>
                      </label>
                    )}
                  />
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
                  <Controller
                    name="services.maintenance"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <div className="flex items-center gap-2">
                          <IconPaint
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={28}
                            stroke={1}
                          />
                          <span className="text-sm">Mantenimiento web</span>
                        </div>
                      </label>
                    )}
                  />
                  <Controller
                    name="services.catalog"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <div className="flex items-center gap-2">
                          <IconShoppingCartSearch
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={28}
                            stroke={1}
                          />
                          <span className="text-sm">Catálogos en línea</span>
                        </div>
                      </label>
                    )}
                  />
                </div>

                <div className="w-full flex justify-start">
                  <Controller
                    name="services.finalize"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <div className="flex items-center gap-2">
                          <IconCertificate
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={28}
                            stroke={1}
                          />
                          <span className="text-sm">Finaliza tu web</span>
                        </div>
                      </label>
                    )}
                  />
                </div>
              </div>
              {errors.services && (
                <span className="text-xs text-destructive">
                  {errors.services.message}
                </span>
              )}
            </div>

            {/* Contact method */}
            <div className="w-full flex flex-col gap-4">
              <span className="font-semibold text-sm">
                ¿Por qué medio quieres ser atendido?
              </span>
              <div className="w-full flex flex-col sm:flex-row justify-start gap-6">
                <Controller
                  name="contactMethods.whatsApp"
                  control={control}
                  render={({ field }) => (
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="w-4 h-4 cursor-pointer accent-[#25D366]"
                      />
                      <div className="flex items-center gap-2">
                        <IconBrandWhatsapp
                          className="group-hover:scale-110 transition-transform"
                          color="#25D366"
                          size={28}
                          stroke={1}
                        />
                        <span className="text-sm">WhatsApp</span>
                      </div>
                    </label>
                  )}
                />
                <Controller
                  name="contactMethods.email"
                  control={control}
                  render={({ field }) => (
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="w-4 h-4 cursor-pointer accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <IconMail
                          className="text-primary group-hover:scale-110 transition-transform"
                          size={28}
                          stroke={1}
                        />
                        <span className="text-sm">Correo</span>
                      </div>
                    </label>
                  )}
                />
              </div>
              {errors.contactMethods && (
                <span className="text-xs text-destructive">
                  {errors.contactMethods.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg py-3 bg-primary hover:bg-primary/90 transition-all duration-200 ease-in-out text-white font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Cotizar mi desarrollo"}
            </button>

            {submitSuccess && (
              <div className="p-4 bg-secondary/20 border-2 border-secondary rounded-lg">
                <p className="text-sm text-center font-semibold text-secondary-foreground">
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
