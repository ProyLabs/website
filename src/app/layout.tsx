import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/layout/navbar";
import { AOSInit } from "@/components/shared/aos";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proylabs",
  description: "Building Worlds That Inspire, Uplift, and Transform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
