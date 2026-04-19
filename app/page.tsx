'use client';

import EbenezerFaithEducationBackground from '@/components/landing/BackgroundEbenezer';
import { motion } from 'framer-motion';
import {
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
  GraduationCap,
  Users,
  School,
  CheckCircle2,
  Star,
  Baby,
  PencilRuler,
  Compass,
  Quote,
  Cross,
} from 'lucide-react';

const etapas = [
  {
    icon: Baby,
    title: 'Educação Infantil',
    subtitle: 'Creche e Pré-escola',
    description:
      'Um ambiente acolhedor, seguro e cheio de carinho para os primeiros passos do desenvolvimento infantil, com base em princípios cristãos e aprendizado lúdico.',
  },
  {
    icon: PencilRuler,
    title: 'Fundamental I',
    subtitle: '1º ao 5º ano',
    description:
      'Construção de uma base sólida em leitura, escrita, matemática e convivência, fortalecendo o caráter, o respeito e o amor ao próximo.',
  },
  {
    icon: Compass,
    title: 'Fundamental II',
    subtitle: '6º ao 9º ano',
    description:
      'Preparação acadêmica e emocional para os próximos desafios, desenvolvendo autonomia, responsabilidade e princípios para a vida.',
  },
];

const diferenciais = [
  'Educação com base cristã e princípios evangélicos',
  'Formação acadêmica com desenvolvimento de caráter',
  'Ambiente acolhedor, seguro e familiar',
  'Acompanhamento próximo da jornada do aluno',
  'Ensino da creche ao 9º ano em uma única instituição',
  'Comunicação ativa com as famílias',
];

const pilares = [
  {
    icon: BookOpen,
    title: 'Excelência acadêmica',
    description:
      'Conteúdo de qualidade, acompanhamento pedagógico e atenção ao desenvolvimento de cada aluno.',
  },
  {
    icon: HeartHandshake,
    title: 'Formação com amor',
    description:
      'Cuidado, acolhimento e proximidade para que cada criança se sinta segura e valorizada.',
  },
  {
    icon: Cross,
    title: 'Princípios cristãos',
    description:
      'Uma educação fundamentada na fé, no respeito, na ética e em valores que acompanham o aluno por toda a vida.',
  },
];

const depoimentos = [
  {
    name: 'Rosana',
    text: 'Sou Rosana mãe da Ana Clara, ela é muito feliz no Ebenezer. O amor e cuidado que ela encontrou através dos professores e diretores do colégio fazem dela todos os dias uma pessoa melhor, pois princípios bíblicos fazem toda a diferença na construção da personalidade de uma criança, sou muito grata!',
    image: "/dep.jpeg"
  },
  // {
  //   name: 'Família Santos',
  //   text: 'É uma escola que realmente cuida. O ambiente é acolhedor, a equipe é atenciosa e sentimos que nossa filha está sendo preparada para a vida.',
  // },
  // {
  //   name: 'Família Rocha',
  //   text: 'Encontramos no Colégio Ebenezer o equilíbrio que buscávamos: ensino de qualidade, disciplina, carinho e princípios cristãos bem presentes no dia a dia.',
  // },
];

const stats = [
  { value: 'Creche ao 9º ano', label: 'Ensino completo em todas as fases' },
  { value: 'Base cristã', label: 'Educação guiada por princípios' },
  { value: 'Ambiente seguro', label: 'Cuidado e acolhimento diário' },
  { value: 'Família + Escola', label: 'Parceria no desenvolvimento' },
];

export default function ColegioEbenezerLandingPage() {
  return (
    <>

      <section className="relative overflow-hidden bg-[#0b1633] text-white">
        <EbenezerFaithEducationBackground />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(213,160,51,0.18),transparent_30%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-[#d5a033]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d5a033] to-[#f0d28a] shadow-lg shadow-[#d5a033]/20">
                <School className="h-5 w-5 text-[#0b1633]" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] text-[#f0d28a] uppercase">Colégio</p>
                <h1 className="text-lg font-bold">Ebenezer</h1>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
              <a href="#sobre" className="transition hover:text-white">Sobre</a>
              <a href="#etapas" className="transition hover:text-white">Etapas</a>
              <a href="#diferenciais" className="transition hover:text-white">Diferenciais</a>
              <a href="#depoimentos" className="transition hover:text-white">Depoimentos</a>
            </nav>

            <a
              href="https://wa.me/5531920013319"
              className="hidden rounded-full bg-[#d5a033] px-5 py-3 text-sm font-semibold text-[#0b1633] transition hover:scale-[1.02] lg:inline-flex"
            >
              Agendar visita
            </a>
          </header>

          <div className="grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5a033]/30 bg-[#d5a033]/10 px-4 py-2 text-sm text-[#f0d28a]"
              >
                <Sparkles className="h-4 w-4" />
                Educação com propósito, amor e princípios cristãos
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              >
                Um lugar seguro para o seu filho <span className="text-[#f0d28a]">crescer, aprender e viver valores para toda a vida</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/78"
              >
                No <strong>Colégio Ebenezer</strong>, acompanhamos cada fase da infância à pré-adolescência com ensino de qualidade, acolhimento verdadeiro e uma base cristã que fortalece caráter, respeito e propósito.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="https://wa.me/5531920013319"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d5a033] px-6 py-4 font-semibold text-[#0b1633] shadow-xl shadow-[#d5a033]/20 transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Agendar visita
                </a>
              </motion.div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.06 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                  >
                    <p className="text-lg font-extrabold text-[#f0d28a]">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-white/75">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#d5a033]/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                    alt="Alunos em ambiente escolar acolhedor"
                    className="h-[560px] w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/20 bg-[#0b1633]/80 p-5 text-white backdrop-blur-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d5a033] text-[#0b1633]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">Educar com excelência, ensinar com amor e formar com princípios</p>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        Da creche ao 9º ano, uma jornada completa de aprendizado em parceria com a família.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_80px_rgba(11,22,51,0.08)] ring-1 ring-slate-200">
            <div className="mb-5 inline-flex rounded-full bg-[#0b1633]/5 px-4 py-2 text-sm font-semibold text-[#0b1633]">
              Sobre o Colégio Ebenezer
            </div>
            <h3 className="text-3xl font-black leading-tight text-[#0b1633] sm:text-4xl">
              Uma escola que acolhe, ensina e caminha ao lado da sua família
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Sabemos que escolher uma escola é entregar um dos maiores tesouros da família. Por isso, o <strong>Colégio Ebenezer</strong> une ensino de qualidade, ambiente seguro e uma formação baseada em princípios cristãos para cuidar do desenvolvimento acadêmico, emocional e espiritual do seu filho.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Aqui, cada criança é vista com atenção, carinho e propósito. Mais do que ensinar conteúdos, queremos participar da formação de pessoas íntegras, preparadas para o futuro e guiadas por valores que permanecem por toda a vida.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {pilares.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[1.8rem] bg-gradient-to-b from-white to-[#fcfaf6] p-6 shadow-[0_20px_80px_rgba(11,22,51,0.06)] ring-1 ring-slate-200"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1633] text-[#f0d28a] shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-[#0b1633]">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="etapas" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-[#d5a033]/10 px-4 py-2 text-sm font-semibold text-[#9d761a]">
              Uma jornada completa
            </div>
            <h3 className="mt-5 text-3xl font-black text-[#0b1633] sm:text-4xl">
              Cada fase do seu filho cuidada com atenção, propósito e desenvolvimento contínuo
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Da descoberta da infância aos desafios do 9º ano, oferecemos uma caminhada estruturada para que cada aluno cresça com segurança, aprendizado e valores sólidos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;
              return (
                <motion.div
                  key={etapa.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-7 shadow-[0_18px_70px_rgba(11,22,51,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(11,22,51,0.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1633] text-[#f0d28a] transition group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#b18421]">
                    {etapa.subtitle}
                  </p>
                  <h4 className="mt-2 text-2xl font-bold text-[#0b1633]">{etapa.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{etapa.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-[#0b1633]/5 px-4 py-2 text-sm font-semibold text-[#0b1633]">
              Por que escolher o Colégio Ebenezer?
            </div>
            <h3 className="mt-5 text-3xl font-black text-[#0b1633] sm:text-4xl">
              Porque educação de verdade também forma o coração, o caráter e os valores
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Nossa proposta vai além da sala de aula. Queremos que seu filho aprenda com qualidade, conviva com respeito, desenvolva responsabilidade e cresça em um ambiente onde a fé e o amor ao próximo fazem parte do dia a dia.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {diferenciais.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-[1.4rem] bg-white p-4 shadow-[0_14px_50px_rgba(11,22,51,0.06)] ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b18421]" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1633] p-8 text-white shadow-[0_24px_100px_rgba(11,22,51,0.16)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d5a033]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d5a033] text-[#0b1633]">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h4 className="mt-6 text-2xl font-black leading-tight text-white sm:text-3xl">
                “Instrua a criança no caminho em que deve andar...”
              </h4>
              <p className="mt-4 text-base leading-8 text-white/78">
                No Colégio Ebenezer, acreditamos que cada fase da infância e da adolescência deve ser conduzida com sabedoria, direção e amor. É por isso que nossa educação busca caminhar lado a lado com a família.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm leading-7 text-white/85">
                  <strong>Provérbios 22:6</strong> — “Instrua a criança no caminho em que deve andar, e até quando envelhecer não se desviará dele.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-[#d5a033]/10 px-4 py-2 text-sm font-semibold text-[#9d761a]">
              Segurança, cuidado e parceria
            </div>
            <h3 className="mt-5 text-3xl font-black text-[#0b1633] sm:text-4xl">
              Seu filho merece uma escola onde ele seja visto, cuidado e incentivado todos os dias
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Ambiente seguro',
                description:
                  'Uma rotina estruturada para que as famílias sintam confiança ao deixar seus filhos em nosso cuidado.',
              },
              {
                icon: Users,
                title: 'Equipe próxima das famílias',
                description:
                  'Valorizamos o diálogo com os pais para acompanhar a evolução e as necessidades de cada aluno.',
              },
              {
                icon: HeartHandshake,
                title: 'Acolhimento verdadeiro',
                description:
                  'Cada criança é recebida com atenção, carinho e respeito, em um ambiente familiar e amoroso.',
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[1.8rem] bg-white p-7 shadow-[0_18px_60px_rgba(11,22,51,0.06)] ring-1 ring-slate-200"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1633] text-[#f0d28a]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-[#0b1633]">{card.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[#0b1633]/5 px-4 py-2 text-sm font-semibold text-[#0b1633]">
            O que as famílias sentem
          </div>
          <h3 className="mt-5 text-3xl font-black text-[#0b1633] sm:text-4xl">
            Quando a escola compartilha os mesmos valores da família, tudo faz mais sentido
          </h3>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {depoimentos.map((depoimento, index) => (
            <motion.div
  key={depoimento.name}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.45, delay: index * 0.06 }}
  className="rounded-[2rem] bg-white p-7 shadow-[0_18px_70px_rgba(11,22,51,0.06)] ring-1 ring-slate-200"
>
  {/* HEADER */}
  <div className="flex items-center justify-between">
    <Quote className="h-9 w-9 text-[#d5a033]" />

    <div className="flex gap-1 text-[#d5a033]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  </div>

  {/* TEXTO */}
  <p className="mt-6 text-sm leading-8 text-slate-600">
    {depoimento.text}
  </p>

  {/* FOOTER COM IMAGEM */}
  <div className="mt-6 flex items-center gap-4">
    <img
      src={depoimento.image}
      alt={depoimento.name}
      className="w-[80px] h-[80px] rounded-full object-cover shadow-md"
    />

    <div>
      <p className="text-base font-bold text-[#0b1633]">
        {depoimento.name}
      </p>
      <p className="text-sm text-slate-500">
        
      </p>
    </div>
  </div>
</motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#0b1633] p-8 text-white shadow-[0_30px_110px_rgba(11,22,51,0.18)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f0d28a]">
                  Matrículas abertas
                </div>
                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Agende uma visita e conheça de perto o ambiente que pode fazer parte da história do seu filho
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                  Venha conhecer a estrutura, conversar com nossa equipe e descobrir como o Colégio Ebenezer pode caminhar junto com a sua família na formação do seu filho.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://wa.me/5531920013319"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d5a033] px-6 py-4 font-semibold text-[#0b1633] transition hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Quero falar no WhatsApp
                  </a>
                  <a
                    href="tel:+5531920013319"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" />
                    Ligar agora
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="text-2xl font-bold">Informações rápidas</h4>
                <div className="mt-6 space-y-4 text-white/80">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#f0d28a]">Atendimento</p>
                    <p className="mt-2 text-sm">Segunda a sexta, de 07h às 18h</p>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#f0d28a]">WhatsApp</p>
                    <p className="mt-2 text-sm">(31) 9 3316-9230</p>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#f0d28a]">Endereço</p>
                    <p className="mt-2 text-sm">R. Teodoro Marquês, 65 - Várzea, Lagoa Santa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
