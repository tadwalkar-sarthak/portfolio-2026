'use client';
import React from 'react';

export default function WhyHireMe() {
  const reasons = [
    {
      title: 'Impact-Driven Analytics',
      description:
        "I work with large, complex datasets to solve real business problems. Whether it's improving forecast accuracy to 87% or identifying over ₹2.5M in potential savings and revenue opportunities, I focus on delivering analytics that create measurable value.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Enterprise Strategy & Execution',
      description:
        'I build data solutions that connect technical work with business goals. From analyzing 77,000+ customer interactions to evaluating 1,400+ workforce records, I have developed executive dashboards with up to 93% accuracy to help stakeholders make confident, data-driven decisions.',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Advanced Intelligence & Automation',
      description:
        'I focus on applying AI where it delivers measurable business value. By developing custom LLM pipelines and secure RAG systems, I have helped reduce research time by up to 87%, enabling faster decisions and an estimated ₹400K in annual cost savings',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4 opacity-70">02 / VALUE PROPOSITION</p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            Why You Should <span className="gradient-text font-medium">Hire Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I approach data engineering with both an engineer&apos;s precision and a
            consultant&apos;s perspective— building scalable data solutions that align technical
            execution with business objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-base p-8 hover:-translate-y-2 transition-transform duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
