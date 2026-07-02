import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import WhyHireMe from './components/WhyHireMe';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
  title: 'Sarthak Tadwalkar — AI & Data Science Portfolio',
  description:
    'Final-year BTech AI & Data Science student at K.J. Somaiya Institute, Mumbai. Built LLM tools, data pipelines, and ML models. Open to internships and full-time roles.',
};

export default function HomePage() {
  return (
    <>
      {/* Noise overlay for premium feel */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <main>
        <HeroSection />
        <WhyHireMe />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
