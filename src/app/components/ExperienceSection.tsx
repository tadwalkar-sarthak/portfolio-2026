'use client';
import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Data Science & Analytics Intern',
    company: 'Raasta Consulting',
    period: 'Feb 2025 – May 2025',
    location: 'Mumbai, India',
    type: 'Internship',
    color: 'primary',
    certificate: '/assets/Raasta_Internship_Certificate.pdf',
    highlights: [
      'Analyzed 100K+ production-grade dataset through EDA and visualization to support business decision-making, and extracted actionable insights from complex data.',
      'Reduced business analysis turnaround time by 60% through workflow and reporting automation using Cache-Augmented-Generation (CAG) solution within 45 days.',
      'Partnered with teams to define KPIs and deliver intelligence dashboards to support strategic decision-making.',
    ],
    metric: { value: '60%', label: 'Reduced Turnaround Time' },
    tags: [
      'Scikit-learn',
      'pandas & numpy',
      'matplotlib',
      'statistical analysis',
      'Exploratory Data Analysis',
      'CAG System',
      'Requirements Gathering',
      'LLM Integration',
      'Model Training',
      'Data Modeling',
      'Advanced Excel',
    ],
  },
  {
    role: 'Design Expert',
    company: 'Google Developer Student Clubs KJSIT',
    period: 'Dec 2022 – Aug 2024',
    location: 'Mumbai, India',
    type: 'Volunteering',
    color: 'secondary',
    certificate: '/assets/GDSC_Completion_Certificate.pdf',
    highlights: [
      'Collaborated with the Google Developer Student Club as a Design Expert, creating visuals that supported events, workshops, and community engagement.',
      'Recognized by the GDSC Campus Lead for my contributions, earning a recommendation for consistently delivering high-quality work and supporting club initiatives.',
    ],
    metric: { value: '★', label: 'Recommended' },
    tags: ['Real-time Monitoring', 'Requirements Gatherings', 'Client Communication'],
  },
  {
    role: 'Digital Media Manager',
    company: 'ISTE-KJSIT',
    period: 'Jul 2024 – May 2025',
    location: 'Mumbai, India',
    type: 'Volunteering',
    color: 'accent',
    highlights: [
      'Managed the organizations social media presence, creating engaging content and marketing materials that strengthened its digital reach and community engagement.',
    ],
    metric: { value: '10mo', label: 'Strategic Tenure' },
    tags: ['Client Communication', 'Requirements Gathering'],
  },
];

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; dot: string; hoverBorder: string }
> = {
  primary: {
    border: 'border-primary/30',
    bg: 'bg-primary/10',
    text: 'text-primary',
    dot: 'bg-primary',
    hoverBorder: 'hover:border-primary',
  },
  accent: {
    border: 'border-accent/30',
    bg: 'bg-accent/10',
    text: 'text-accent',
    dot: 'bg-accent',
    hoverBorder: 'hover:border-accent',
  },
  secondary: {
    border: 'border-secondary-foreground/30',
    bg: 'bg-secondary/40',
    text: 'text-secondary-foreground',
    dot: 'bg-secondary-foreground',
    hoverBorder: 'hover:border-secondary-foreground',
  },
  muted: {
    border: 'border-border',
    bg: 'bg-muted/30',
    text: 'text-muted-foreground',
    dot: 'bg-muted-foreground',
    hoverBorder: 'hover:border-muted-foreground',
  },
};

export default function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-item hidden-init">
          <div>
            <p className="section-label mb-3">04 / EXPERIENCE</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground tracking-tight">
              Work <span className="gradient-text italic">History</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Demonstrating a foundation of professional data analytics, change management, and
            strategic cross-functional leadership.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
          <div className="space-y-8 md:pl-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <div
                  key={`${exp.company}-${i}`}
                  className={`relative reveal-item hidden-init`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`absolute -left-[2.875rem] top-8 w-3 h-3 rounded-full ${c.dot} hidden md:block border-2 border-background`}
                  />
                  <div
                    className={`card-base p-7 md:p-8 ${c.border} border hover:${c.bg} transition-colors duration-300 group`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span
                            className={`text-xs font-mono px-2.5 py-1 rounded-full border ${c.border} ${c.bg} ${c.text} tracking-wider uppercase`}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs text-muted-foreground/60 font-mono">
                            {exp.period}
                          </span>
                          <span className="text-xs text-muted-foreground/60">{exp.location}</span>
                        </div>
                        <h3 className="font-display text-2xl font-medium text-foreground tracking-tight">
                          {exp.role}
                        </h3>
                        <p className={`text-base font-medium ${c.text} mt-0.5`}>{exp.company}</p>
                      </div>
                      <div
                        className={`flex-shrink-0 text-center px-6 py-4 rounded-lg ${c.bg} border ${c.border}`}
                      >
                        <span
                          className={`font-display text-3xl font-light ${c.text} block leading-none`}
                        >
                          {exp.metric.value}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1 block font-mono uppercase tracking-wider">
                          {exp.metric.label}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className={`w-1 h-1 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="skill-pill text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          download
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${c.border} ${c.text} text-xs font-semibold ${c.hoverBorder} hover:${c.bg} transition-all duration-300 whitespace-nowrap`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5-5M12 15V3" />
                          </svg>
                          Download Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
