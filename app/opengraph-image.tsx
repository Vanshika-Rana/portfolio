import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { figures, profile } from "./content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (file: string) => readFileSync(path.join(process.cwd(), file));

export default async function Image() {
  const medium = asset("app/fonts/sg-500.ttf");
  const bold = asset("app/fonts/sg-700.ttf");
  const mono = asset("app/fonts/jbm-400.ttf");
  const mark = `data:image/svg+xml;base64,${asset("app/icon.svg").toString("base64")}`;
  const portrait = `data:image/jpeg;base64,${asset("public/images/avatar.jpeg").toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          color: "#f2f0ea",
          fontFamily: "Grotesk",
          padding: "56px 64px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark} width={44} height={44} alt="" />
            <span
              style={{
                fontFamily: "Mono",
                fontSize: 20,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#f2f0ea",
              }}
            >
              {profile.name}
            </span>
          </div>
          <span style={{ fontFamily: "Mono", fontSize: 18, color: "#8b887f" }}>
            {profile.site.label}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: -2.5,
              }}
            >
              <span>{profile.headlineLead}</span>
              <div style={{ display: "flex" }}>
                <span>into&nbsp;</span>
                <span style={{ color: "#ff4f1f" }}>adoption</span>
                <span>&nbsp;stories.</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 26,
                color: "#8b887f",
              }}
            >
              <span>Developer Relations Engineer</span>
              <span style={{ color: "#3a3a42", margin: "0 14px" }}>/</span>
              <span>Forward Deployed Engineer</span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait}
            width={212}
            height={268}
            alt=""
            style={{ objectFit: "cover", borderBottom: "6px solid #ff4f1f" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #26262c",
            paddingTop: 26,
          }}
        >
          {figures.map((figure) => (
            <div
              key={figure.label}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <span style={{ fontSize: 34, fontWeight: 700 }}>
                {figure.value}
              </span>
              <span
                style={{
                  fontFamily: "Mono",
                  fontSize: 15,
                  textTransform: "uppercase",
                  letterSpacing: 1.6,
                  color: "#8b887f",
                }}
              >
                {figure.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
