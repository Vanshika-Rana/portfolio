import type { Metadata, Viewport } from "next";
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

const title = "Vanshika Rana | Developer Relations and Forward Deployed Engineer";
const description =
  "Developer Relations Engineer and Forward Deployed Engineer with 4+ years at the intersection of code, community, and the codebase. API docs, SDK walkthroughs, demos, and programs that drive developer adoption.";
const social =
  "I turn developer tools into adoption stories. Four years of reading the code, shipping the demo, and writing the docs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://van.codes"),
  title,
  description,
  applicationName: "Vanshika Rana",
  authors: [{ name: "Vanshika Rana", url: "https://van.codes" }],
  creator: "Vanshika Rana",
  keywords: [
    "Vanshika Rana",
    "Developer Relations Engineer",
    "Forward Deployed Engineer",
    "DevRel",
    "Developer Advocate",
    "developer experience",
    "API documentation",
    "technical writing",
    "developer community",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Vanshika Rana",
    locale: "en_US",
    title,
    description: social,
    firstName: "Vanshika",
    lastName: "Rana",
    username: "aahiknsv",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: social,
    site: "@aahiknsv",
    creator: "@aahiknsv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
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
