import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Apiwat Nonut — Software Developer Engineer",
  description:
    "Portfolio of Apiwat Nonut — Software Developer Engineer bridging Software Engineering and Industrial Automation. Specializing in React, Next.js, Python, ROS, and AI-powered factory solutions.",
  keywords: [
    "Apiwat Nonut",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "IoT",
    "Industrial Automation",
  ],
  authors: [{ name: "Apiwat Nonut" }],
  openGraph: {
    title: "Apiwat Nonut — Software Developer Engineer",
    description:
      "Bridging Software Engineering and Industrial Automation. Building intelligent solutions for complex production challenges.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
