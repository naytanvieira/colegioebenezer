import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#f8f4ec]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
              <Link href="/" className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  Portal do Pesquisador
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">
                  Pesquisa • Artigos • Produção Científica
                </span>
              </Link>

              <nav className="hidden items-center gap-8 md:flex">
                <Link
                  href="/"
                  className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
                >
                  Pagina Inicial
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
                >
                  Sobre Mim
                </Link>
                <Link
                  href="/artigos"
                  className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
                >
                  Publicações
                </Link>
                <Link
                  href="/pesquisas"
                  className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
                >
                  Pesquisas
                </Link>
                <Link
                  href="/contato"
                  className="rounded-xl border border-emerald-800/20 bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Contato
                </Link>
              </nav>

              <button className="rounded-xl border border-emerald-900/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 md:hidden">
                Menu
              </button>
            </div>
          </header>

          <main>{children}</main>

          <footer className="mt-20 border-t border-emerald-900/10 bg-[#f6efe3]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Portal do Pesquisador
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Um espaço dedicado à divulgação de artigos, pesquisas científicas
                  e produções acadêmicas com organização, identidade e relevância.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Navegação
                </h4>
                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                  <Link href="/" className="transition hover:text-emerald-800">
                    Home
                  </Link>
                  <Link href="/about" className="transition hover:text-emerald-800">
                    About Me
                  </Link>
                  <Link
                    href="/artigos"
                    className="transition hover:text-emerald-800"
                  >
                    Publicações
                  </Link>
                  <Link
                    href="/pesquisas"
                    className="transition hover:text-emerald-800"
                  >
                    Pesquisas
                  </Link>
                  <Link
                    href="/contato"
                    className="transition hover:text-emerald-800"
                  >
                    Contato
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Identidade Acadêmica
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Produção científica, artigos e reflexões organizados em uma
                  plataforma elegante, acessível e pensada para destacar a
                  trajetória intelectual do pesquisador.
                </p>
              </div>
            </div>

            <div className="border-t border-emerald-900/10 px-6 py-4 md:px-10">
              <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Portal do Pesquisador. Todos os direitos reservados.</p>
                <p className="text-emerald-700">Conhecimento • Pesquisa • Impacto</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}