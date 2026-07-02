'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeEndpoint = 'https://formspree.io/f/xvzjwvda';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Oops! There was a problem submitting your form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-border"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute blob w-[500px] h-[500px] opacity-15"
          style={{ background: 'rgba(124,58,237,0.5)', bottom: '-10%', left: '20%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16 reveal-item hidden-init">
          <p className="section-label mb-3">07 / CONTACT</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Let&apos;s <span className="gradient-text italic">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal-item hidden-init">
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md font-light">
              I am actively seeking roles in Business Analysis, Data Strategy, and Consulting. If
              your organization is looking to turn complex, fragmented data into sustainable
              operational value, I would love to talk.
            </p>

            <div className="space-y-5 mb-10">
              <a
                href="mailto:tadwalkarsarthak@gmail.com"
                className="flex items-center gap-4 group p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-foreground text-sm font-medium">tadwalkarsarthak@gmail.com</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto text-muted-foreground/40 group-hover:text-primary transition-colors"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sarthak-tadwalkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    sarthak-tadwalkar · 500+ connections
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto text-muted-foreground/40 group-hover:text-primary transition-colors"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

            <a
              href="/assets/Sarthak_Tadwalkar_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center"
              style={{ boxShadow: '0 0 30px rgba(124,58,237,0.35)' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="reveal-item hidden-init stagger-1">
            {submitted ? (
              <div className="card-base p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-8 space-y-6">
                <div>
                  <label className="section-label block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Priya Sharma"
                    value={formState.name}
                    name="name"
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-base font-light"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="priya@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-base font-light"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="I'd like to discuss an opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-base font-light resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-between px-6 py-4 border border-primary/30 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
