import ThemeToggle from "@/components/ui/themeToggle";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ui/scrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // ✅ Avoids FOIT (Flash of Invisible Text)
  variable: "--font-inter", // (Optional) If using as CSS variable
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Ankit Mittal | Full Stack Developer",
  description:
    "Full-stack software engineer building modern web applications using React, Next.js, Node.js, and TypeScript.",
  applicationName: "SK Portfolio",
  authors: [{ name: "Ankit Mittak", url: "https://ankit-pro.onrender.com/" }],
  creator: "Ankit Mittal",
  keywords: [
    "Ankit Mittal",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Software Engineer",
  ],
  icons: {
    icon: [
      {
        url: "/icons/favicon_192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/favicon_300x300.png",
        sizes: "300x300",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Ankit Mittal | Full Stack Developer",
    description:
      "Explore the portfolio of Ankit Mittal — a full-stack engineer building scalable web applications with React Node.js, and AWS.",
    url: "https://ankit-pro.onrender.com/",
    siteName: "Ankit Mittal Portfolio",
    images: [
      {
        url: "/og.webp",
        width: 1024,
        height: 1024,
        alt: "Ankit Mittal | Full Stack Developer Portfolio",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Mittal | Full Stack Developer",
    description:
      "Full-stack engineer specializing in React, Node.js. Explore my portfolio.",
    images: ["/og.webp"],
    // creator: "@shivender_kumar", // Optional: if you have a Twitter handle
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b3954" }, // Dark blue
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <ScrollToTop />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
