import "./globals.css";
import { Inter, Lexend_Deca } from "next/font/google";
import { seoMeta } from "../components/seo/seoMeta";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-lexend-deca",
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
        className={`${inter.variable} ${lexendDeca.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
