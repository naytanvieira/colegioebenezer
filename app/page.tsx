import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Microscope,
  GraduationCap,
  FileText,
  Leaf,
  ArrowRight,
} from "lucide-react";

const featuredPublications = [
  {
    title: "Impacto da Inteligência Artificial na Educação",
    description:
      "Uma análise sobre como ferramentas de IA estão transformando métodos de ensino e aprendizagem.",
    type: "Artigo",
    slug: "/artigos/impacto-da-ia-na-educacao",
  },
  {
    title: "Avanços em Pesquisas sobre Saúde Digital",
    description:
      "Estudo recente sobre tecnologias aplicadas ao acompanhamento remoto de pacientes.",
    type: "Pesquisa",
    slug: "/pesquisas/saude-digital",
  },
  {
    title: "Sustentabilidade e Inovação Científica",
    description:
      "Reflexões sobre soluções inovadoras voltadas para impacto ambiental e desenvolvimento sustentável.",
    type: "Destaque",
    slug: "/artigos/sustentabilidade-e-inovacao",
  },
];

const recentPublications = [
  {
    title: "Metodologias Científicas no Ambiente Digital",
    date: "14 Mar 2026",
    type: "Artigo",
    slug: "/artigos/metodologias-cientificas-digitais",
  },
  {
    title: "Uso de Dados na Produção Acadêmica",
    date: "12 Mar 2026",
    type: "Pesquisa",
    slug: "/pesquisas/uso-de-dados-producao-academica",
  },
  {
    title: "Tecnologia Assistiva e Inclusão",
    date: "10 Mar 2026",
    type: "Artigo",
    slug: "/artigos/tecnologia-assistiva-e-inclusao",
  },
];

const categories = [
  { title: "Tecnologia", icon: Microscope },
  { title: "Educação", icon: GraduationCap },
  { title: "Artigos", icon: FileText },
  { title: "Pesquisas", icon: BookOpen },
  { title: "Sustentabilidade", icon: Leaf },
];

export default function HomePage() {
  return (
    <div className="bg-[#f8f4ec] text-slate-800">
      <section className="relative overflow-hidden border-b border-emerald-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.08),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-emerald-700/20 bg-emerald-600/10 px-4 py-1 text-sm font-medium text-emerald-800">
              Portal Acadêmico do Pesquisador
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Publicações científicas, artigos e reflexões de pesquisa em um só lugar
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Um espaço dedicado à divulgação da produção acadêmica de um único
              pesquisador, reunindo artigos, estudos, investigações e conteúdos
              científicos com organização, profundidade e identidade própria.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/artigos"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Ver publicações
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-800/20 bg-white/70 px-6 py-3 font-semibold text-emerald-900 transition hover:bg-white"
              >
                Conhecer pesquisador
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-emerald-700/10 blur-2xl" />

            <div className="rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src="/profile.jfif"
                  alt="Pesquisador"
                  width={900}
                  height={700}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-3xl border border-emerald-900/10 bg-white/80 p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
              <Search className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-slate-900">
                Pesquise por tema, título ou palavra-chave
              </h2>
              <p className="text-sm text-slate-500">
                Encontre rapidamente artigos, pesquisas e publicações do pesquisador.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Ex: inteligência artificial, educação, saúde digital..."
              className="h-12 flex-1 rounded-xl border border-[#ddd3c0] bg-[#fffdf8] px-4 outline-none transition focus:border-emerald-700"
            />
            <button className="h-12 rounded-xl bg-emerald-700 px-6 font-medium text-white transition hover:bg-emerald-800">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Sobre o pesquisador
          </h2>
        </div>

        <div className="grid gap-8 rounded-[32px] border border-emerald-900/10 bg-white/75 p-6 shadow-sm md:grid-cols-[320px_1fr] md:p-8">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-[#ece3d3] bg-[#f6efe3]">
              <Image
                src="/pesquisador.jfif"
                alt="Foto do pesquisador"
                width={700}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-slate-900">
              Nathanael Vieira Medrado
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Este portal apresenta a trajetória, as publicações e as principais
              contribuições acadêmicas do pesquisador, reunindo em um só ambiente
              artigos científicos, reflexões teóricas, estudos aplicados e materiais
              de relevância para sua área de atuação.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Com foco em produção intelectual de qualidade, a proposta é oferecer
              acesso organizado ao conhecimento desenvolvido ao longo da carreira,
              fortalecendo a disseminação científica e ampliando a visibilidade das
              pesquisas realizadas.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-900/10 bg-[#fcfaf5] p-4">
                <p className="text-sm text-slate-500">Área principal</p>
                <p className="mt-1 font-semibold text-slate-900">Ciência / Pesquisa</p>
              </div>

              <div className="rounded-2xl border border-emerald-900/10 bg-[#fcfaf5] p-4">
                <p className="text-sm text-slate-500">Publicações</p>
                <p className="mt-1 font-semibold text-slate-900">+25 trabalhos</p>
              </div>

              <div className="rounded-2xl border border-emerald-900/10 bg-[#fcfaf5] p-4">
                <p className="text-sm text-slate-500">Foco</p>
                <p className="mt-1 font-semibold text-slate-900">Produção científica</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:text-emerald-900"
              >
                Ler biografia completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Destaques
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Publicações em destaque
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPublications.map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="group rounded-[26px] border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                {item.type}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900 transition group-hover:text-emerald-800">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Áreas
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Temas e áreas de interesse
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                className="rounded-[24px] border border-emerald-900/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-slate-900">{category.title}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Recentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Publicações recentes
          </h2>
        </div>

        <div className="space-y-4">
          {recentPublications.map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="flex flex-col gap-4 rounded-[24px] border border-emerald-900/10 bg-white p-5 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div>
                <span className="text-sm font-medium text-emerald-700">
                  {item.type}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <span className="text-sm text-slate-500">{item.date}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-[32px] border border-emerald-900/10 bg-emerald-900 px-6 py-12 text-center text-white md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore a produção científica deste pesquisador
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-50/80">
            Acesse artigos, pesquisas e materiais publicados em um ambiente
            pensado para valorizar conhecimento, trajetória acadêmica e impacto intelectual.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/artigos"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-[#f7f1e6]"
            >
              Ver artigos
            </Link>

            <Link
              href="/pesquisas"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Ver pesquisas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}