'use client';

import React, { useEffect, useRef } from 'react';

type FaithSymbol = {
    x: number;
    y: number;
    scale: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
    rotation: number;
};

type LightTrail = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    progress: number;
    speed: number;
    delay: number;
};

export default function EbenezerFaithEducationBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrame = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;
        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const symbols: FaithSymbol[] = [];
        const trails: LightTrail[] = [];

        const mouse = {
            x: width / 2,
            y: height / 2,
            tx: width / 2,
            ty: height / 2,
        };

        const random = (min: number, max: number) => Math.random() * (max - min) + min;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

            createScene();
        };

        const createScene = () => {
            symbols.length = 0;
            trails.length = 0;

            const symbolCount = width < 768 ? 5 : 8;

            for (let i = 0; i < symbolCount; i++) {
                symbols.push({
                    x: random(60, width - 220),
                    y: random(80, height - 180),
                    scale: random(0.75, 1.25),
                    opacity: random(0.08, 0.18),
                    pulse: random(0, Math.PI * 2),
                    pulseSpeed: random(0.004, 0.01),
                    rotation: random(-0.08, 0.08),
                });
            }

            const lineCount = width < 768 ? 18 : 34;

            for (let i = 0; i < lineCount; i++) {
                const x1 = random(0, width);
                const y1 = random(0, height);
                const horizontal = Math.random() > 0.5;
                const length = random(70, 180);

                trails.push({
                    x1,
                    y1,
                    x2: horizontal ? x1 + length : x1,
                    y2: horizontal ? y1 : y1 + length,
                    progress: Math.random(),
                    speed: random(0.002, 0.006),
                    delay: random(0, 1),
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.tx = e.clientX;
            mouse.ty = e.clientY;
        };

        const drawBackground = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#081224');
            gradient.addColorStop(0.5, '#0d1b38');
            gradient.addColorStop(1, '#060d19');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const drawGrid = () => {
            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.025)';
            ctx.lineWidth = 1;

            const gap = 52;

            for (let x = 0; x <= width; x += gap) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y += gap) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            ctx.restore();
        };

        const drawAtmosphere = (offsetX: number, offsetY: number) => {
            const radial = ctx.createRadialGradient(
                width * 0.5 + offsetX,
                height * 0.28 + offsetY,
                20,
                width * 0.5 + offsetX,
                height * 0.28 + offsetY,
                width * 0.7
            );

            radial.addColorStop(0, 'rgba(213,160,51,0.10)');
            radial.addColorStop(0.45, 'rgba(0,198,247,0.05)');
            radial.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = radial;
            ctx.fillRect(0, 0, width, height);
        };

        const drawSoftCross = (offsetX: number, offsetY: number) => {
            const cx = width * 0.82 + offsetX * 0.4;
            const cy = height * 0.2 + offsetY * 0.4;

            ctx.save();
            ctx.strokeStyle = 'rgba(213,160,51,0.07)';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(cx, cy - 50);
            ctx.lineTo(cx, cy + 60);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(cx - 35, cy - 5);
            ctx.lineTo(cx + 35, cy - 5);
            ctx.stroke();

            ctx.restore();
        };

        const drawLightDots = () => {
            ctx.save();

            for (let i = 0; i < 54; i++) {
                const x = (i * 167) % width;
                const y = (i * 89) % height;

                ctx.beginPath();
                ctx.arc(x, y, 1.3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(213,160,51,0.09)';
                ctx.fill();
            }

            ctx.restore();
        };

        const drawOpenBook = (
            x: number,
            y: number,
            scale: number,
            opacity: number,
            pulseFactor: number,
            rotation: number
        ) => {
            const w = 120 * scale;
            const h = 72 * scale;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            ctx.strokeStyle = `rgba(213,160,51,${opacity + pulseFactor * 0.05})`;
            ctx.lineWidth = 1.25;

            // capa/base do livro
            ctx.beginPath();
            ctx.moveTo(0, 12 * scale);
            ctx.quadraticCurveTo(w * 0.25, -4 * scale, w * 0.5, 12 * scale);
            ctx.quadraticCurveTo(w * 0.75, -4 * scale, w, 12 * scale);
            ctx.stroke();

            // páginas esquerda e direita
            ctx.beginPath();
            ctx.moveTo(0, 12 * scale);
            ctx.quadraticCurveTo(w * 0.23, 28 * scale, w * 0.5, 20 * scale);
            ctx.quadraticCurveTo(w * 0.77, 28 * scale, w, 12 * scale);
            ctx.stroke();

            // centro do livro
            ctx.beginPath();
            ctx.moveTo(w * 0.5, 8 * scale);
            ctx.lineTo(w * 0.5, h * 0.72);
            ctx.stroke();

            // linhas das páginas
            ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.4})`;

            for (let i = 1; i <= 3; i++) {
                const yy = 18 * scale + i * 10 * scale;

                ctx.beginPath();
                ctx.moveTo(w * 0.1, yy);
                ctx.lineTo(w * 0.42, yy - 2 * scale);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(w * 0.58, yy - 2 * scale);
                ctx.lineTo(w * 0.9, yy);
                ctx.stroke();
            }

            // brilho inferior
            ctx.strokeStyle = `rgba(0,198,247,${opacity * 0.45})`;
            ctx.beginPath();
            ctx.moveTo(-16 * scale, h * 0.85);
            ctx.lineTo(w + 16 * scale, h * 0.85);
            ctx.stroke();

            ctx.restore();
        };

        const drawSymbols = (offsetX: number, offsetY: number) => {
            symbols.forEach((symbol, index) => {
                symbol.pulse += symbol.pulseSpeed;
                const pulseFactor = (Math.sin(symbol.pulse) + 1) / 2;

                const parallaxX = offsetX * (0.16 + index * 0.02);
                const parallaxY = offsetY * (0.16 + index * 0.02);

                drawOpenBook(
                    symbol.x + parallaxX,
                    symbol.y + parallaxY,
                    symbol.scale,
                    symbol.opacity,
                    pulseFactor,
                    symbol.rotation
                );
            });
        };

        const drawAnimatedTrails = () => {
            ctx.save();
            ctx.lineWidth = 1.3;

            trails.forEach((line) => {
                line.progress += line.speed;
                if (line.progress > 1 + line.delay) {
                    line.progress = 0;
                }

                const visibleProgress = Math.max(0, Math.min(1, line.progress - line.delay));
                if (visibleProgress <= 0) return;

                const currentX = line.x1 + (line.x2 - line.x1) * visibleProgress;
                const currentY = line.y1 + (line.y2 - line.y1) * visibleProgress;

                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(currentX, currentY);
                ctx.strokeStyle = 'rgba(213,160,51,0.12)';
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(213,160,51,0.18)';
                ctx.fill();
            });

            ctx.restore();
        };

        const drawLargeFrames = (offsetX: number, offsetY: number) => {
            const shapes = [
                { x: width * 0.06, y: height * 0.16, w: 180, h: 100 },
                { x: width * 0.72, y: height * 0.68, w: 190, h: 110 },
                { x: width * 0.76, y: height * 0.14, w: 140, h: 84 },
            ];

            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.045)';
            ctx.lineWidth = 1;

            shapes.forEach((shape) => {
                const x = shape.x + offsetX * 0.6;
                const y = shape.y + offsetY * 0.6;

                ctx.strokeRect(x, y, shape.w, shape.h);

                ctx.beginPath();
                ctx.moveTo(x, y + shape.h / 2);
                ctx.lineTo(x + shape.w, y + shape.h / 2);
                ctx.moveTo(x + shape.w / 2, y);
                ctx.lineTo(x + shape.w / 2, y + shape.h);
                ctx.stroke();
            });

            ctx.restore();
        };

        const drawTopLight = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, height * 0.5);
            gradient.addColorStop(0, 'rgba(255,255,255,0.06)');
            gradient.addColorStop(0.35, 'rgba(213,160,51,0.05)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height * 0.6);
        };

        const animate = () => {
            mouse.x += (mouse.tx - mouse.x) * 0.03;
            mouse.y += (mouse.ty - mouse.y) * 0.03;

            const offsetX = (mouse.x - width / 2) * 0.01;
            const offsetY = (mouse.y - height / 2) * 0.01;

            drawBackground();
            drawTopLight();
            drawGrid();
            drawAtmosphere(offsetX, offsetY);
            drawSoftCross(offsetX, offsetY);
            drawLightDots();
            drawLargeFrames(offsetX, offsetY);
            drawAnimatedTrails();
            drawSymbols(offsetX, offsetY);

            animationFrame = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0 opacity-90"
        />
    );
}