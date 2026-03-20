"use client";

import { useRef, useState } from "react";

type Props = {
    imagem: string;
    video: string;
    titulo: string;
};

export default function EventoCard({ imagem, video, titulo }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="relative rounded-2xl overflow-hidden h-80 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* IMAGEM */}
            {!hovered && (
                <img
                    src={imagem}
                    alt={titulo}
                    className="w-full h-full object-cover"
                />
            )}

            {/* VÍDEO */}
            <video
                ref={videoRef}
                src={video}

                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}