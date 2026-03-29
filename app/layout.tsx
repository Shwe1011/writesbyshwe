import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CopyWise – AI-powered UI copy for Figma",
  description:
    "CopyWise is a Figma plugin that generates on-brand UI copy suggestions using your style guide and existing copy library — powered by AI.",
  openGraph: {
    title: "CopyWise – AI-powered UI copy for Figma",
    description: "Write better UI copy, right inside Figma.",
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
