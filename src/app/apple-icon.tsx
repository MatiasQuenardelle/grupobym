import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3AADE0, #186590)",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: "110px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1,
            letterSpacing: "-4px",
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  );
}
