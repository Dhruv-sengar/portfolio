import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpaceBackground } from "@/components/3d/SpaceBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruv Sengar | Full Stack Developer & AI Enthusiast",
  description: "Premium interactive 3D portfolio showcasing projects, skills, and experience in AI/ML and full-stack development",
  keywords: ["developer", "AI", "machine learning", "portfolio", "3D", "React"],
  authors: [{ name: "Dhruv Sengar" }],
  openGraph: {
    title: "Dhruv Sengar | Developer Portfolio",
    description: "Interactive 3D portfolio with futuristic design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-transparent text-white font-sans`}>
        <SpaceBackground />
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
