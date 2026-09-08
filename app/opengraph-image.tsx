import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = `${personalInfo.name} - Software Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #064e3b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#34d399",
            }}
          />
          <span style={{ fontSize: "24px", color: "#6ee7b7", fontWeight: 700 }}>
            {personalInfo.role}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            {personalInfo.name}
          </div>
          <div style={{ fontSize: "30px", lineHeight: 1.4, color: "#cbd5e1", maxWidth: "900px" }}>
            {personalInfo.heroLead}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "22px", color: "#94a3b8" }}>
          <span>Next.js</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>Spring Boot</span>
          <span>·</span>
          <span>AI Voice Systems</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
