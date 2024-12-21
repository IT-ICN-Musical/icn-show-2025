import { mont, safiraMarch } from "@/fonts/font";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";
import QueryProviders from "./providers";

export const metadata: Metadata = {
  title: "ICN 2025 - Senjakala: A Musical",
  description:
    "TICKETS ON SALE! Ride along Arya's path of passion, pride and peril as a Yogyakartan theatre director. @SOTA Drama Theatre, 15/02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mont.variable} ${safiraMarch.variable}`}>
      <body className={mont.className}>
        <div className="relative min-h-screen w-full flex flex-col">
          <QueryProviders>{children}</QueryProviders>
        </div>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-CCLES963YV" />
    </html>
  );
}
