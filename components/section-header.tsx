/** Encabezado de sección consistente en todo el sitio (centrado + subtítulo opcional). */
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  )
}
