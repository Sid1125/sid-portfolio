import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const baseUrl = "https://sid1125.github.io/sid-portfolio";
const isProd = process.env.NODE_ENV === "production";
const assetPfx = isProd ? "/sid-portfolio" : "";

export const metadata: Metadata = {
  title: "Siddharth Sinha - Full Stack Developer & Software Engineer",
  description:
    "Computer Science undergraduate focused on cybersecurity, digital forensics, and AI-enabled full-stack systems.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Siddharth Sinha - Full Stack Developer & Software Engineer",
    description:
      "Computer Science undergraduate focused on cybersecurity, digital forensics, and AI-enabled full-stack systems.",
    url: baseUrl,
    siteName: "Siddharth Sinha",
    images: [
      {
        url: `${baseUrl}/agent-recon.png`,
        width: 1200,
        height: 630,
        alt: "Siddharth Sinha — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Sinha - Full Stack Developer & Software Engineer",
    description:
      "Computer Science undergraduate focused on cybersecurity, digital forensics, and AI-enabled full-stack systems.",
    images: [`${baseUrl}/agent-recon.png`],
  },
  icons: {
    icon: `${assetPfx}/favicon.svg`,
    shortcut: `${assetPfx}/favicon.svg`,
    apple: `${assetPfx}/favicon.svg`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siddharth Sinha",
  url: baseUrl,
  image: `${baseUrl}/agent-recon.png`,
  jobTitle: "Full Stack Developer & Cybersecurity Enthusiast",
  sameAs: [
    "https://github.com/sid1125",
    "https://www.linkedin.com/in/ssinha1125/",
    "https://tryhackme.com/p/sid1125",
  ],
  alumniOf: "Amity University Haryana",
  knowsAbout: [
    "Cybersecurity",
    "Digital Forensics",
    "Full Stack Development",
    "Artificial Intelligence",
    "Penetration Testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-red-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
