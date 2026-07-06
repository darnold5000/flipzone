import type { Metadata } from "next";
import { Oswald, Inter, Caveat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { site } from "@/data/site";
import { createMetadata, localBusinessSchema } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = createMetadata({
  title: "Gymnastics Plainfield Indiana | Preschool, Recreational & Team",
  description: site.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = localBusinessSchema();

  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${caveat.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-20 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
