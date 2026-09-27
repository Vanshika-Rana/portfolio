import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const mark = readFileSync(path.join(process.cwd(), "app/icon.svg"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff4f1f",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${mark.toString("base64")}`}
          width={132}
          height={132}
          alt=""
        />
      </div>
    ),
    size,
  );
}
