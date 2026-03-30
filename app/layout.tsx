import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import EbenezerFaithEducationBackground from "@/components/landing/BackgroundEbenezer";


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
        <section className="relative overflow-hidden bg-[#0b1633] text-white">


          <main className="min-h-screen bg-[#f7f4ee] text-slate-800">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}