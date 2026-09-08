/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Next 16 autogenera AGENTS.md/CLAUDE.md; se desactiva para mantener el repo limpio.
  agentRules: false,
}

export default nextConfig
