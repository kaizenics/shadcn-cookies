import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "shadcn/ui cookies - Cookie Consent Component for React & Next.js";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a2e 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a2e 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              display: "flex",
            }}
          >
            🍪
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#fafafa",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            shadcn/ui cookies
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            Sleek and flexible cookie consent component, designed with shadcn/ui
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["React", "Next.js", "Tailwind CSS", "shadcn/ui"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  border: "1px solid #27272a",
                  color: "#d4d4d8",
                  fontSize: "16px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
