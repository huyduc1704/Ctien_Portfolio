import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

type LayoutProps = {
  children?: React.ReactNode;
};

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <section
    id={id}
    style={{
      scrollMarginTop: 80,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {children}
  </section>
);

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(32px, 4vw, 64px) clamp(16px, 4vw, 24px)',
        display: 'grid',
        gap: 16,
        textAlign: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <Navbar />
      </div>

      <main
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Body sẽ chứa: Hero / About / Skills / Experience / Projects / Education / Contact */}
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      <div style={{ width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;