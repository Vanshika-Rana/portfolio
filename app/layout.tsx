import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const sourceCode= Source_Code_Pro({
	weight: ["200","300","400","500","600", "700","800","900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
export const metadata: Metadata = {
	title: 'Vanshika Rana - Portfolio',
	description: 'Developer | Dev Rel',
  }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AOSInit />
			<body className={sourceCode.className}>{children}</body>
		</html>
	);
}








