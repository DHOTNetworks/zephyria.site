import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Zephyria Network | Ultra-fast Zig Blockchain | High TPS",
  description: "Experience Zephyria Network, the next-generation, ultra-fast blockchain engineered entirely from scratch in Zig. Achieving industry-leading high TPS and unparalleled performance for the decentralized web.",
  keywords: [
    "Zephyria",
    "Zephyria Network",
    "Zig Blockchain",
    "Fast Blockchain",
    "Ultra-fast Blockchain",
    "High TPS Blockchain",
    "High Performance Blockchain",
    "Layer 1",
    "Web3",
    "Crypto",
    "Scalable Blockchain"
  ],
  applicationName: "Zephyria Network",
  authors: [{ name: "Zephyria Core Team", url: "https://zephyria.site" }],
  creator: "Zephyria",
  publisher: "Zephyria Networks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zephyria.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zephyria Network | Ultra-fast Zig Blockchain | High TPS",
    description: "Experience Zephyria Network, the next-generation, ultra-fast blockchain engineered entirely from scratch in Zig. Achieving industry-leading high TPS and unparalleled performance for the decentralized web.",
    url: "https://zephyria.site",
    siteName: "Zephyria Network",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zephyria Network - Ultra-Fast Zig Blockchain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zephyria Network | Ultra-fast Zig Blockchain | High TPS",
    description: "Experience Zephyria Network, the next-generation, ultra-fast blockchain engineered entirely from scratch in Zig. Achieving industry-leading high TPS and unparalleled performance for the decentralized web.",
    images: ["/opengraph-image.png"],
    creator: "@ZephyriaNetwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} selection:bg-accent-cyan selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
