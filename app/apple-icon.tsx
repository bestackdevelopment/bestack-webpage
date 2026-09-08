import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Marca BeStack: tres barras (coral, turquesa, violeta) sobre fondo oscuro.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          background: "#0f0f0f",
        }}
      >
        {["#fd4b5b", "#42bec0", "#665de2"].map((color) => (
          <div
            key={color}
            style={{
              width: 104,
              height: 20,
              background: color,
              borderRadius: 6,
            }}
          />
        ))}
      </div>
    ),
    { ...size },
  )
}
