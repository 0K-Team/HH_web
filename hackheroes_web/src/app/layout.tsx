import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import React from "react";

export const metadata: Metadata = {
  title: "EcoHero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
