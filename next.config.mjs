/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Next 16 autogenera AGENTS.md/CLAUDE.md; se desactiva para mantener el repo limpio.
  agentRules: false,
  // Orígenes extra permitidos para recursos de dev (p. ej. acceso por IP de Tailscale).
  // Se configura en .env.local (gitignored): ALLOWED_DEV_ORIGINS=100.x.x.x,otro
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    : [],
}

export default nextConfig
