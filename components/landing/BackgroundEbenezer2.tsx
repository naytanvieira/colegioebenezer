'use client';

import React, { useEffect, useRef } from 'react';

type FeatherSymbol = {
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

export default function EbenezerFaithEducationBackground2() {
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

    const symbols: FeatherSymbol[] = [];
    const trails: LightTrail[] = [];

    const mouse = {
      x: width / 2,
      y: height / 2,
      tx: width / 2,
      ty: height / 2,
    };

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

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

      const symbolCount = width < 768 ? 6 : 10;

      for (let i = 0; i < symbolCount; i++) {
        symbols.push({
          x: random(80, width - 250),
          y: random(80, height - 180),
          scale: random(0.7, 1.3),
          opacity: random(0.05, 0.12),
          pulse: random(0, Math.PI * 2),
          pulseSpeed: random(0.004, 0.009),
          rotation: random(-0.15, 0.15),
        });
      }

      const lineCount = width < 768 ? 16 : 30;

      for (let i = 0; i < lineCount; i++) {
        const x1 = random(0, width);
        const y1 = random(0, height);
        const horizontal = Math.random() > 0.5;
        const length = random(80, 220);

        trails.push({
          x1,
          y1,
          x2: horizontal ? x1 + length : x1,
          y2: horizontal ? y1 : y1 + length,
          progress: Math.random(),
          speed: random(0.002, 0.005),
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

      gradient.addColorStop(0, '#F7FBFB');
      gradient.addColorStop(0.45, '#EEF8F8');
      gradient.addColorStop(1, '#EAF7F6');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(11,110,110,0.035)';
      ctx.lineWidth = 1;

      const gap = 56;

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
        width * 0.55 + offsetX,
        height * 0.25 + offsetY,
        20,
        width * 0.55 + offsetX,
        height * 0.25 + offsetY,
        width * 0.7
      );

      radial.addColorStop(0, 'rgba(26,166,166,0.12)');
      radial.addColorStop(0.45, 'rgba(11,110,110,0.05)');
      radial.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);
    };

    const drawLightDots = () => {
      ctx.save();

      for (let i = 0; i < 50; i++) {
        const x = (i * 173) % width;
        const y = (i * 97) % height;

        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(26,166,166,0.08)';
        ctx.fill();
      }

      ctx.restore();
    };

    const drawFeather = (
      x: number,
      y: number,
      scale: number,
      opacity: number,
      pulseFactor: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const glow = opacity + pulseFactor * 0.04;

      ctx.strokeStyle = `rgba(11,110,110,${glow})`;
      ctx.lineWidth = 1.4;

      // eixo central da pena
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(40 * scale, 40 * scale, 110 * scale, 90 * scale);
      ctx.stroke();

      // curva externa
      ctx.beginPath();
      ctx.moveTo(10 * scale, -10 * scale);
      ctx.quadraticCurveTo(
        40 * scale,
        30 * scale,
        120 * scale,
        95 * scale
      );
      ctx.stroke();

      // curva interna
      ctx.beginPath();
      ctx.moveTo(-5 * scale, 20 * scale);
      ctx.quadraticCurveTo(
        30 * scale,
        55 * scale,
        105 * scale,
        85 * scale
      );
      ctx.stroke();

      // detalhe aqua
      ctx.strokeStyle = `rgba(26,166,166,${opacity * 0.8})`;

      ctx.beginPath();
      ctx.moveTo(35 * scale, 20 * scale);
      ctx.quadraticCurveTo(
        70 * scale,
        60 * scale,
        125 * scale,
        92 * scale
      );
      ctx.stroke();

      ctx.restore();
    };

    const drawSymbols = (offsetX: number, offsetY: number) => {
      symbols.forEach((symbol, index) => {
        symbol.pulse += symbol.pulseSpeed;
        const pulseFactor = (Math.sin(symbol.pulse) + 1) / 2;

        const parallaxX = offsetX * (0.18 + index * 0.02);
        const parallaxY = offsetY * (0.18 + index * 0.02);

        drawFeather(
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
      ctx.lineWidth = 1.2;

      trails.forEach((line) => {
        line.progress += line.speed;

        if (line.progress > 1 + line.delay) {
          line.progress = 0;
        }

        const visibleProgress = Math.max(
          0,
          Math.min(1, line.progress - line.delay)
        );

        if (visibleProgress <= 0) return;

        const currentX =
          line.x1 + (line.x2 - line.x1) * visibleProgress;
        const currentY =
          line.y1 + (line.y2 - line.y1) * visibleProgress;

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = 'rgba(11,110,110,0.08)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(26,166,166,0.14)';
        ctx.fill();
      });

      ctx.restore();
    };

    const drawTopLight = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        height * 0.5
      );

      gradient.addColorStop(0, 'rgba(255,255,255,0.55)');
      gradient.addColorStop(0.35, 'rgba(26,166,166,0.05)');
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
      drawLightDots();
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