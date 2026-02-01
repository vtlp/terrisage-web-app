import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ScrollToHash } from "@/components/layout/ScrollToHash";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Terrisage",
  description: "Mobile-first CRM for real estate sales and property management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Providers>
          <Suspense fallback={null}>
            <ScrollToHash />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
