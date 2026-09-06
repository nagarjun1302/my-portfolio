import { useState, useEffect } from 'react';
import DotGrid from './components/DotGrid';
import DeveloperTerminal from './components/DeveloperTerminal';
import SkillIcon from './components/SkillIcons';
import TechStackGrid from './components/TechStackGrid';
import MorphParticles from './components/MorphParticles';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copiedField, setCopiedField] = useState(null);
  const [projectCategory, setProjectCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to update header appearance and active tab
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'experience', 'projects', 'skills', 'certificates', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const projectsData = [
    {
      id: 'nutrition',
      title: 'South Indian Nutrition Advisor',
      tagline: 'AI-Powered Dietary & Glycemic Risk Assessment System',
      category: 'ai',
      categoryLabel: 'Agentic AI & LLMs',
      date: 'Jul. 2026 – Aug. 2026',
      github: 'https://github.com/nagarjun1302/south-indian-nutrition-advisor',
      bullets: [
        'Built an end-to-end AI nutrition advisor tailored for South Indian cuisine using Google Gemini and LangChain for multi-step meal analysis, glycemic risk assessment, and ingredient-level dietary recommendations.',
        'Integrated Supabase for secure user authentication (Google OAuth + Email) with Row Level Security (RLS) policies protecting user meal logs.',
        'Automated personalised email nutrition report delivery via Gmail REST API with zero manual intervention.'
      ],
      tech: ['Python', 'FastAPI', 'Google Gemini API', 'LangChain', 'Supabase', 'Email Automation']
    },
    {
      id: 'code-gen',
      title: 'Multi-Agent Autonomous Code Generator',
      tagline: 'Self-Coordinating LLM Framework for Full Codebase Synthesis',
      category: 'ai',
      categoryLabel: 'Agentic AI & LLMs',
      date: 'Jun. 2026 – Jul. 2026',
      github: 'https://github.com/nagarjun1302/agentriq-ai',
      bullets: [
        'Developed a multi-agent AI framework using LangGraph that converts a natural language prompt into a fully generated codebase via coordinated Planner, Architect, Coder, and Reviewer agents.',
        'Built a FastAPI streaming backend with live agent execution timeline, interactive file browser, and instant ZIP project download.',
        'Leveraged Groq LLM inference for ultra-fast, low-latency code generation across complex project architectures.'
      ],
      tech: ['Python', 'LangGraph', 'FastAPI', 'Groq', 'Agentic AI']
    },
    {
      id: 'elevator',
      title: 'Smart Elevator Automation Prototype',
      tagline: 'Embedded IoT & Computer Vision Lift Dispatcher',
      category: 'iot',
      categoryLabel: 'IoT & Computer Vision',
      date: 'Mar. 2024 – Apr. 2024',
      github: 'https://github.com/nagarjun1302/smart-elevator-automation',
      bullets: [
        'Built a smart elevator system using Raspberry Pi, PIR, ultrasonic sensors, and OpenCV-based computer vision for real-time occupant detection and intelligent floor-stopping.',
        'Optimized elevator passenger dispatching and energy consumption in high-density building prototypes.',
        'Engineered real-time sensor processing pipelines with Python and embedded hardware interrupts.'
      ],
      tech: ['OpenCV', 'Python', 'Computer Vision', 'IoT', 'Raspberry Pi']
    }
  ];

  const certificatesData = [
    // 1. FIRST ORACLE
    {
      id: 'oracle-ai',
      title: 'Oracle Agentic AI Certified Foundations Associate',
      issuer: 'Oracle Corporation',
      issuerTag: 'Oracle',
      date: 'Aug. 2026',
      desc: 'Demonstrates foundational expertise in multi-agent system architecture, autonomous decision loops, tool integrations, and enterprise AI orchestration.',
      badgeColor: 'border-l-indigo-600 hover:border-indigo-500',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E39AEE06227E02036D56B757EA8B81F332672980C63E1778ECCBCDF0AADA500'
    },
    // 2. THEN 4 ANTHROPIC COURSES
    {
      id: 'claude-101',
      title: 'Claude 101',
      issuer: 'Anthropic',
      issuerTag: 'Anthropic',
      date: 'Jul. 2026',
      desc: 'Verifies proficiency in Claude core features, prompting fundamentals, context window management, and everyday AI productivity workflows.',
      badgeColor: 'border-l-indigo-600 hover:border-indigo-500',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      link: 'https://verify.skilljar.com/c/e8hfk8typb7r'
    },
    {
      id: 'claude-code',
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      issuerTag: 'Anthropic',
      date: 'Jul. 2026',
      desc: 'Practical certification covering advanced prompt engineering, automated code refactoring, context optimization, and agentic CLI workflows using Claude.',
      badgeColor: 'border-l-indigo-600 hover:border-indigo-500',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      link: 'https://verify.skilljar.com/c/sh5ux32pbeyo'
    },
    {
      id: 'custom-tools',
      title: 'Building Custom Tools for Claude',
      issuer: 'Anthropic',
      issuerTag: 'Anthropic',
      date: 'Jul. 2026',
      desc: 'Specialized training on function calling, API tool definitions, JSON schema parameters, and agentic execution pipelines with Claude.',
      badgeColor: 'border-l-indigo-600 hover:border-indigo-500',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      link: 'https://verify.skilljar.com/c/sh5ux32pbeyo'
    },
    {
      id: 'mcp-intro',
      title: 'Introduction to Model Context Protocol',
      issuer: 'Anthropic',
      issuerTag: 'Anthropic',
      date: 'Jul. 2026',
      desc: 'Certification in Model Context Protocol (MCP) standards, building client-server protocol bridges, and connecting LLMs to external tools and databases.',
      badgeColor: 'border-l-indigo-600 hover:border-indigo-500',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      link: 'https://verify.skilljar.com/c/iskbyca3qx3j'
    }
  ];

  const filteredProjects = projectCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectCategory);

  return (
    <div className="portfolio-app min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* TOAST NOTIFICATION FOR COPY */}
      {copiedField && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-bounce">
          <span className="text-emerald-400 font-bold">✓</span> Copied {copiedField} to clipboard!
        </div>
      )}

      {/* FIXED NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-slate-200/90 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Tech Stack' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveSection(tab.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* Resume Download CTA */}
          <a
            href="/nagarjun_resume_2.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION - LIGHT MODE                                              */}
      {/* ========================================================================= */}
      <section id="home" className="relative w-full bg-[#f8fafc] text-slate-800 pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-200/80">
        
        {/* Interactive Morph Canvas Background */}
        <MorphParticles theme="light" className="opacity-80" />

        {/* Subtle Ambient Glowing Orbs */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-sky-200/30 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
        
        {/* Clean Static Tactile Grid Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <DotGrid dotColor="148, 163, 184" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Bio Column */}
            <div className="flex flex-col gap-5 text-left">
              
              {/* Big Name Title */}
              <h1 className="flex flex-col tracking-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-600">
                  Hi, I'm
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-none">
                  P Nagarjun
                </span>
              </h1>

              {/* Reduced Headline */}
              <h2 className="mt-10 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                Engineering <br className="hidden sm:inline" />
                <span className="text-indigo-600">Agentic AI Systems</span> <br className="hidden sm:inline" />
                & End-to-End Applications.
              </h2>

              {/* Sub-paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[560px]">
                A final-year B.Tech Electronics & Computer Engineering student at <strong className="text-slate-900 font-semibold">VIT Chennai</strong>. Specializing in multi-agent LLM frameworks, and full-stack AI web platforms.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="/nagarjun_resume_2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>View Full Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-indigo-500 hover:bg-slate-50 text-slate-800 font-semibold text-xs px-6 py-3.5 rounded-xl shadow-sm transition-all"
                >
                  <span>Contact Me</span>
                </a>
              </div>

            </div>

            {/* Right Terminal Column */}
            <div className="relative flex justify-center items-center">
              <DeveloperTerminal />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LIGHT MODE SECTIONS REGION (WHITISH BACKGROUND, CLEAN ELEGANT UI)        */}
      {/* ========================================================================= */}
      <main className="relative w-full bg-[#f8fafc] text-slate-800">
        
        {/* Subtle decorative background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-24 md:gap-32">

          {/* ----------------------------------------------------------------------- */}
          {/* 2. EXPERIENCE SECTION (WORK & RESEARCH)                                 */}
          {/* ----------------------------------------------------------------------- */}
          <section id="experience" className="flex flex-col gap-10 scroll-mt-28">
            <div className="flex flex-col gap-2 border-l-4 border-indigo-600 pl-4">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Career Roadmap
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Work & Research Experience
              </h2>
              <p className="text-sm text-slate-600">
                Industry internships and specialized computer vision research initiatives
              </p>
            </div>

            <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10">
              
              {/* Experience 1: Loyalty Automation */}
              <div className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 shadow-md group-hover:scale-125 transition-transform" />
                
                <div className="bg-white border border-slate-200/90 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-indigo-50 text-indigo-700 font-mono text-[11px] font-bold rounded-md mb-1.5 border border-indigo-100">
                        AI & Web Development Intern
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        Loyalty Automation Pvt Ltd, Chennai
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto border border-slate-200">
                      Jun. 2026 – Jul. 2026
                    </span>
                  </div>

                  <ul className="text-sm text-slate-600 space-y-2.5 list-disc pl-5 leading-relaxed">
                    <li>
                      Built and maintained a B2B product catalog platform using <strong className="text-slate-900 font-semibold">Express.js and MongoDB</strong>.
                    </li>
                    <li>
                      Developed an <strong className="text-indigo-700 font-semibold">Agentic AI chatbot</strong> with <strong className="text-indigo-700 font-semibold">LangGraph + Groq</strong>, enabling product search via natural language.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Express.js', 'MongoDB', 'LangGraph', 'Groq', 'Agentic AI'].map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono text-slate-700 font-medium">
                        <SkillIcon name={tech} className="w-3.5 h-3.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 2: CADS VIT Chennai */}
              <div className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 shadow-md group-hover:scale-125 transition-transform" />
                
                <div className="bg-white border border-slate-200/90 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-purple-50 text-purple-700 font-mono text-[11px] font-bold rounded-md mb-1.5 border border-purple-100">
                        Research Intern
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        Centre for Advanced Data Science (CADS), VIT Chennai
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto border border-slate-200">
                      Jun. 2024 – Nov. 2024
                    </span>
                  </div>

                  <ul className="text-sm text-slate-600 space-y-2.5 list-disc pl-5 leading-relaxed">
                    <li>
                      Developed a deep-sea image segmentation framework in collaboration with <strong className="text-slate-900 font-semibold">NIOT</strong> for polymetallic nodule detection, achieving <strong className="text-purple-700 font-semibold">97.90% accuracy</strong> with custom annotated datasets.
                    </li>
                    <li>
                      Presented the work at the <strong className="text-slate-900 font-semibold">7th International Conference on Ocean Engineering (ICOE 2025)</strong>.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['OpenCV', 'Computer Vision', 'Python', 'NIOT Research', 'ICOE 2025'].map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono text-slate-700 font-medium">
                        <SkillIcon name={tech} className="w-3.5 h-3.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 3. FEATURED PROJECTS SECTION                                            */}
          {/* ----------------------------------------------------------------------- */}
          <section id="projects" className="flex flex-col gap-10 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-indigo-600 pl-4">
              <div>
                <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                  Software Engineering
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Selected autonomous AI agents, computer vision models, and full-stack prototypes
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm self-start md:self-auto">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'ai', label: 'Agentic AI & LLMs' },
                  { id: 'iot', label: 'CV & IoT' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setProjectCategory(tab.id)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                      projectCategory === tab.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 border-t-4 border-t-indigo-500 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-4">
                    
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-medium">
                        {project.date}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed border-t border-slate-100 pt-4">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack & Resume GitHub Source Code Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[11px] font-mono text-slate-700 font-medium"
                        >
                          <SkillIcon name={t} className="w-3.5 h-3.5" />
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100/80">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 hover:border-indigo-600 transition-all font-mono shadow-sm group/btn"
                      >
                        <SkillIcon name="GitHub" className="w-4 h-4" />
                        <span>View Source Code</span>
                        <span className="text-xs group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 4. TECH STACK & SKILLS SECTION (ICON-ONLY GRID WITH HOVER TOOLTIPS)   */}
          {/* ----------------------------------------------------------------------- */}
          <section id="skills" className="flex flex-col gap-10 scroll-mt-28">
            <div className="flex flex-col gap-2 border-l-4 border-indigo-600 pl-4">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Technology Toolbox
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Tech Stack
              </h2>
              <p className="text-sm text-slate-600">
                Languages, Frontend & Fullstack, Backend & DB, Official AI logos (LangChain & LangGraph), and Hardware (Hover to reveal technology name)
              </p>
            </div>

            {/* Icon-Only Grid Component with Official Logos & Uniform 50px Sizing */}
            <TechStackGrid />
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 5. CERTIFICATES SECTION (FIRST ORACLE, THEN 4 ANTHROPIC COURSES)       */}
          {/* ----------------------------------------------------------------------- */}
          <section id="certificates" className="flex flex-col gap-10 scroll-mt-28">
            <div className="flex flex-col gap-2 border-l-4 border-indigo-600 pl-4">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Credentials & Accreditation
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Certifications
              </h2>
              <p className="text-sm text-slate-600">
                Verified certifications starting with Oracle Agentic AI followed by Anthropic Claude specializations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className={`bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 ${cert.badgeColor}`}
                >
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${cert.tagColor}`}>
                          {cert.issuerTag}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        Issuer: {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-end">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 font-mono transition-colors flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 6. EDUCATION SECTION                                                    */}
          {/* ----------------------------------------------------------------------- */}
          <section id="education" className="flex flex-col gap-10 scroll-mt-28">
            <div className="flex flex-col gap-2 border-l-4 border-indigo-600 pl-4">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Academic Background
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
              <p className="text-sm text-slate-600">
                Formal engineering degree and higher secondary education milestones
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* VIT Chennai */}
              <div className="bg-white border border-slate-200 p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border-t-4 border-t-indigo-600">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md max-w-max">
                    2023 – 2027
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Vellore Institute of Technology, Chennai
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    B.Tech in Electronics and Computer Engineering
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Cumulative Grade</span>
                  <span className="text-sm font-mono font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    CGPA: 8.85
                  </span>
                </div>
              </div>

              {/* Sri Chaitanya - Class 12 */}
              <div className="bg-white border border-slate-200 p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border-t-4 border-t-purple-600">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md max-w-max">
                    2022 – 2023
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Sri Chaitanya Techno School, Mylapore
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Class 12 Higher Secondary Education
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Board Score</span>
                  <span className="text-sm font-mono font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                    92%
                  </span>
                </div>
              </div>

              {/* Sri Chaitanya - Class 10 */}
              <div className="bg-white border border-slate-200 p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border-t-4 border-t-sky-600">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md max-w-max">
                    2020 – 2021
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Sri Chaitanya Techno School, K K Nagar
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Class 10 Secondary Education
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Board Score</span>
                  <span className="text-sm font-mono font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                    97.8%
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 7. CONTACT SECTION                                                      */}
          {/* ----------------------------------------------------------------------- */}
          <section id="contact" className="flex flex-col gap-10 border-t border-slate-200 pt-16 mb-8 scroll-mt-28">
            <div className="flex flex-col gap-2 border-l-4 border-indigo-600 pl-4">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Contact & Links
              </h2>
              <p className="text-sm text-slate-600">
                Available for AI development roles, software engineering internships, and research collaborations
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              
              {/* Email */}
              <button
                onClick={() => copyToClipboard('nagarjun1302@gmail.com', 'Email')}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500 transition-all text-left group flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  ✉
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Email</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                    nagarjun1302@gmail.com
                  </h4>
                  <span className="text-[10px] text-indigo-600 font-semibold mt-1 inline-block">Click to copy</span>
                </div>
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/nagarjun1302"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500 transition-all group flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                  <SkillIcon name="GitHub" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">GitHub</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    github.com/nagarjun1302
                  </h4>
                  <span className="text-[10px] text-slate-500 font-semibold mt-1 inline-block">Open profile ↗</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nagarjun-p-b698852a0/"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500 transition-all group flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  🔗
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">LinkedIn</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    linkedin.com/in/nagarjun-p
                  </h4>
                  <span className="text-[10px] text-blue-600 font-semibold mt-1 inline-block">Open profile ↗</span>
                </div>
              </a>

            </div>
          </section>

        </div>
      </main>

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200 py-8 bg-white text-center text-xs font-mono text-slate-500">
  <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
    <div>
      Designed & Built by Nagarjun.
    </div>
  </div>
</footer>

    </div>
  );
}
