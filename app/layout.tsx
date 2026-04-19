import type { Metadata } from "next";
import Link from "next/link";
import "./global.css";
import EbenezerFaithEducationBackground from "@/components/landing/BackgroundEbenezer";


export const metadata: Metadata = {
  title: "Colegio Ebenezer",
  description:
    "Um ambiente acolhedor, seguro e cheio de carinho para os primeiros passos do desenvolvimento infantil, com base em princípios cristãos e aprendizado lúdico.",
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