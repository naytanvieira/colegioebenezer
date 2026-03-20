"use client";

import { Calendar, MapPin } from "lucide-react";
import EventoCard from "./EventoCard";



const eventos = [
    {
        titulo: "Quarta da Moda de Viola",
        data: "Toda Quarta Feira, 20h",
        descricao: "Música ao vivo, drinks especiais e muita energia boa.",
        imagem: "/thumb_modao.jpg",
        video: '/modao_quarta.mp4',
    },
    {
        titulo: "Quinta de Pagode",
        data: "Toda Quinta, 20h",
        descricao: "Aquele clima de pagode maravilhoso te esperando",
        imagem: "/thumb_quinta.jpg",
        video: '/pagode.mp4',
    },
    {
        titulo: "Feijoada da Lili",
        data: "Todo Sábado, 12:00",
        descricao: "Promoções especiais em drinks e cervejas.",
        imagem: "/thumb_feijoada.jpg",
        video: '/feijoada_lilica.mp4',
    },
];

export default function EventosSection() {
    return (
        <section className=" text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="rounded-2xl mt-3 border border-white/20 bg-white/10 p-4 text-sm backdrop-blur">
                    <h2 className="text-4xl font-bold mb-4">
                        Nossos Eventos
                    </h2>

                    {/* <p className="text-zinc-400 mb-12">
                        Música, energia e experiências únicas todas as semanas.
                    </p> */}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {eventos.map((evento, index) => (
                        <div
                            key={index}
                            className="rounded-2xl mt-3 border border-white/20 bg-white/10 p-4 text-sm backdrop-blur overflow-hidden shadow-lg hover:scale-105 transition"
                        >
                            <EventoCard
                                imagem={evento.imagem}
                                video={evento.video}
                                titulo={evento.titulo}
                            />

                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-2">
                                    {evento.titulo}
                                </h3>

                                <p className="text-sm text-zinc-400 flex items-center gap-2 mb-2">
                                    <Calendar size={16} /> {evento.data}
                                </p>

                                <p className="text-zinc-300 text-sm mb-4">
                                    {evento.descricao}
                                </p>

                                <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition">
                                    Reservar Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA principal */}
                <div className="mt-12">
                    <a
                        href="https://wa.me/SEUNUMERO"
                        target="_blank"
                        className="bg-green-500 px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-400 transition"
                    >
                        Garanta sua mesa agora 🍻
                    </a>
                </div>
            </div>
        </section>
    );
}