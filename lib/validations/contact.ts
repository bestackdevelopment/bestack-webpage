import { z } from "zod"

const atLeastOneTrue = (obj: Record<string, boolean>) =>
  Object.values(obj).some(Boolean)

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "El nombre es requerido")
    .min(2, "Mínimo 2 caracteres"),
  lastName: z
    .string()
    .min(1, "El apellido es requerido")
    .min(2, "Mínimo 2 caracteres"),
  email: z
    .string()
    .min(1, "El email es requerido")
    .pipe(z.email("Email inválido")),
  phone: z
    .string()
    .min(1, "El teléfono es requerido")
    .min(10, "Mínimo 10 dígitos"),
  services: z
    .object({
      info: z.boolean(),
      corporate: z.boolean(),
      maintenance: z.boolean(),
      catalog: z.boolean(),
      finalize: z.boolean(),
    })
    .refine(atLeastOneTrue, { message: "Selecciona al menos un servicio" }),
  contactMethods: z
    .object({
      whatsApp: z.boolean(),
      email: z.boolean(),
    })
    .refine(atLeastOneTrue, {
      message: "Selecciona al menos un método de contacto",
    }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
