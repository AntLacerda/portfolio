import type { Metadata } from "next";
import { Geist, Geist_Mono, UnifrakturCook } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Correção feita anteriormente
const unifrakturMaguntia = UnifrakturCook({
  variable: "--font-unifraktur-maguntia",
  subsets: ["latin"],
  weight: "700", 
});

export const metadata: Metadata = {
  title: "Ant. Lacerda | Full Stack Developer",
  description: "Created by Ant. Lacerda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unifrakturMaguntia.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}