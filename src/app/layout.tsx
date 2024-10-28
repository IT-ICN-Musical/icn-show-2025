import { mont, safiraMarch } from "@/fonts/font";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ICN 2025 Musical",
  description: "An annual Indonesian musical theatre production",
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
          {children}
        </div>
      </body>
    </html>
  );
}
