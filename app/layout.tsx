import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanshika Rana — Developer Advocate & Content Strategist",
  description:
    "Developer Advocate and Content Strategist with 4+ years turning complex tech into content that drives developer adoption. From API docs and SDK walkthroughs to growth campaigns.",
  openGraph: {
    title: "Vanshika Rana — Developer Advocate & Content Strategist",
    description:
      "I turn developer tools into adoption stories. 4+ years of DevRel, content strategy, and community building.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FAFAF7] text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
