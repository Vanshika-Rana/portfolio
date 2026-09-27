import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        void: "#08080a",
        stage: "#101013",
        edge: "#26262c",
        bone: "#f2f0ea",
        ash: "#8b887f",
        signal: "#ff4f1f",
      },
    },
  },
  plugins: [],
};
export default config;
