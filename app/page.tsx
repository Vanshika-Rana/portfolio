import { existsSync } from "fs";
import path from "path";
import { Stage } from "@/components/stage/Stage";

export default function Home() {
  const portrait = existsSync(
    path.join(process.cwd(), "public/images/avatar.jpeg")
  );

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <Stage portrait={portrait} />
    </>
  );
}
