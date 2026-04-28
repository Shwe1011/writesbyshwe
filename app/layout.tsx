import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shwetha Emerson Kamalesan — Staff Technical Writer",
  description:
    "Portfolio of Shwetha Emerson Kamalesan, Staff Technical Writer with 16 years of experience crafting product documentation, developer guides, and AI-powered writing tools.",
  openGraph: {
    title: "Shwetha Emerson Kamalesan — Staff Technical Writer",
    description:
      "Product docs, developer guides, video tutorials, Figma plugins, and AI tools — built by a technical writer who codes.",
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
