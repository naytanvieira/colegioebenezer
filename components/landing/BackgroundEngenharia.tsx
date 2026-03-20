'use client';

import React, { useEffect, useRef } from 'react';

type BlueprintHouse = {
    x: number;
    y: number;
    scale: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
};

type BuildLine = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    progress: number;
    speed: number;
    delay: number;
};

export default function RMEngineeringSeriousBackground() {
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

        const houses: BlueprintHouse[] = [];
        const buildLines: BuildLine[] = [];

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
            houses.length = 0;
            buildLines.length = 0;

            const houseCount = width < 768 ? 4 : 7;

            for (let i = 0; i < houseCount; i++) {
                houses.push({
                    x: random(60, width - 260),
                    y: random(100, height - 220),
                    scale: random(0.8, 1.35),
                    opacity: random(0.12, 0.24),
                    pulse: random(0, Math.PI * 2),
                    pulseSpeed: random(0.004, 0.01),
                });
            }

            const lineCount = width < 768 ? 18 : 36;

            for (let i = 0; i < lineCount; i++) {
                const x1 = random(0, width);
                const y1 = random(0, height);
                const horizontal = Math.random() > 0.45;

                const length = random(60, 180);

                buildLines.push({
                    x1,
                    y1,
                    x2: horizontal ? x1 + length : x1,
                    y2: horizontal ? y1 : y1 + length,
                    progress: Math.random(),
                    speed: random(0.0025, 0.008),
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
            gradient.addColorStop(0, '#07111f');
            gradient.addColorStop(0.5, '#0b1728');
            gradient.addColorStop(1, '#050c15');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const drawGrid = () => {
            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.025)';
            ctx.lineWidth = 1;

            const gap = 48;

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
                height * 0.35 + offsetY,
                20,
                width * 0.5 + offsetX,
                height * 0.35 + offsetY,
                width * 0.65
            );

            radial.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
            radial.addColorStop(0.45, 'rgba(38, 97, 156, 0.05)');
            radial.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = radial;
            ctx.fillRect(0, 0, width, height);
        };

        const drawBlueprintDots = () => {
            ctx.save();

            for (let i = 0; i < 42; i++) {
                const x = ((i * 173) % width);
                const y = ((i * 97) % height);

                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(212, 175, 55, 0.08)';
                ctx.fill();
            }

            ctx.restore();
        };

        const drawHouseWireframe = (
            x: number,
            y: number,
            scale: number,
            opacity: number,
            pulseFactor: number
        ) => {
            const w = 120 * scale;
            const h = 78 * scale;
            const roofH = 42 * scale;

            ctx.save();
            ctx.translate(x, y);

            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity + pulseFactor * 0.05})`;
            ctx.lineWidth = 1.2;

            // base
            ctx.strokeRect(0, roofH, w, h);

            // telhado
            ctx.beginPath();
            ctx.moveTo(-8 * scale, roofH);
            ctx.lineTo(w / 2, 0);
            ctx.lineTo(w + 8 * scale, roofH);
            ctx.stroke();

            // linha do telhado
            ctx.beginPath();
            ctx.moveTo(w / 2, 0);
            ctx.lineTo(w / 2, roofH - 6 * scale);
            ctx.stroke();

            // porta
            ctx.strokeRect(w * 0.44, roofH + h * 0.42, 18 * scale, 34 * scale);

            // janelas
            ctx.strokeRect(w * 0.18, roofH + h * 0.28, 18 * scale, 14 * scale);
            ctx.strokeRect(w * 0.66, roofH + h * 0.28, 18 * scale, 14 * scale);

            // divisões internas
            ctx.beginPath();
            ctx.moveTo(0, roofH + h * 0.5);
            ctx.lineTo(w, roofH + h * 0.5);
            ctx.moveTo(w * 0.32, roofH);
            ctx.lineTo(w * 0.32, roofH + h);
            ctx.moveTo(w * 0.68, roofH);
            ctx.lineTo(w * 0.68, roofH + h);
            ctx.stroke();

            // andaime lateral
            ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.55})`;
            ctx.beginPath();
            ctx.moveTo(-24 * scale, roofH + h);
            ctx.lineTo(-24 * scale, roofH - 10 * scale);
            ctx.lineTo(-8 * scale, roofH - 10 * scale);
            ctx.lineTo(-8 * scale, roofH + h);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-24 * scale, roofH + h * 0.25);
            ctx.lineTo(-8 * scale, roofH + h * 0.25);
            ctx.moveTo(-24 * scale, roofH + h * 0.55);
            ctx.lineTo(-8 * scale, roofH + h * 0.55);
            ctx.stroke();

            // chão técnico
            ctx.strokeStyle = `rgba(38, 97, 156, ${opacity * 0.7})`;
            ctx.beginPath();
            ctx.moveTo(-40 * scale, roofH + h + 14 * scale);
            ctx.lineTo(w + 40 * scale, roofH + h + 14 * scale);
            ctx.stroke();

            ctx.restore();
        };

        const drawHouses = (offsetX: number, offsetY: number) => {
            houses.forEach((house, index) => {
                house.pulse += house.pulseSpeed;
                const pulseFactor = (Math.sin(house.pulse) + 1) / 2;

                const parallaxX = offsetX * (0.18 + index * 0.02);
                const parallaxY = offsetY * (0.18 + index * 0.02);

                drawHouseWireframe(
                    house.x + parallaxX,
                    house.y + parallaxY,
                    house.scale,
                    house.opacity,
                    pulseFactor
                );
            });
        };

        const drawAnimatedBuildLines = () => {
            ctx.save();
            ctx.lineWidth = 1.4;

            buildLines.forEach((line) => {
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
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.13)';
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(212, 175, 55, 0.18)';
                ctx.fill();
            });

            ctx.restore();
        };

        const drawLargeBlueprintShapes = (offsetX: number, offsetY: number) => {
            const shapes = [
                { x: width * 0.08, y: height * 0.14, w: 180, h: 110 },
                { x: width * 0.74, y: height * 0.12, w: 150, h: 90 },
                { x: width * 0.68, y: height * 0.72, w: 170, h: 110 },
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

        const animate = () => {
            mouse.x += (mouse.tx - mouse.x) * 0.03;
            mouse.y += (mouse.ty - mouse.y) * 0.03;

            const offsetX = (mouse.x - width / 2) * 0.01;
            const offsetY = (mouse.y - height / 2) * 0.01;

            drawBackground();
            drawGrid();
            drawAtmosphere(offsetX, offsetY);
            drawBlueprintDots();
            drawLargeBlueprintShapes(offsetX, offsetY);
            drawAnimatedBuildLines();
            drawHouses(offsetX, offsetY);

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