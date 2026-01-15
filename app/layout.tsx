import "./globals.css";
import { Inter } from "next/font/google";
import { seoMeta } from "../components/seo/seoMeta";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = seoMeta({
  title: "Enterprise Cloud & Automation Consulting",
  description:
    "Enterprise consulting for cloud, automation, DevOps, and security.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-white text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
