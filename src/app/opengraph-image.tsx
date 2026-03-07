import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GrupoByM - Cirugía Bariátrica en Argentina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1f2e 0%, #0f1319 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            right: "20%",
            height: 4,
            background: "linear-gradient(90deg, transparent, #38bdf8, transparent)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            GrupoByM
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#38bdf8",
            }}
          >
            Cirugía Bariátrica en Argentina
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              marginTop: 8,
            }}
          >
            Dr. Pablo Rodríguez &middot; Equipo Interdisciplinario
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#64748b",
          }}
        >
          <span>Bypass Gástrico</span>
          <span>·</span>
          <span>Manga Gástrica</span>
          <span>·</span>
          <span>Cirugía Metabólica</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
