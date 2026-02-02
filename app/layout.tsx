import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Maintenance mode: navigation components removed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Epignosis Housing Co | Premium Long-Term Accommodations",
  description: "Epignosis Housing Co provides tailored long-term housing solutions for contractors, corporate relocations, and remote professionals. Comfortable, flexible, and built for real life.",
  keywords: "long-term stays, contractor accommodation, relocation housing, corporate housing UK, furnished apartments",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}