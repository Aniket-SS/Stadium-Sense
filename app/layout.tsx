import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "StadiumSense | GenAI Smart Stadiums & World Cup 2026 Operations",
  description:
    "An AI operations & fan concierge platform for FIFA World Cup 2026 venues, driven by a single LLM reasoning core.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
