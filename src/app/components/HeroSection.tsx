'use client';
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Imoroved Turnaround Time', value: '60%' },
  { label: 'Analytics Accuracy', value: '87%' },
  { label: 'Client Engagements', value: '4' },
  { label: 'Process Automations', value: '6' },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];
    const colors = ['#7C3AED', '#A78BFA', '#818CF8', '#C084FC', '#6D28D9'];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, '0');
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!statsRef.current) return;
    const rect = statsRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    statsRef.current.querySelectorAll<HTMLElement>('.spotlight-card').forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - cardRect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - cardRect.top}px`);
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden pt-16">
      <div className="absolute inset-0 animated-mesh" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute blob w-96 h-96 opacity-30 pointer-events-none"
        style={{ background: 'rgba(91,33,182,0.6)', top: '10%', left: '-10%' }}
      />
      <div
        className="absolute blob w-80 h-80 opacity-20 pointer-events-none"
        style={{
          background: 'rgba(79,70,229,0.5)',
          bottom: '10%',
          right: '-5%',
          animationDelay: '-4s',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center py-20 lg:py-0">
        <div className="lg:col-span-8 lg:border-r border-border lg:pr-12 py-8 lg:py-0 flex flex-col justify-center min-h-[70vh]">
          <div className={`${revealed ? 'reveal-active' : ''}`}>
            <div className="text-reveal-wrapper mb-6">
              <a
                href="#why-hire-me"
                onClick={(e) => handleScroll(e, 'why-hire-me')}
                className="text-reveal-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono tracking-widest text-muted-foreground uppercase hover:border-primary/60 hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Why Hire Me !?
              </a>
            </div>

            <h1 className="font-display font-light text-foreground leading-none tracking-tight mb-4">
              <span className="text-reveal-wrapper block overflow-hidden">
                <span
                  className="text-reveal-content block"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  Sarthak
                </span>
              </span>
              <span className="text-reveal-wrapper block overflow-hidden">
                <span
                  className="text-reveal-content delay-100 block gradient-text"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  Tadwalkar
                </span>
              </span>
            </h1>

            <div className="text-reveal-wrapper mb-8">
              <p className="text-reveal-content delay-200 text-muted-foreground font-sans text-lg md:text-xl font-light max-w-xl leading-relaxed">
                I translate complex business challenges into data-driven strategies that drive
                measurable value. With expertise in predictive analytics, process optimization, and
                financial modeling, I have delivered over{' '}
                <strong className="text-foreground font-medium">
                  ₹3M in identified cost savings and revenue opportunities
                </strong>{' '}
                across engagements in the automotive, financial services, and corporate sectors.
              </p>
            </div>

            <div className="text-reveal-wrapper">
              <div className="text-reveal-content delay-300 flex flex-wrap gap-4 items-center">
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  View My Work
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/assets/Sarthak_Tadwalkar_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-muted-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5-5M12 15V3" />
                  </svg>
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sarthak-tadwalkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-muted-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-muted-foreground/50">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/40" />
            <span className="section-label text-xs">Scroll to explore</span>
          </div>
        </div>

        <div
          ref={statsRef}
          className="lg:col-span-4 lg:pl-10 py-8 lg:py-0 spotlight-group"
          onMouseMove={handleMouseMove}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="spotlight-card card-base p-6 flex flex-col justify-between min-h-[120px]"
                style={
                  {
                    '--mouse-x': `${mousePos.x}px`,
                    '--mouse-y': `${mousePos.y}px`,
                  } as React.CSSProperties
                }
              >
                <span className="section-label text-xs mb-3 block">{stat.label}</span>
                <span className="font-display text-3xl font-light gradient-text leading-none">
                  {stat.value}
                </span>
              </div>
            ))}
            <div
              className="spotlight-card card-base col-span-2 p-6 flex items-center gap-4"
              style={
                {
                  '--mouse-x': `${mousePos.x}px`,
                  '--mouse-y': `${mousePos.y}px`,
                } as React.CSSProperties
              }
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium leading-tight">
                  Bachelor of Technology in Artificial Intelligence and Data Science
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  K J Somaiya Institute of Technology · 2022 - 2026
                </p>
              </div>
            </div>
          </div>
          <p className="section-label mt-6 block opacity-40">01 / INTRO</p>
        </div>
      </div>
    </section>
  );
}
