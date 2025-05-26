import { mont, safiraMarch } from "@/fonts/font";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";
import QueryProviders from "./providers";

export const metadata: Metadata = {
  title: "ICN 2025 - Senjakala: A Musical",
  description:
    "Ride along Arya's path of passion, pride and peril as a Yogyakartan theatre director. @SOTA Drama Theatre, 15/02",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mont.variable} ${safiraMarch.variable}`}>
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body className={mont.className}>
        <div className="relative min-h-screen w-full flex flex-col">
          <QueryProviders>{children}</QueryProviders>
        </div>
        <Analytics />
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
