import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Chen — Full-Stack Developer",
    template: "%s | Alex Chen",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern best practices.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Chen Portfolio",
    title: "Alex Chen — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern best practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
