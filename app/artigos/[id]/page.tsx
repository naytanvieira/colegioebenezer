import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Clock3,
    Tag,
    ArrowLeft,
    Share2,
    BookOpen,
    User2,
    Quote,
} from "lucide-react";

type ArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const article = {
    title: "Biogel com nanopartículas piezoelétricas, processo e uso.",
    excerpt:
        "Biogéis contendo nanopartículas piezoelétricas representam uma nova geração de biomateriais inteligentes capazes de converter estímulos mecânicos em sinais elétricos, abrindo caminhos para aplicações avançadas em engenharia de tecidos, medicina regenerativa e sistemas de liberação controlada de fármacos.",
    category: "Biologia Celular",
    date: "14 Mar 2026",
    readTime: "8 min de leitura",
    author: "Nathanael Vieira Medrado",
    authorRole: "Pesquisador e autor responsável",
    image: "/profile.jfif",
    keywords: ["Inteligência Artificial", "Educação", "Tecnologia", "Pesquisa"],
};

export default async function ArticleDetailsPage({
    params,
}: ArticlePageProps) {
    const { slug } = await params;

    return (
        <div className="min-h-screen bg-[#f8f4ec]">
            <section className="border-b border-emerald-900/10">
                <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
                    <Link
                        href="/artigos"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 transition hover:text-emerald-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar para artigos
                    </Link>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%)]" />
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 lg:py-16">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
                            <Tag className="h-4 w-4" />
                            {article.category}
                        </span>

                        <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                            <CalendarDays className="h-4 w-4" />
                            {article.date}
                        </span>

                        <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                            <Clock3 className="h-4 w-4" />
                            {article.readTime}
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                        {article.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        {article.excerpt}
                    </p>

                    <div className="mt-8 flex flex-col gap-6 rounded-[28px] border border-emerald-900/10 bg-white/80 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[#ece3d3] bg-[#f6efe3]">
                                <Image
                                    src={article.image}
                                    alt={article.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Autor</p>
                                <p className="font-semibold text-slate-900">{article.author}</p>
                                <p className="text-sm text-slate-500">{article.authorRole}</p>
                            </div>
                        </div>

                        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-900/10 bg-[#fcfaf5] px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-white">
                            <Share2 className="h-4 w-4" />
                            Compartilhar artigo
                        </button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                    <article className="space-y-8">
                        <header className="space-y-4">
                            <h1 className="text-4xl font-bold text-slate-900">
                                Biogel com Nanopartículas Piezoelétricas: Processo e Uso
                            </h1>

                            <p className="text-lg leading-8 text-slate-600">
                                Os biogéis com nanopartículas piezoelétricas representam uma área
                                emergente na interface entre biomateriais, nanotecnologia e engenharia
                                biomédica. Esses materiais combinam a biocompatibilidade e a estrutura
                                hidratada dos biogéis com propriedades piezoelétricas capazes de gerar
                                cargas elétricas quando submetidas a estímulos mecânicos.
                            </p>
                        </header>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Estrutura e Composição
                            </h2>

                            <p className="leading-8 text-slate-600">
                                A produção desses materiais envolve a dispersão controlada de
                                nanopartículas piezoelétricas — como óxido de zinco (ZnO), titanato de
                                bário (BaTiO₃) ou polímeros piezoelétricos — em uma matriz polimérica
                                que forma o biogel. Essa matriz pode ser composta por polímeros
                                naturais, como alginato, colágeno ou quitosana, ou por polímeros
                                sintéticos, como PEG e PVA.
                            </p>

                            <p className="leading-8 text-slate-600">
                                A distribuição homogênea das nanopartículas dentro da matriz é um
                                fator fundamental para garantir propriedades mecânicas, elétricas e
                                biológicas adequadas. Técnicas de mistura controlada, sonicação ou
                                funcionalização superficial das nanopartículas são frequentemente
                                utilizadas para melhorar essa dispersão.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Mecanismo Piezoelétrico
                            </h2>

                            <p className="leading-8 text-slate-600">
                                Quando o biogel é submetido a estímulos mecânicos, como compressão,
                                vibração ou deformação, as nanopartículas piezoelétricas geram
                                microcampos elétricos locais. Esses sinais elétricos podem atuar como
                                estímulos bioativos capazes de influenciar o comportamento celular,
                                incluindo proliferação, migração e diferenciação celular.
                            </p>

                            <p className="leading-8 text-slate-600">
                                Esse fenômeno permite que o material converta energia mecânica em
                                sinais elétricos biologicamente relevantes, criando um ambiente
                                dinâmico que favorece processos de regeneração tecidual.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Aplicações Biomédicas
                            </h2>

                            <p className="leading-8 text-slate-600">
                                Biogéis piezoelétricos vêm sendo amplamente investigados em áreas como
                                engenharia de tecidos, regeneração óssea, cicatrização de feridas e
                                desenvolvimento de sensores biomédicos. A geração local de estímulos
                                elétricos pode acelerar processos de regeneração e melhorar a
                                integração entre o material e o tecido biológico.
                            </p>

                            <p className="leading-8 text-slate-600">
                                Além disso, esses sistemas podem atuar como plataformas inteligentes
                                para liberação controlada de fármacos. A deformação mecânica do
                                material pode modular a liberação de agentes terapêuticos, permitindo
                                respostas adaptativas ao ambiente fisiológico.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Considerações Finais
                            </h2>

                            <p className="leading-8 text-slate-600">
                                O desenvolvimento de biogéis com nanopartículas piezoelétricas abre
                                novas possibilidades para a criação de biomateriais inteligentes
                                capazes de interagir ativamente com sistemas biológicos. Combinando
                                propriedades mecânicas, elétricas e biológicas, esses materiais
                                apresentam grande potencial para aplicações em medicina regenerativa,
                                dispositivos biomédicos avançados e terapias inovadoras.
                            </p>
                        </section>
                    </article>

                    <aside className="space-y-6">
                        <div className="rounded-[28px] border border-emerald-900/10 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Informações do artigo
                            </h3>

                            <div className="mt-5 space-y-4">
                                <div className="rounded-2xl bg-[#fcfaf5] p-4">
                                    <p className="text-sm text-slate-500">Categoria</p>
                                    <p className="mt-1 font-semibold text-slate-900">
                                        {article.category}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#fcfaf5] p-4">
                                    <p className="text-sm text-slate-500">Publicado em</p>
                                    <p className="mt-1 font-semibold text-slate-900">
                                        {article.date}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#fcfaf5] p-4">
                                    <p className="text-sm text-slate-500">Leitura estimada</p>
                                    <p className="mt-1 font-semibold text-slate-900">
                                        {article.readTime}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-emerald-900/10 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Palavras-chave
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {article.keywords.map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-emerald-900/10 bg-[#f6efe3] p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-800">
                                    <User2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Sobre o pesquisador
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        Conheça a trajetória acadêmica do autor.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/about"
                                className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:text-emerald-900"
                            >
                                Ver perfil completo
                                <ArrowLeft className="h-4 w-4 rotate-180" />
                            </Link>
                        </div>

                        <div className="rounded-[28px] border border-emerald-900/10 bg-emerald-900 p-6 text-white shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    Continue explorando
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-emerald-50/80">
                                Veja outros artigos e pesquisas publicados neste portal e aprofunde
                                sua leitura em temas relacionados.
                            </p>

                            <Link
                                href="/artigos"
                                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-emerald-900 transition hover:bg-[#f7f1e6]"
                            >
                                Ver outros artigos
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
                <div className="rounded-[32px] border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                            <Quote className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Citação em destaque
                            </p>
                            <p className="mt-3 text-xl leading-9 text-slate-700 md:text-2xl">
                                “A integração entre biomateriais e propriedades piezoelétricas permite criar sistemas capazes de transformar estímulos mecânicos do ambiente biológico em sinais elétricos que favorecem processos de regeneração e interação celular.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hidden">{slug}</div>
        </div>
    );
}