'use client';

import { useEffect, useState } from 'react';
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

/* ================= DATA (INALTERADO) ================= */

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
];

const stats = [
  { value: 'Creche ao 9º ano', label: 'Ensino completo em todas as fases' },
  { value: 'Base cristã', label: 'Educação guiada por princípios' },
  { value: 'Ambiente seguro', label: 'Cuidado e acolhimento diário' },
  { value: 'Família + Escola', label: 'Parceria no desenvolvimento' },
];

/* ================= COMPONENT ================= */

export default function ColegioEbenezerLandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const bg = "bg-white dark:bg-[#0b1633]";
  const text = "text-black dark:text-white";
  const muted = "text-slate-600 dark:text-white/70";

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`transition-colors duration-300 ${bg} ${text}`}>

        {/* TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed right-6 top-6 z-50 rounded-full bg-[#d5a033] px-4 py-2 text-sm font-bold text-[#0b1633]"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-white dark:bg-[#0b1633] text-black dark:text-white">
          <EbenezerFaithEducationBackground />

          <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">

            <header className="flex items-center justify-between rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d5a033] to-[#f0d28a]">
                  <School className="h-5 w-5 text-[#0b1633]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#d5a033] uppercase">Colégio</p>
                  <h1 className="text-lg font-bold">Ebenezer</h1>
                </div>
              </div>

              <nav className="hidden lg:flex gap-6 text-sm text-black dark:text-white/80">
                <a href="#sobre">Sobre</a>
                <a href="#etapas">Etapas</a>
                <a href="#diferenciais">Diferenciais</a>
                <a href="#depoimentos">Depoimentos</a>
              </nav>

              <a className="rounded-full bg-[#d5a033] px-5 py-3 text-sm font-semibold text-[#0b1633]">
                Agendar visita
              </a>
            </header>

            <div className="grid lg:grid-cols-2 gap-14 py-14">
              <h2 className="text-4xl font-black">
                Um lugar seguro para seu filho crescer
              </h2>
            </div>
          </div>
        </section>

        {/* ================= SOBRE ================= */}
        <section id="sobre" className={`px-6 py-20 ${bg} ${text}`}>
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold">Sobre o Colégio Ebenezer</h3>
            <p className={muted}>
              Sabemos que escolher uma escola é entregar um dos maiores tesouros da família...
            </p>
          </div>
        </section>

        {/* ================= ETAPAS ================= */}
        <section className={`py-20 ${bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold">Etapas</h3>

            <div className="grid lg:grid-cols-3 gap-6 mt-10">
              {etapas.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5">
                    <Icon />
                    <h4 className="font-bold mt-4">{item.title}</h4>
                    <p className={muted}>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= DEMAIS SECTIONS ================= */}
        <section className={`py-20 ${bg} ${text}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold">Diferenciais</h3>
          </div>
        </section>

        <section className={`py-20 ${bg} ${text}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold">Depoimentos</h3>
          </div>
        </section>

        <section className={`py-20 ${bg} ${text}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold">Contato</h3>
          </div>
        </section>

      </div>
    </div>
  );
}