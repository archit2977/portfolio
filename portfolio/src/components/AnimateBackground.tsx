"use client";
import { useRef, useEffect } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- Animation Data ---
    const streaks = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: 100 + Math.random() * 120,
      speed: 0.5 + Math.random() * 1.2,
      angle: Math.PI * (0.7 + Math.random() * 0.2),
      color: `rgba(100,149,237,${0.10 + Math.random() * 0.10})`
    }));

    function drawCurves() {
      if (!ctx) return;
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.setLineDash([2, 10]);
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 2) {
          const y = i + Math.sin((x + i) * 0.008) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.restore();
    }

    function drawDots() {
      if (!ctx) return;
      ctx.save();
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      for (let y = 0; y < height; y += 24) {
        for (let x = 0; x < width; x += 24) {
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    }

    function drawStreaks() {
      if (!ctx) return;
      for (const s of streaks) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x + Math.cos(s.angle) * s.len,
          s.y + Math.sin(s.angle) * s.len
        );
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.4;
        ctx.shadowColor = "#2563eb";
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.restore();

        // Move
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        if (
          s.x > width + 100 ||
          s.y > height + 100 ||
          s.x < -100 ||
          s.y < -100
        ) {
          s.x = Math.random() * width;
          s.y = -20;
        }
      }
    }

    let animationId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      drawCurves();
      drawDots();
      drawStreaks();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: "#0a0a0a"
      }}
    />
  );
}
