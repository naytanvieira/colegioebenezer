'use client';

import React, { useEffect, useRef } from 'react';

type NodePoint = {
    x: number;
    y: number;
    radius: number;
    pulse: number;
    pulseSpeed: number;
};

type BeerRoute = {
    from: NodePoint;
    to: NodePoint;
    control: { x: number; y: number };
    progress: number;
    speed: number;
    direction: 1 | -1;
    lineOpacity: number;
};

export default function BeerMugsBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const nodes: NodePoint[] = [];
        const routes: BeerRoute[] = [];

        const mouse = {
            x: width / 2,
            y: height / 2,
            targetX: width / 2,
            targetY: height / 2,
        };

        const random = (min: number, max: number) => Math.random() * (max - min) + min;

        const distance = (a: NodePoint, b: NodePoint) => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        };

        const getQuadraticPoint = (
            p0: { x: number; y: number },
            p1: { x: number; y: number },
            p2: { x: number; y: number },
            t: number
        ) => {
            const x =
                (1 - t) * (1 - t) * p0.x +
                2 * (1 - t) * t * p1.x +
                t * t * p2.x;

            const y =
                (1 - t) * (1 - t) * p0.y +
                2 * (1 - t) * t * p1.y +
                t * t * p2.y;

            return { x, y };
        };

        const getQuadraticAngle = (
            p0: { x: number; y: number },
            p1: { x: number; y: number },
            p2: { x: number; y: number },
            t: number
        ) => {
            const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
            const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
            return Math.atan2(dy, dx);
        };

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
            nodes.length = 0;
            routes.length = 0;

            const numberOfNodes = width < 768 ? 10 : 16;

            for (let i = 0; i < numberOfNodes; i++) {
                nodes.push({
                    x: random(60, width - 60),
                    y: random(80, height - 80),
                    radius: random(2.4, 4.6),
                    pulse: random(0, Math.PI * 2),
                    pulseSpeed: random(0.01, 0.025),
                });
            }

            for (let i = 0; i < nodes.length; i++) {
                const current = nodes[i];

                const nearest = [...nodes]
                    .filter((n) => n !== current)
                    .sort((a, b) => distance(current, a) - distance(current, b))
                    .slice(0, 2);

                nearest.forEach((target) => {
                    const alreadyExists = routes.some(
                        (route) =>
                            (route.from === current && route.to === target) ||
                            (route.from === target && route.to === current)
                    );

                    if (alreadyExists) return;

                    const midX = (current.x + target.x) / 2;
                    const midY = (current.y + target.y) / 2;

                    routes.push({
                        from: current,
                        to: target,
                        control: {
                            x: midX + random(-80, 80),
                            y: midY + random(-60, 60),
                        },
                        progress: Math.random(),
                        speed: random(0.0016, 0.0032),
                        direction: Math.random() > 0.5 ? 1 : -1,
                        lineOpacity: random(0.12, 0.28),
                    });
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const drawBackground = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#1a1208');
            gradient.addColorStop(0.55, '#2a1b0c');
            gradient.addColorStop(1, '#140d07');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const drawGrid = () => {
            ctx.save();
            ctx.strokeStyle = 'rgba(255, 214, 102, 0.035)';
            ctx.lineWidth = 1;

            const gap = 52;

            for (let x = 0; x < width; x += gap) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y < height; y += gap) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            ctx.restore();
        };

        const drawFoamBlobs = (offsetX: number, offsetY: number) => {
            const blobs = [
                { x: width * 0.18, y: height * 0.22, r: 180 },
                { x: width * 0.78, y: height * 0.3, r: 220 },
                { x: width * 0.62, y: height * 0.74, r: 180 },
            ];

            blobs.forEach((blob) => {
                const radial = ctx.createRadialGradient(
                    blob.x + offsetX,
                    blob.y + offsetY,
                    10,
                    blob.x + offsetX,
                    blob.y + offsetY,
                    blob.r
                );
                radial.addColorStop(0, 'rgba(255, 210, 90, 0.12)');
                radial.addColorStop(0.45, 'rgba(255, 181, 46, 0.06)');
                radial.addColorStop(1, 'rgba(255, 181, 46, 0)');

                ctx.beginPath();
                ctx.arc(blob.x + offsetX, blob.y + offsetY, blob.r, 0, Math.PI * 2);
                ctx.fillStyle = radial;
                ctx.fill();
            });
        };

        const drawBeerRoute = (route: BeerRoute) => {
            ctx.save();

            ctx.setLineDash([5, 10]);
            ctx.beginPath();
            ctx.moveTo(route.from.x, route.from.y);
            ctx.quadraticCurveTo(route.control.x, route.control.y, route.to.x, route.to.y);
            ctx.strokeStyle = `rgba(255, 200, 87, ${route.lineOpacity})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();

            ctx.restore();
        };

        const drawBeerMug = (x: number, y: number, angle: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);

            ctx.shadowColor = 'rgba(255, 200, 87, 0.35)';
            ctx.shadowBlur = 12;

            // Espuma
            ctx.fillStyle = 'rgba(255,255,255,0.96)';
            ctx.beginPath();
            ctx.arc(-5, -7, 4, 0, Math.PI * 2);
            ctx.arc(0, -9, 4.8, 0, Math.PI * 2);
            ctx.arc(5, -7, 4, 0, Math.PI * 2);
            ctx.arc(0, -4.5, 6.5, 0, Math.PI * 2);
            ctx.fill();

            // Corpo do copo
            const beerGradient = ctx.createLinearGradient(0, -6, 0, 10);
            beerGradient.addColorStop(0, 'rgba(255, 209, 92, 0.95)');
            beerGradient.addColorStop(1, 'rgba(230, 140, 20, 0.95)');

            ctx.beginPath();
            ctx.roundRect(-7, -4, 14, 18, 3);
            ctx.fillStyle = beerGradient;
            ctx.fill();

            // Brilho do copo
            ctx.fillStyle = 'rgba(255,255,255,0.18)';
            ctx.beginPath();
            ctx.roundRect(-4.5, -2.5, 2.4, 13, 1.4);
            ctx.fill();

            // Alça
            ctx.strokeStyle = 'rgba(255,255,255,0.75)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(9, 4, 4.2, -Math.PI / 2.2, Math.PI / 2.2);
            ctx.stroke();

            ctx.restore();
        };

        const drawMovingMugs = () => {
            routes.forEach((route) => {
                const point = getQuadraticPoint(route.from, route.control, route.to, route.progress);
                const angle = getQuadraticAngle(route.from, route.control, route.to, route.progress);

                const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 20);
                glow.addColorStop(0, 'rgba(255, 205, 96, 0.28)');
                glow.addColorStop(1, 'rgba(255, 205, 96, 0)');

                ctx.beginPath();
                ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                drawBeerMug(point.x, point.y, angle);

                route.progress += route.speed * route.direction;

                if (route.progress >= 1) {
                    route.progress = 1;
                    route.direction = -1;
                } else if (route.progress <= 0) {
                    route.progress = 0;
                    route.direction = 1;
                }
            });
        };

        const drawNodes = () => {
            nodes.forEach((node) => {
                node.pulse += node.pulseSpeed;
                const pulseScale = 0.8 + (Math.sin(node.pulse) + 1) / 2;

                const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 18);
                glow.addColorStop(0, `rgba(255,255,255,${0.75 * pulseScale})`);
                glow.addColorStop(0.3, `rgba(255,196,72,${0.45 * pulseScale})`);
                glow.addColorStop(1, 'rgba(255,160,20,0)');

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius + pulseScale, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 244, 220, 0.95)';
                ctx.fill();
            });
        };

        const drawAtmosphere = (offsetX: number, offsetY: number) => {
            const radial = ctx.createRadialGradient(
                width * 0.5 + offsetX,
                height * 0.35 + offsetY,
                30,
                width * 0.5 + offsetX,
                height * 0.35 + offsetY,
                width * 0.55
            );

            radial.addColorStop(0, 'rgba(255, 187, 61, 0.09)');
            radial.addColorStop(1, 'rgba(255, 187, 61, 0)');

            ctx.fillStyle = radial;
            ctx.fillRect(0, 0, width, height);
        };

        const drawDecorativeCircles = (offsetX: number, offsetY: number) => {
            const circles = [
                { x: width * 0.12, y: height * 0.72, r: 36 },
                { x: width * 0.84, y: height * 0.18, r: 28 },
                { x: width * 0.74, y: height * 0.82, r: 20 },
            ];

            ctx.save();
            ctx.strokeStyle = 'rgba(255, 214, 120, 0.08)';
            ctx.lineWidth = 1.2;

            circles.forEach((circle) => {
                ctx.beginPath();
                ctx.arc(circle.x + offsetX * 0.7, circle.y + offsetY * 0.7, circle.r, 0, Math.PI * 2);
                ctx.stroke();
            });

            ctx.restore();
        };

        const animate = () => {
            mouse.x += (mouse.targetX - mouse.x) * 0.035;
            mouse.y += (mouse.targetY - mouse.y) * 0.035;

            const offsetX = (mouse.x - width / 2) * 0.012;
            const offsetY = (mouse.y - height / 2) * 0.012;

            drawBackground();
            drawGrid();
            drawAtmosphere(offsetX, offsetY);
            drawFoamBlobs(offsetX * 0.85, offsetY * 0.85);
            drawDecorativeCircles(offsetX, offsetY);

            routes.forEach((route) => drawBeerRoute(route));
            drawMovingMugs();
            drawNodes();

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-95"
        />
    );
}