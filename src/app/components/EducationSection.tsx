'use client';
import React, { useEffect, useRef } from 'react';

const education = [
  {
    degree: 'BTech — AI & Data Science',
    institution: 'K J Somaiya Institute of Technology',
    period: '2022 – 2026',
    location: 'Mumbai, India',
    detail:
      'Relevant Coursework: Engineering Mathematics, Database Management System, Data Warehousing and Mining, Artificial Intelligence, Machine Learning, Data Analytics and Visualization, Big Data.',
    icon: '🎓',
    highlight: 'CGPA: 8.44',
  },
  {
    degree: 'HSC Science',
    institution: 'Deogiri College Aurangabad',
    period: '2020 – 2022',
    location: 'Aurangabad, India',
    detail: 'Scored 85.17% in HSC Science stream.',
    icon: '📘',
    highlight: '85.17%',
  },
  {
    degree: 'SSC',
    institution: 'Anant Bhalerao Vidya Mandir',
    period: '2020',
    location: 'India',
    detail: 'Scored 94.20% in SSC board examinations.',
    icon: '📗',
    highlight: '94.20%',
  },
];

const certifications = [
  {
    name: 'Data Analysis with R Programming',
    issuer: 'Google',
    date: 'Apr 2025',
    color: 'primary',
    file: '/assets/Google_Data_Analysis_Certificate.pdf',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: 'Machine Learning Basics',
    issuer: 'Vodafone Idea Foundation',
    date: 'Jul 2023',
    color: 'secondary',
    file: '/assets/Vodafone_ML_Certificate.pdf',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    name: 'Google Certifications (Suite)',
    issuer: 'GDSC KJSIT · Google',
    date: '2022–2024',
    color: 'primary',
    file: '/assets/GDSC_Suite_Certificate.pdf',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const certColorMap: Record<string, { border: string; bg: string; text: string }> = {
  primary: { border: 'border-primary/25', bg: 'bg-primary/10', text: 'text-primary' },
  accent: { border: 'border-accent/25', bg: 'bg-accent/10', text: 'text-accent' },
  secondary: {
    border: 'border-secondary-foreground/20',
    bg: 'bg-secondary/30',
    text: 'text-secondary-foreground',
  },
  muted: { border: 'border-border', bg: 'bg-muted/20', text: 'text-muted-foreground' },
};

export default function EducationSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 reveal-item hidden-init">
          <p className="section-label mb-3">06 / EDUCATION &amp; CREDENTIALS</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Academic <span className="gradient-text italic">Foundation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="section-label mb-8 reveal-item hidden-init">EDUCATION</h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={edu.institution}
                  className={`card-base p-6 reveal-item hidden-init`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                        <h4 className="font-display text-lg font-medium text-foreground tracking-tight">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary whitespace-nowrap">
                          {edu.highlight}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary mb-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground/70 font-mono mb-2">
                        {edu.period} · {edu.location}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label mb-8 reveal-item hidden-init stagger-1">CERTIFICATIONS</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const c = certColorMap[cert.color];
                return (
                  <div
                    key={cert.name}
                    className={`card-base p-5 flex items-center gap-4 group hover:${c.bg} transition-colors duration-300 reveal-item hidden-init`}
                    style={{ transitionDelay: `${i * 70 + 80}ms` }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 ${c.text}`}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{cert.name}</p>
                      <p className={`text-xs ${c.text} font-medium`}>{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-xs text-muted-foreground/60 font-mono hidden sm:inline-block">
                        {cert.date}
                      </span>
                      <a
                        href={cert.file}
                        download
                        className="p-2 rounded-md bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex-shrink-0"
                        title="Download Certificate"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5-5M12 15V3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
