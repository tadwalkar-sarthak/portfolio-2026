'use client';
import React, { useEffect, useRef } from 'react';

const skills = [
  {
    category: 'AI & Machine Learning',
    items: [
      'LLM Integration',
      'RAG/CAG Systems',
      'Predictive Analytics',
      'Model Training',
      'A/B Testing',
    ],
  },
  {
    category: 'Data Science',
    items: [
      'Scikit-learn',
      'Pandas & NumPy',
      'Matplotlib',
      'Statistical Analysis',
      'Feature Engineering',
      'EDA',
    ],
  },
  {
    category: 'Data & Business Intelligence',
    items: [
      'Power BI & Tableau',
      'Data Modeling',
      'ETL Processes',
      'Executive Dashboarding',
      'Data Storytelling',
      'Interactive Analysis',
      'Real-time Monitoring',
      'Excel',
    ],
  },
  {
    category: 'Programming & Tools',
    items: ['Python', 'SQL (MySQL, PostgreSQL)', 'R', 'AWS', 'Git & GitHub', 'Jupyter Notebooks'],
  },
  {
    category: 'Strategy & Engagement',
    items: ['KPI Definition', 'Client Communication', 'Requirements Gathering'],
  },
];

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

function BentoCard({ className = '', children }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card card-base relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target
              .querySelectorAll('.hidden-init')
              .forEach((el) => el.classList.add('in-view'));
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 reveal-item hidden-init">
          <div>
            <p className="section-label mb-3">03 / THE ARSENAL</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground tracking-tight">
              The <span className="gradient-text italic">Story</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* BIO CARD */}
          <BentoCard className="md:col-span-2 p-8 md:p-10 reveal-item hidden-init">
            <div className="relative z-10">
              <p className="section-label mb-4">BIO</p>
              <p className="text-foreground/90 text-lg leading-relaxed font-light max-w-prose">
                For me, <strong className="font-semibold text-foreground">Data </strong>
                is a tool for solving business problems - not just creating reports. I like to start
                by asking the right questions: Why are customers leaving? Where are we losing money?
                How can we scale more efficiently? Once the problem is clear, I build solutions that
                people actually use, whether that's predictive models, automated workflows, or
                AI-powered applications.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mt-4 font-light">
                In my Experience, my work has uncovered over ₹3M in cost savings and revenue
                opportunities and also reducing operational effort by 60% through automation. I
                enjoy connecting the technical side of analytics with the business side of
                decision-making, helping teams turn data into meaningful action.
              </p>
            </div>
          </BentoCard>

          {/* CARD 1: AI & ML */}
          <BentoCard className="p-7 reveal-item hidden-init stagger-1">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center mb-5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-emerald-500"
                >
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              </div>
              <p className="section-label mb-3">AI & MACHINE LEARNING</p>
              <div className="flex flex-wrap gap-2">
                {skills[0].items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CARD 2: DATA SCIENCE */}
          <BentoCard className="p-7 reveal-item hidden-init stagger-2">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/20 flex items-center justify-center mb-5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              </div>
              <p className="section-label mb-3">DATA SCIENCE</p>
              <div className="flex flex-wrap gap-2">
                {skills[1].items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CARD 3: PROGRAMMING & TOOLS (Swapped to standard slot) */}
          <BentoCard className="p-7 reveal-item hidden-init stagger-3">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-secondary/60 border border-secondary-foreground/20 flex items-center justify-center mb-5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-secondary-foreground"
                >
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <p className="section-label mb-3">PROGRAMMING & TOOLS</p>
              <div className="flex flex-wrap gap-2">
                {skills[3].items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CARD 4: DATA & BI (Swapped to tall slot) */}
          <BentoCard className="row-span-2 p-7 flex flex-col reveal-item hidden-init stagger-4">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center mb-5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="section-label mb-3">DATA & BUSINESS INTELLIGENCE</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills[2].items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto border-t border-border pt-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Transforming complex datasets into actionable executive insights, interactive
                  models, and automated reporting pipelines.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* CARD 5: STRATEGY & ENGAGEMENT */}
          <BentoCard className="md:col-span-2 p-7 reveal-item hidden-init stagger-5">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-indigo-300"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <p className="section-label">STRATEGY & ENGAGEMENT</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[4].items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
