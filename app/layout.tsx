import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Vanshika Rana | Developer Advocate at Zerops",
  description:
    "Engineer at heart turned Developer Advocate at Zerops. 4+ years turning complex tech into content that drives developer adoption, from API docs and SDK walkthroughs to growth campaigns.",
  openGraph: {
    title: "Vanshika Rana | Developer Advocate at Zerops",
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
      <body
        className={`${nunito.variable} ${spaceGrotesk.variable} font-sans bg-[#0a0a0a] text-stone-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
