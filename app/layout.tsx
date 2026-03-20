import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import RMEngineeringBackground from "@/components/landing/BackgroundEngenharia";

export const metadata: Metadata = {
  title: "Portal do Pesquisador",
  description:
    "Portal acadêmico dedicado à publicação de pesquisas científicas, artigos e produções intelectuais de um pesquisador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f8f4ec] text-slate-800 antialiased">

        <div className="relative z-10">

          {children}
        </div>
      </body>
    </html>
  );
}