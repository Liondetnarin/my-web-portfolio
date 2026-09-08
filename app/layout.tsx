import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarScrollEnhancer from "@/components/NavbarScrollEnhancer";
import ScrollProgress from "@/components/ScrollProgress";
import { personalInfo } from "@/lib/data";
import { DEFAULT_OG_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personalInfo.name} - Software Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: DEFAULT_OG_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${personalInfo.name} - Software Developer`,
    description: DEFAULT_OG_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Software Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - Software Developer`,
    description: DEFAULT_OG_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
  ],
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ScrollProgress />
        <NavbarScrollEnhancer />
        <Navbar />
        <main id="main-content" className="min-w-0 flex-1 pt-14 sm:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
