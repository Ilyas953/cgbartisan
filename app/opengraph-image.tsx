import { ImageResponse } from "next/og";

export const alt = "C.G.B Artisan — Couvreur à Mouroux (77)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0b0b0c",
          borderLeft: "14px solid #c6a15b",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c6a15b",
          }}
        >
          C.G.B Artisan
        </div>
        <div style={{ fontSize: 86, lineHeight: 1.08, marginTop: 28 }}>
          Couvreur à Mouroux (77)
        </div>
        <div style={{ fontSize: 34, marginTop: 30, color: "#b9b6ae" }}>
          Couverture · Rénovation de toiture · Zinguerie · Étanchéité
        </div>
        <div style={{ fontSize: 30, marginTop: 44, color: "#c6a15b" }}>
          Devis gratuit sous 24h · 07 80 61 07 91
        </div>
      </div>
    ),
    { ...size },
  );
}
