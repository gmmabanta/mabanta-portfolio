import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Space_Mono,
  Hanken_Grotesk,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mae Mabanta | Portfolio",
  description:
    "AI Engineer & Creative Logician. Building the future with human logic & machine magic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${bricolage.variable} ${spaceMono.variable} ${hanken.variable}`}
    >
      <body className="bg-background selection:bg-secondary-container text-on-background selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
