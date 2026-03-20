'use client';

import React from 'react';
import { Building2, HardHat, Hammer, PlayCircle, Quote, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import RMEngineeringSeriousBackground from '@/components/landing/BackgroundEngenharia';
import EventoCard from '@/components/landing/EventoCard';

const services = [
  {
    icon: Building2,
    title: 'Projetos e Execução de Obras',
    description:
      'Soluções completas em engenharia com planejamento, acompanhamento técnico e execução com alto padrão de qualidade.',
  },
  {
    icon: HardHat,
    title: 'Reformas e Manutenções',
    description:
      'Reformas residenciais, comerciais e estruturais com foco em segurança, acabamento e eficiência em cada etapa.',
  },
  {
    icon: Hammer,
    title: 'Consultoria Técnica',
    description:
      'Apoio especializado para análise, planejamento, regularização e tomada de decisão em projetos de engenharia.',
  },
];

const testimonials = [
  {
    name: 'Carlos Henrique',
    role: 'Cliente Residencial',
    text: 'A experiência com a RM Engenharia foi excelente. A obra foi entregue com organização, qualidade e muita transparência durante todo o processo.',
  },
  {
    name: 'Fernanda Souza',
    role: 'Empresária',
    text: 'Precisávamos de agilidade e confiança para a reforma do nosso espaço comercial, e a equipe superou nossas expectativas.',
  },
  {
    name: 'Ricardo Almeida',
    role: 'Cliente Comercial',
    text: 'Atendimento profissional, execução impecável e ótimo suporte técnico. Recomendo para quem busca segurança e resultado.',
  },
];

const videos = [
  {
    title: 'Obra residencial de alto padrão',
    category: 'Residencial',
    video: '/rm.mp4',
    thumb:
      '/thumb_rm.png',
  },
  // {
  //   title: 'Reforma e modernização comercial',
  //   category: 'Comercial',
  //   video: '/rm2.mp4',
  //   thumb:
  //     'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  // },
  {
    title: 'Acompanhamento técnico de obra',
    category: 'Execução',
    video: '/rm2.mp4',
    thumb:
      '/thumb_rm2.jpg',
  },
];

export default function RMEngenhariaLandingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* <RMEngineeringSeriousBackground /> */}
      <section className="relative overflow-hidden">
        <RMEngineeringSeriousBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,95,122,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.18),transparent_30%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#0d5c75]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              Engenharia com qualidade, segurança e confiança
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              <span className="text-white">RMT</span>
              <span className="text-[#d4af37]">Engenharia</span>
              <br />
              transformando projetos em resultados reais.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Desenvolvemos obras, reformas e soluções em engenharia com visão técnica,
              acabamento de excelência e compromisso com cada detalhe do seu projeto.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d4af37] px-6 py-4 font-semibold text-[#07111f] transition hover:scale-[1.02]"
              >
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#videos"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Ver obras realizadas
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Projetos residenciais',
                'Reformas comerciais',
                'Acompanhamento técnico',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur"
                >
                  <div className="mb-2">
                    <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/20 to-[#0d5c75]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <img
                src="/profile.png"
                alt="Equipe de engenharia em obra"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-[#07111f]/80 p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-[#d4af37]">Excelência em Engenharia</p>
                <p className="mt-2 text-xl font-semibold">Planejamento sólido, execução precisa e entrega com qualidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Nossos serviços</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Soluções completas para sua obra</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Atuamos com responsabilidade técnica e foco em resultado para entregar projetos seguros, modernos e bem executados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 ring-1 ring-[#d4af37]/20">
                  <Icon className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-3 md:px-10">
          {[
            { value: '+40', label: 'Projetos entregues' },
            { value: '98%', label: 'Clientes satisfeitos' },
            { value: '+3 anos', label: 'Experiência no setor' },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#08172a] p-8 text-center">
              <p className="text-4xl font-black text-[#d4af37]">{item.value}</p>
              <p className="mt-2 text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="feedbacks" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Feedback dos clientes</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Confiança construída em cada entrega</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-9 w-9 text-[#d4af37]" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
              </div>
              <p className="leading-7 text-white/75">“{item.text}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/55">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Obras em vídeo</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Veja algumas das nossas execuções</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Uma galeria visual para apresentar vídeos de obras já realizadas e reforçar a credibilidade da marca.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Falar com a equipe
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative h-80 overflow-hidden">
                <EventoCard
                  imagem={video.thumb}
                  video={video.video}
                  titulo={video.title}
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
                    <PlayCircle className="h-10 w-10 text-white" />
                  </button>
                </div> */}
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {video.category}
                </span>
                <h3 className="mt-4 text-xl font-bold">{video.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Espaço ideal para incorporar vídeo do YouTube, Instagram ou arquivo hospedado.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS ARQUITETÔNICOS */}
      <section id="projetos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Projetos
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Projetos Arquitetônicos
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Conheça alguns dos projetos desenvolvidos e executados pela RMT Engenharia,
            com foco em qualidade, design e excelência construtiva.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Casa moderna de alto padrão',
              category: 'Residencial',
              image:
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            },
            {
              title: 'Projeto comercial contemporâneo',
              category: 'Comercial',
              image:
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
            },
            {
              title: 'Residência com conceito minimalista',
              category: 'Residencial',
              image:
                'arq.png',
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              {/* IMAGEM */}
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/30 to-transparent" />

              {/* CONTEÚDO */}
              <div className="absolute bottom-0 p-6">
                <span className="inline-block rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {project.title}
                </h3>

                {/* <button className="mt-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm font-semibold text-[#d4af37]">
                  Ver projeto →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#0b1b31] to-[#0d2840] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Vamos conversar</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
                Pronto para tirar seu projeto do papel com segurança e qualidade?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Entre em contato com a RM Engenharia e solicite um orçamento personalizado para sua obra, reforma ou consultoria técnica.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <a
                href="https://wa.me/553195640311"
                target='_blank'
                className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-5 py-4 font-semibold text-[#07111f] transition hover:scale-[1.02]"
              >
                Solicitar orçamento agora
              </a>
              <a
                href="https://wa.me/553195640311"
                target='_blank'
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
