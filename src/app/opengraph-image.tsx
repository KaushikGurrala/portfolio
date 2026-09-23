import { ImageResponse } from "next/og";

export const alt = "Kaushik Gurrala — AI/ML Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#090c0b",
        color: "#f4f3ee",
        padding: "70px 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9fffc8" }}>
        <span>KG / PORTFOLIO</span>
        <span>AI · SYSTEMS · PRODUCT</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
        <div style={{ fontSize: 78, lineHeight: 1.02, letterSpacing: "-4px", fontWeight: 650 }}>
          AI systems that move from models to real products.
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#a6ada8" }}>Kaushik Gurrala — AI/ML Software Engineer</div>
      </div>
    </div>,
    size,
  );
}
