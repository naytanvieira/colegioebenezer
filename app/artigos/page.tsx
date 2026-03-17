import Link from "next/link";
import { Search, CalendarDays, Tag, ArrowRight, FileText } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "Biogel com nanopartículas piezoelétricas, processo e uso.",
        excerpt:
            "Uma análise sobre como ferramentas de inteligência artificial estão transformando métodos de ensino, aprendizagem e avaliação em diferentes contextos educacionais.",
        category: "Biologia Celular",
        date: "14 Mar 2026",
        slug: "biogel-com-nanoparticulas-piezoeletricas-processo-e-uso",
        readTime: "8 min de leitura",
    },
    // {
    //     id: 2,
    //     title: "Metodologias Científicas no Ambiente Digital",
    //     excerpt:
    //         "Reflexões sobre novas abordagens metodológicas para pesquisas acadêmicas mediadas por plataformas digitais e tecnologias emergentes.",
    //     category: "Pesquisa",
    //     date: "12 Mar 2026",
    //     slug: "metodologias-cientificas-no-ambiente-digital",
    //     readTime: "6 min de leitura",
    // },
    // {
    //     id: 3,
    //     title: "Tecnologia Assistiva e Inclusão no Ensino Superior",
    //     excerpt:
    //         "Estudo sobre acessibilidade, inclusão e o papel das tecnologias assistivas no fortalecimento da permanência acadêmica.",
    //     category: "Inclusão",
    //     date: "10 Mar 2026",
    //     slug: "tecnologia-assistiva-e-inclusao-no-ensino-superior",
    //     readTime: "7 min de leitura",
    // },
    // {
    //     id: 4,
    //     title: "Sustentabilidade e Inovação em Produção Científica",
    //     excerpt:
    //         "Discussão sobre a relação entre inovação acadêmica, responsabilidade social e sustentabilidade aplicada ao desenvolvimento científico.",
    //     category: "Sustentabilidade",
    //     date: "08 Mar 2026",
    //     slug: "sustentabilidade-e-inovacao-em-producao-cientifica",
    //     readTime: "9 min de leitura",
    // },
    {
        id: 5,
        title: "Saúde Digital e Monitoramento Remoto de Pacientes",
        excerpt:
            "Panorama sobre o avanço da saúde digital, com ênfase em sistemas de monitoramento remoto e seus impactos na prática clínica.",
        category: "Saúde",
        date: "05 Mar 2026",
        slug: "saude-digital-e-monitoramento-remoto-de-pacientes",
        readTime: "10 min de leitura",
    },
    // {
    //     id: 6,
    //     title: "Produção Acadêmica e Difusão do Conhecimento na Era da Informação",
    //     excerpt:
    //         "Uma abordagem sobre como o ambiente digital tem ampliado a circulação do conhecimento científico e a visibilidade de pesquisadores.",
    //     category: "Comunicação Científica",
    //     date: "02 Mar 2026",
    //     slug: "producao-academica-e-difusao-do-conhecimento-na-era-da-informacao",
    //     readTime: "5 min de leitura",
    // },
];

const filters = [
    "Todos",
    "Educação",
    "Pesquisa",
    "Saúde",
    "Inclusão",
    "Sustentabilidade",
];

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-[#f8f4ec]">
            <section className="relative overflow-hidden border-b border-emerald-900/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%)]" />
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
                    <span className="inline-flex rounded-full border border-emerald-700/20 bg-emerald-600/10 px-4 py-1 text-sm font-medium text-emerald-800">
                        Publicações Acadêmicas
                    </span>

                    <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                        Artigos científicos organizados com clareza, profundidade e identidade
                        autoral
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                        Explore os artigos publicados pelo pesquisador Nathanael Vieira Medrado, com foco em produção
                        científica, reflexão acadêmica e disseminação qualificada do
                        conhecimento.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
                <div className="rounded-[28px] border border-emerald-900/10 bg-white/80 p-5 shadow-sm md:p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                            <Search className="h-5 w-5" />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-slate-900">
                                Pesquise entre os artigos
                            </h2>
                            <p className="text-sm text-slate-500">
                                Busque por título, palavra-chave, tema ou área de interesse.
                            </p>
                        </div>

                        <div className="w-full lg:max-w-xl">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="text"
                                    placeholder="Ex: inteligência artificial, saúde, metodologia..."
                                    className="h-12 flex-1 rounded-xl border border-[#ddd3c0] bg-[#fffdf8] px-4 text-slate-700 outline-none transition focus:border-emerald-700"
                                />
                                <button className="h-12 rounded-xl bg-emerald-700 px-6 font-medium text-white transition hover:bg-emerald-800">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === "Todos"
                                    ? "bg-emerald-700 text-white"
                                    : "border border-emerald-900/10 bg-[#fcfaf5] text-slate-700 hover:border-emerald-700/30 hover:text-emerald-800"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Listagem
                        </span>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            Artigos publicados
                        </h2>
                    </div>

                    <p className="text-sm text-slate-500">
                        {articles.length} artigos disponíveis
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group rounded-[28px] border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                                    <Tag className="h-3.5 w-3.5" />
                                    {article.category}
                                </span>

                                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                                    <CalendarDays className="h-4 w-4" />
                                    {article.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold leading-snug text-slate-900 transition group-hover:text-emerald-800">
                                {article.title}
                            </h3>

                            <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                                {article.excerpt}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[#fcfaf5] px-3 py-1">
                                    <FileText className="h-4 w-4 text-emerald-700" />
                                    Artigo científico
                                </span>

                                <span className="rounded-full border border-emerald-900/10 bg-[#fcfaf5] px-3 py-1">
                                    {article.readTime}
                                </span>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href={`/artigos/${article.slug}`}
                                    className="inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:text-emerald-900"
                                >
                                    Ler artigo
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
                <div className="rounded-[32px] border border-emerald-900/10 bg-[#f6efe3] px-6 py-10 md:px-10">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-[24px] bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">Total de artigos</p>
                            <p className="mt-2 text-3xl font-bold text-slate-900">
                                {articles.length}
                            </p>
                        </div>

                        <div className="rounded-[24px] bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">Temas trabalhados</p>
                            <p className="mt-2 text-3xl font-bold text-slate-900">6</p>
                        </div>

                        <div className="rounded-[24px] bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">Foco editorial</p>
                            <p className="mt-2 text-xl font-semibold text-slate-900">
                                Produção científica autoral
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}