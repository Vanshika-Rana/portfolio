import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vanshika Rana | Developer Relations and Forward Deployed Engineer",
  description:
    "Developer Relations Engineer and Forward Deployed Engineer with 4+ years at the intersection of code, community, and the codebase. API docs, SDK walkthroughs, demos, and programs that drive developer adoption.",
  openGraph: {
    title: "Vanshika Rana | Developer Relations and Forward Deployed Engineer",
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
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="bg-void font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
