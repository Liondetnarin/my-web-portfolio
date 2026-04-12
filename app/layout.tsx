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
    default: "Detnarin Chaiaksorn — Full-Stack Developer",
    template: "%s | Detnarin Chaiaksorn",
  },
  description:
    "Computer Science student & Full-Stack Developer specializing in React, Next.js, Node.js, and Python. Interested in IoT, hardware systems, and technology innovations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Detnarin Chaiaksorn Portfolio",
    title: "Detnarin Chaiaksorn — Full-Stack Developer",
    description:
      "Computer Science student & Full-Stack Developer specializing in React, Next.js, Node.js, and Python.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detnarin Chaiaksorn — Full-Stack Developer",
    description:
      "Computer Science student & Full-Stack Developer. React, Next.js, Python, and more.",
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
