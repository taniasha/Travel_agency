import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/components/shared/FooterWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ISKY | Luxury Bespoke Travel",
  description:
    "Award-winning luxury travel experts crafting bespoke journeys for discerning travellers since 2005.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterWrapper />
          </div>
        </div>
      </body>
    </html>
  );
}