import React, { useState, useEffect } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  PythonIcon,
  NodeIcon,
  N8nIcon,
  TailwindIcon,
  ViteIcon,
  PostgresIcon,
  MailIcon,
  PhoneIcon,
  SparklesIcon,
} from './components/Icons';

const CAPABILITIES = [
  {
    title: 'CLEAN WEB APPS',
    icon: <ReactIcon size={20} />,
    desc: 'Responsive, lightning-fast interfaces built in React with clean design systems, deliberate typography, and zero visual bloat.',
  },
  {
    title: 'AI AGENTS & RAG',
    icon: <SparklesIcon size={20} />,
    desc: 'Autonomous tools and grounded retrieval pipelines that read company documentation, reason over data, and execute tasks without hallucination.',
  },
  {
    title: 'N8N & AUTOMATIONS',
    icon: <N8nIcon size={20} />,
    desc: 'Complex multi-system workflows connecting forms, databases, third-party APIs, and AI models to remove repetitive human tasks.',
  },
  {
    title: 'DATA SCIENCE CORE',
    icon: <PythonIcon size={20} />,
    desc: 'Mathematical and algorithmic foundation from IIT Madras applied to data pipelines, pattern extraction, and model integration.',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Default to light theme on entry and reload per requirement
    setTheme('light');
    document.documentElement.setAttribute('data-theme', 'light');
    try {
      localStorage.removeItem('ishaan_theme');
    } catch (e) {}

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ishaan_theme', next);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('khanishaan846@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div id="top" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Floating Pill Navbar */}
      <header className="header-fixed">
        <nav aria-label="Primary" className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
          <a href="#top" className="brand-title">
            <span className="brand-dot"></span>
            <span>Ishaan Khan</span>
          </a>

          <ul className="nav-links">
            <li><a href="#work">See My Work</a></li>
            <li><a href="#experience">Background</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={toggleTheme}
              className="theme-pill-btn"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.15rem', fontSize: '0.8rem' }}>
              Let's Talk
              <span className="arrow">→</span>
            </a>
          </div>
        </nav>
      </header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO SECTION */}
        <section className="hero-wrapper">
          {/* Translucent Intersection-Dotted Architectural Grid with Gradient Mask */}
          <div className="hero-grid-canvas" aria-hidden="true">
            <svg className="hero-grid-svg" width="100%" height="100%">
              <defs>
                <pattern
                  id="hero-grid-pattern"
                  width="48"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Grid Lines intersecting at center (24, 24) */}
                  <path
                    d="M 0 24 L 48 24 M 24 0 L 24 48"
                    fill="none"
                    strokeWidth="1"
                    className="grid-line"
                  />
                  {/* Subtle Dot at Every Line Intersection */}
                  <circle
                    cx="24"
                    cy="24"
                    r="1.6"
                    className="grid-intersection-dot"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
            </svg>
            {/* Subtle Gradient Tone Overlay */}
            <div className="hero-grid-ambient-gradient" />
          </div>

          <div className="site-container hero-content">
            <div className="hero-layout">
              <div>
                <h1 className="display-xl" style={{ marginTop: '0', maxWidth: '56rem' }}>
                  I BUILD
                  <br />
                  CLEAN WEB APPS
                  <br />
                  & POWERFUL
                  <br />
                  AI AGENTS.
                </h1>

                <div
                  style={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '2rem',
                  }}
                >
                  <p
                    style={{
                      maxWidth: '32rem',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Full Stack Developer with 2+ years of experience engineering production web platforms and autonomous AI systems. I turn manual bottlenecks into sharp, high-performance software that runs reliably.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                    <a href="#work" className="btn-primary">
                      See My Work
                      <span className="arrow">→</span>
                    </a>
                    <button onClick={copyEmail} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MailIcon size={16} />
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                      <span className="arrow">↗</span>
                    </button>
                  </div>
                </div>


              </div>

              {/* Minimal Clean Orbital Rings (No Tacky Dots) */}
              <div className="portrait-container">
                {/* Subtle Opposite Ambient Gradient */}
                <div className="portrait-ambient-glow" />

                {/* Outer Revolving Orbit Ring */}
                <svg className="portrait-orbit-svg outer" viewBox="0 0 320 320" aria-hidden="true">
                  <circle
                    cx="160"
                    cy="160"
                    r="150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="6 8"
                  />
                </svg>

                {/* Inner Revolving Orbit Ring */}
                <svg className="portrait-orbit-svg inner" viewBox="0 0 320 320" aria-hidden="true">
                  <circle
                    cx="160"
                    cy="160"
                    r="136"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    opacity="0.65"
                  />
                </svg>

                {/* Circular Portrait Frame */}
                <div className="hero-portrait-frame">
                  <img
                    src="/profile.jpg"
                    alt="Ishaan Khan"
                    className="hero-portrait-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATEMENT SECTION */}
        <section id="about" className="hairline" style={{ paddingTop: '5rem', paddingBottom: '5.5rem' }}>
          <div className="site-container">
            <h2 className="display-lg" style={{ maxWidth: '58rem' }}>
              MOST SOFTWARE IS CLUNKY AND OVERCOMPLICATED.
              <br />
              I ENGINEER WHAT ACTUALLY PERFORMS.
            </h2>
            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <p
                style={{
                  maxWidth: '36rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: 'var(--muted-foreground)',
                }}
              >
                Too many web applications suffer from slow response times, bloated packages, and fragile AI gimmicks. 
                My focus is building lean web architectures paired with grounded RAG pipelines and autonomous agents that solve concrete business workflows.
              </p>
            </div>
          </div>
        </section>

        {/* SEE MY WORK - Alternating Visual Showcase */}
        <section id="work" className="hairline" style={{ paddingTop: '5.5rem', paddingBottom: '6rem' }}>
          <div className="site-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <div>
                <h2 className="display-lg">SEE MY WORK</h2>
              </div>
              <a
                href="https://github.com/ishaan-khann"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub Repositories (24)</span>
                <span className="arrow">↗</span>
              </a>
            </div>

            <div className="showcase-list">
              {/* Project 01: Luxe Staycations */}
              <div className="showcase-item">
                <div className="showcase-info">
                  <h3 className="showcase-title">LUXE STAYCATIONS</h3>
                  <div className="showcase-tagline">Hospitality & Booking Platform</div>
                  <p className="showcase-desc">
                    Architected and developed the digital presence of Luxe Staycations from frontend to backend. 
                    Engineered an interactive website with live booking widgets, high-converting guest funnels, and responsive multi-screen layouts.
                  </p>
                  <div className="showcase-tags">
                    <span className="showcase-tag"><ReactIcon size={14} /> React</span>
                    <span className="showcase-tag"><NextjsIcon size={14} /> Next.js</span>
                    <span className="showcase-tag"><NodeIcon size={14} /> Node.js</span>
                    <span className="showcase-tag"><TailwindIcon size={14} /> Tailwind CSS</span>
                  </div>
                  <div>
                    <a
                      href="https://luxestaycations.in"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.7rem 1.5rem', fontSize: '0.82rem' }}
                    >
                      Visit Luxe Staycations
                      <span className="arrow">↗</span>
                    </a>
                  </div>
                </div>

                <div className="showcase-visual">
                  <img
                    src="/luxestaycations.jpg"
                    alt="Luxe Staycations Hero Preview"
                    className="showcase-img"
                  />
                </div>
              </div>

              {/* Project 02: Elfinic Commerce (Alternating Reverse) */}
              <div className="showcase-item reverse">
                <div className="showcase-visual">
                  <img
                    src="/elfinic.png"
                    alt="Elfinic Commerce Preview"
                    className="showcase-img"
                  />
                </div>

                <div className="showcase-info">
                  <h3 className="showcase-title">ELFINIC COMMERCE</h3>
                  <div className="showcase-tagline">E-Commerce & UI Systems</div>
                  <p className="showcase-desc">
                    Engineered modular, high-performance UI components for production web applications. 
                    Prioritized zero layout shift, seamless multi-breakpoint responsiveness, and streamlined customer purchasing experiences.
                  </p>
                  <div className="showcase-tags">
                    <span className="showcase-tag"><ReactIcon size={14} /> React</span>
                    <span className="showcase-tag"><TypescriptIcon size={14} /> TypeScript</span>
                    <span className="showcase-tag"><ViteIcon size={14} /> Vite</span>
                    <span className="showcase-tag"><TailwindIcon size={14} /> Tailwind CSS</span>
                  </div>
                  <div>
                    <a
                      href="https://www.elfinic.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.7rem 1.5rem', fontSize: '0.82rem' }}
                    >
                      Visit Elfinic
                      <span className="arrow">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 03: MindWorks AI */}
              <div className="showcase-item">
                <div className="showcase-info">
                  <h3 className="showcase-title">MINDWORKS AI</h3>
                  <div className="showcase-tagline">AI & Digital Systems Studio</div>
                  <p className="showcase-desc">
                    The official digital home of MindWorks. Engineered with dark minimalism, interactive 3D sculptures, 
                    showcases for RAG retrieval engines, AI agents, and frictionless discovery onboarding.
                  </p>
                  <div className="showcase-tags">
                    <span className="showcase-tag"><PythonIcon size={14} /> Python</span>
                    <span className="showcase-tag"><ReactIcon size={14} /> React</span>
                    <span className="showcase-tag"><N8nIcon size={14} /> n8n</span>
                    <span className="showcase-tag"><PostgresIcon size={14} /> PostgreSQL</span>
                  </div>
                  <div>
                    <a
                      href="https://mindworksai.in"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.7rem 1.5rem', fontSize: '0.82rem' }}
                    >
                      Visit MindWorks
                      <span className="arrow">↗</span>
                    </a>
                  </div>
                </div>

                <div className="showcase-visual">
                  <img
                    src="/mindworks.png"
                    alt="MindWorks AI Preview"
                    className="showcase-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES / FOUR-COLUMN SECTION */}
        <section id="capabilities" className="hairline" style={{ paddingTop: '4.5rem', paddingBottom: '5rem' }}>
          <div className="site-container">
            <h2 className="display-lg">HOW I BUILD</h2>

            <ul className="four-col-grid">
              {CAPABILITIES.map((cap) => (
                <li key={cap.title} className="four-col-item">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{cap.icon}</span>
                    <h3 className="col-heading" style={{ marginBottom: 0 }}>{cap.title}</h3>
                  </div>
                  <p className="col-desc">{cap.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="hairline" style={{ paddingTop: '4.5rem', paddingBottom: '5.5rem' }}>
          <div className="site-container">
            <h2 className="display-lg" style={{ marginBottom: '2.5rem' }}>EXPERIENCE</h2>

            <div>
              {/* Luxe Staycations */}
              <div className="exp-row">
                <div>
                  <div className="exp-period">JUL 2024</div>
                  <div className="exp-company">LUXE STAYCATIONS</div>
                </div>
                <div>
                  <h3 className="exp-role">Full Stack Developer & Digital Growth</h3>
                  <p className="exp-body">
                    Architected and developed the digital presence from frontend widgets to backend booking pipelines, directly elevating guest conversions.
                  </p>
                </div>
              </div>

              {/* Elfinic Commerce */}
              <div className="exp-row">
                <div>
                  <div className="exp-period">AUG 2025</div>
                  <div className="exp-company">ELFINIC COMMERCE</div>
                </div>
                <div>
                  <h3 className="exp-role">Frontend Web Developer</h3>
                  <p className="exp-body">
                    Crafted responsive, high-performance UI components for production client web applications with strict focus on usability across devices.
                  </p>
                </div>
              </div>

              {/* MindWorks — earliest, at bottom */}
              <div className="exp-row">
                <div>
                  <div className="exp-period">2024 — PRESENT</div>
                  <div className="exp-company">MINDWORKS</div>
                </div>
                <div>
                  <h3 className="exp-role">Founder & Full Stack Lead</h3>
                  <p className="exp-body">
                    Founded an AI engineering and web studio building modern websites, custom applications, and autonomous agents for clients.
                  </p>
                  <p className="exp-body">
                    Engineered proprietary RAG knowledge engines, integrated multi-agent workflows, and deployed robust n8n backend automations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="hairline" style={{ paddingTop: '4.5rem', paddingBottom: '5.5rem' }}>
          <div className="site-container">
            <h2 className="display-lg" style={{ marginBottom: '2.5rem' }}>EDUCATION</h2>

            {/* Degree */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="exp-row">
                <div>
                  <div className="exp-period">2024 — PRESENT</div>
                  <div className="exp-company">IIT MADRAS</div>
                </div>
                <div>
                  <h3 className="exp-role">B.S. in Data Science</h3>
                  <p className="exp-body">
                    Indian Institute of Technology, Madras — one of India's most prestigious technical institutions. Rigorous training in data analytics, machine learning algorithms, computational mathematics, and database architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Honours & Achievements sub-section */}
            <div>
              <h3 className="edu-subheading">HONOURS & ACHIEVEMENTS</h3>
              <div className="honours-grid">
                <div className="honour-item">
                  <div className="honour-title">SummersHacks 2026</div>
                  <div className="honour-desc">Finalist — competitive national hackathon</div>
                </div>
                <div className="honour-item">
                  <div className="honour-title">PIWOT Hackathon</div>
                  <div className="honour-desc">Finalist — Design Department</div>
                </div>
                <div className="honour-item">
                  <div className="honour-title">Mumbai Hackathon</div>
                  <div className="honour-desc">Participant</div>
                </div>
                <div className="honour-item">
                  <div className="honour-title">GDG DevFest Mumbai</div>
                  <div className="honour-desc">Attendee — Google Developer Group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / CALL TO ACTION */}
        <section id="contact" className="hairline" style={{ paddingTop: '5.5rem', paddingBottom: '6rem' }}>
          <div className="site-container">
            <h2 className="display-xl" style={{ maxWidth: '58rem' }}>
              HAVE A SYSTEM IN MIND?
              <br />
              LET'S BUILD IT.
            </h2>

            <div
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <a href="mailto:khanishaan846@gmail.com" className="btn-primary" style={{ padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <MailIcon size={18} />
                <span>khanishaan846@gmail.com</span>
                <span className="arrow">→</span>
              </a>


              <a
                href="https://www.linkedin.com/in/ishaan-khan-5576352b8/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '1rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
                <span className="arrow">↗</span>
              </a>

              <a
                href="https://github.com/ishaan-khann"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '1rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
                <span className="arrow">↗</span>
              </a>

              <a
                href="tel:+918928237955"
                className="btn-secondary"
                style={{ padding: '1rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <PhoneIcon size={18} />
                <span>+91 8928237955</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-wrap">
        <div className="site-container">
          <div className="footer-bottom">
            <div>
              <span>© 2026 Ishaan Khan · </span>
              <span style={{ color: 'var(--foreground)' }}>Ishaan.mindworks.in</span>
            </div>

            <div className="footer-social-links">
              <a href="https://github.com/ishaan-khann" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <GithubIcon size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ishaan-khan-5576352b8/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a href="mailto:khanishaan846@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MailIcon size={14} /> Email
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
