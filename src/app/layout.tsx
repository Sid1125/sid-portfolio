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

export const metadata: Metadata = {
  title: "Siddharth Sinha - Full Stack Developer & Software Engineer",
  description: "Siddharth Sinha is a Full Stack Developer specializing in MERN stack, Cloud Computing, and Web Development. View my portfolio, projects, and achievements.",
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
        {children}
      </body>
    </html>
  );
}
