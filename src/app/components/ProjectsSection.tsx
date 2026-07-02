'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
  {
    title: 'Automotive Sales Analytics & Strategy',
    subtitle: 'Strategic Collaboration Project',
    caseStudy: {
      challenge:
        'Explored 10,000+ sales records to uncover hidden profitability issues, identifying ₹800K–₹1.2M in preventable annual margin leakage.',
      approach:
        'Developed an end-to-end analytics solution that transformed complex dealership data into executive dashboards covering pricing, inventory, and performance across 50+ product lines.',
      outcome:
        'Generated actionable insights that revealed ₹1.5M+ in margin recovery opportunities, projected 6% higher profitability, and improved inventory efficiency upto 11%.',
    },
    impact: [
      { metric: '₹2.3M', label: 'Identified Opportunity' },
      { metric: '87%', label: 'Forecast Accuracy' },
      { metric: '18%', label: 'Margin Improvement' },
    ],
    tags: ['PostgreSQL', 'DuckDB', 'Python', 'Plotly Express'],
    image: '/assets/automotive-dashboard.jpg',
    imageAlt: 'Data analytics dashboard showing sales metrics',
    type: 'Collaboration',
    featured: true,
    links: [
      {
        url: 'https://www.linkedin.com/posts/sarthak-tadwalkar_automotivesalesanalyticsstrategyreport-activity-7477664944910487553-PXSt',
        label: 'View Post',
      },
      {
        url: 'https://www.kaggle.com/code/sarthaktadwalkar/strategic-automotive-analytics-optimizing-dealers',
        label: 'Kaggle Notebook',
      },
      {
        url: 'https://www.kaggle.com/datasets/sarthaktadwalkar/automotive-sales-and-pricing',
        label: 'Kaggle Dataset',
      },
    ],
  },
  {
    title: 'Swift-Query: Enterprise RAG Intelligence',
    subtitle: 'Knowledge Automation',
    caseStudy: {
      challenge:
        'Addressed the challenge of extracting insights from a 170-page financial report, where manual analysis was slow, error-prone, and unsuitable for secure enterprise workflows.',
      approach:
        'Built a production-ready RAG system using local LLMs and ChromaDB, enabling semantic search with 90% retrieval accuracy, zero hallucinations, and offline processing for secure document intelligence.',
      outcome:
        'Reduced financial information retrieval from hours to under a minute, with an initial processing time of ~10 seconds, enabling faster decision-making without recurring API costs or compromising data privacy.',
    },
    impact: [
      { metric: '87%', label: 'Time Reduction' },
      { metric: '170-page', label: 'Financial report' },
      { metric: 'Zero', label: 'Cloud Exposure' },
    ],
    tags: ['Python', 'RAG', 'LLMs', 'Vector Databases', 'ChromaDB', 'Streamlit', 'Semantic Search'],
    image: '/assets/rag-terminal.png',
    imageAlt: 'Abstract representation of artificial intelligence',
    type: 'Professional',
    featured: true,
    links: [
      {
        url: 'https://www.linkedin.com/posts/sarthak-tadwalkar_ai-machinelearning-rag-activity-7440786884836057088-RSAm',
        label: 'View Post',
      },
      { url: 'https://github.com/tadwalkar-sarthak/rag-swiggy', label: 'GitHub' },
    ],
  },
  {
    title: 'Customer Churn Predictive Analysis',
    subtitle: 'Financial Services Analytics',
    caseStudy: {
      challenge:
        'Analyzed 77,000+ customer records to uncover the root causes of customer churn and identify opportunities to improve long-term customer retention.',
      approach:
        'Combined SQL, statistical analysis, and Power BI to validate customer data, segment 80% of the customer base, and reveal that customers with 3+ support interactions were 4× more likely to churn.',
      outcome:
        'Delivered data-driven retention insights projected to reduce customer churn by 15%, enabling more targeted engagement strategies and improving customer lifetime value.',
    },
    impact: [
      { metric: '15%', label: 'Reduced Customer churn' },
      { metric: '4x', label: 'Identified Risk Factor' },
      { metric: '76%', label: 'Warning Precision' },
    ],
    tags: ['SQL', 'Python', 'Power BI'],
    image: '/assets/churn-dashboard.png',
    imageAlt: 'Business intelligence graphs',
    type: 'Professional',
    featured: false,
  },
  {
    title: 'Workforce Performance Framework',
    subtitle: 'Corporate HR Analytics',
    caseStudy: {
      challenge:
        'Examined workforce data for 1,400+ employees to identify the factors affecting performance, retention, and organizational planning.',
      approach:
        'Leveraged Python and Power BI to validate and analyze employee data, uncovering promotion gaps as the key factor behind a 7% YoY decline in performance while building executive dashboards with 93% reporting accuracy.',
      outcome:
        'Delivered actionable workforce insights that informed promotion and retention strategies, enabling data-driven planning and improving confidence in organizational decision-making.',
    },
    impact: [
      { metric: '7%', label: 'Identified YoY decreased' },
      { metric: '23%', label: 'Identified Promotion Gap' },
      { metric: '93%', label: 'Reporting Accuracy' },
    ],
    tags: ['Excel', 'Python', 'Power BI', 'Statistical Testing', 'Executive Dashboards'],
    image: '/assets/hr-analytics.png',
    imageAlt: 'Data analysis on computer screen',
    type: 'Professional',
    featured: false,
  },
];

export default function ProjectsSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-item hidden-init">
          <div>
            <p className="section-label mb-3">05 / PROJECTS & CASE STUDIES</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground tracking-tight">
              Client &amp; Selected <span className="gradient-text italic">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Real-world engagements focusing on diagnostic analysis, strategic design, and
            sustainable business outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {projects?.map((project, i) => (
            <article
              key={project?.title}
              className={`card-base overflow-hidden group reveal-item hidden-init`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`grid grid-cols-1 ${i % 2 === 0 ? 'md:grid-cols-[1fr_380px]' : 'md:grid-cols-[380px_1fr]'} gap-0`}
              >
                <div
                  className={`p-8 md:p-10 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {project?.featured && (
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary tracking-wider uppercase">
                          Featured
                        </span>
                      )}
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground tracking-wider uppercase">
                        {project?.type}
                      </span>
                      <span className="text-xs text-muted-foreground/60 font-mono">
                        {project?.subtitle}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-6 group-hover:text-primary transition-colors duration-300">
                      {project?.title}
                    </h3>
                    <div className="space-y-4 mb-8">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <strong className="text-foreground font-medium block mb-1">
                          Challenge:
                        </strong>{' '}
                        {project.caseStudy.challenge}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <strong className="text-foreground font-medium block mb-1">
                          Approach:
                        </strong>{' '}
                        {project.caseStudy.approach}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <strong className="text-foreground font-medium block mb-1">
                          Outcome &amp; Value:
                        </strong>{' '}
                        {project.caseStudy.outcome}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project?.impact?.map((imp) => (
                        <div
                          key={imp?.label}
                          className="text-center p-4 rounded-lg bg-muted/30 border border-border"
                        >
                          <span className="font-display text-xl font-medium gradient-text block leading-tight">
                            {imp?.metric}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1 block font-mono leading-tight">
                            {imp?.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2 border-t border-border/50 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project?.tags?.map((tag) => (
                        <span key={tag} className="skill-pill text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.links && (
                      <div className="flex gap-3">
                        {project.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-primary hover:text-primary/70 transition-colors underline underline-offset-4 whitespace-nowrap"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`relative overflow-hidden min-h-[280px] md:min-h-[auto] ${i % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <AppImage
                    src={project?.image}
                    alt={project?.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent md:bg-gradient-to-l md:from-card md:via-card/50 md:to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
