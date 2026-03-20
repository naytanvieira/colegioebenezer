import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import RMEngineeringBackground from "@/components/landing/BackgroundEngenharia";

export const metadata: Metadata = {
  title: "RMT ENGENHARIA",
  description:
    "Desenvolvemos obras, reformas e soluções em engenharia com visão técnica, acabamento de excelência e compromisso com cada detalhe do seu projeto.",
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