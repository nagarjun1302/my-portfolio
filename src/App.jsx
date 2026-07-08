import { useState } from 'react';
import DotGrid from './components/DotGrid';
import MorphParticles from './components/MorphParticles';
import DeveloperTerminal from './components/DeveloperTerminal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const skills = [
    { name: 'LangGraph', category: 'AI/ML' },
    { name: 'SAM 2.1', category: 'AI/ML' },
    { name: 'Gemini API', category: 'AI/ML' },
    { name: 'OpenCV', category: 'AI/ML' },
    { name: 'Python', category: 'Programming' },
    { name: 'C++', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'Next.js', category: 'Tools' },
    { name: 'Express.js', category: 'Tools' },
    { name: 'MongoDB', category: 'Tools' },
    { name: 'Raspberry Pi', category: 'Tools' }
  ];

  return (
    <main className="portfolio-shell bg-[#020306] text-[#f6f7fb] min-h-screen relative overflow-x-hidden font-sans">
      {/* HERO & HEADER REGION */}
      <div className="relative w-full bg-black border-b border-[#1e293b]/25">
        {/* Background visual components for Hero region */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
          <DotGrid dotColor="140, 150, 180" />
        </div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#312e81]/15 to-[#1e1b4b]/10 blur-[140px] pointer-events-none z-0" />

      {/* Navigation header */}
      <header className="relative z-50 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" onClick={() => setActiveTab('home')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#ec4899] p-[1.5px] shadow-lg shadow-indigo-500/10">
            <div className="w-full h-full bg-[#080a10] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-sm select-none">
              PN
            </div>
          </div>
          <span className="font-semibold text-sm tracking-wide text-[#f1f5f9] group-hover:text-white transition-colors">
            Nagarjun
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-[#090d16]/85 border border-[#1e293b]/70 px-2 py-1.5 rounded-full backdrop-blur-md shadow-xl">
          {['home', 'experience', 'projects', 'skills', 'contact'].map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-medium px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-600/20'
                  : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        <a
          href="/nagarjun_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold px-4.5 py-2.5 rounded-full border border-[#1e293b] bg-[#090d16]/80 text-[#f1f5f9] hover:bg-white/5 hover:text-white transition-all select-none shadow-md backdrop-blur-sm"
        >
          Resume
        </a>
      </header>

        {/* Hero Section Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 md:py-16">
          {/* HERO SECTION */}
          <section id="home" className="relative grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center min-h-[calc(100vh-140px)]">
            {/* Background 3D effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <MorphParticles presetIndex={1} />
            </div>

          <div className="relative z-10 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[11px] font-semibold text-indigo-300 tracking-wider uppercase max-w-max select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              ECE Student & AI Developer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
              Building intelligent <br />
              systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                AI & Computer Vision.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-[540px]">
              Final-year Electronics & Computer Engineering student at VIT Chennai. Specializing in agentic AI assistants, image segmentation, and production web apps. Experienced in deep-sea computer vision research and full-stack catalog systems.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="/nagarjun_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all select-none"
              >
                View Full Resume
                <span className="text-sm">→</span>
              </a>
              <a
                href="mailto:nagarjun1302@gmail.com"
                className="inline-flex items-center gap-2 border border-[#1e293b] bg-[#090d16]/80 hover:bg-white/5 text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all select-none"
              >
                Contact Me
              </a>
            </div>

            {/* Micro skill row */}
            <div className="flex flex-wrap gap-2.5 mt-4 border-t border-[#1e293b]/50 pt-6">
              {skills.slice(0, 7).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-lg bg-[#0d121f]/60 border border-[#1e293b] text-[#94a3b8] text-[10px] font-mono hover:text-white hover:border-[#38bdf8]/50 hover:bg-[#080d19] transition-all cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-center items-center">
            <DeveloperTerminal />
          </div>
        </section>
      </div>
    </div>

    {/* OTHER SECTIONS REGION */}
    <div className="relative w-full bg-[#020306]">
      {/* Background visual components for other sections */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <DotGrid dotColor="140, 150, 180" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4338ca]/10 to-[#312e81]/10 blur-[130px] pointer-events-none z-0" />

      {/* Main Container for sections below */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-24 md:gap-36">

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Work & Research</h2>
            <p className="text-xs md:text-sm text-[#64748b]">My recent internship and academic research records</p>
          </div>

          <div className="grid gap-8 max-w-4xl border-l border-[#1e293b] pl-6 md:pl-8 ml-3 relative">
            {/* Loyalty Automation */}
            <div className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-[10px] h-[10px] rounded-full bg-indigo-500 border-2 border-[#020306] group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />
              
              <div className="bg-[#080c14]/60 border border-[#1e293b]/80 p-6 rounded-xl backdrop-blur-sm group-hover:border-indigo-500/50 transition-all flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      AI and Web Development Intern
                    </h3>
                    <div className="text-xs text-[#94a3b8] font-medium mt-0.5">
                      Loyalty Automation Pvt Ltd, Chennai
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-md sm:self-start">
                    May 2026 – Jun 2026
                  </span>
                </div>

                <ul className="text-xs text-[#94a3b8] space-y-2 list-disc pl-4 leading-relaxed mt-1">
                  <li>
                    Built and maintained a B2B product catalog platform using <strong className="text-[#f1f5f9]">Next.js, Express.js, and MongoDB</strong>. Integrated the inquiry system with the company CRM for automated lead capture.
                  </li>
                  <li>
                    Developed an <strong className="text-[#f1f5f9]">agentic AI chatbot</strong> with <strong className="text-[#f1f5f9]">LangGraph + Groq</strong>, enabling product search and inquiry-quotation submission via natural language, deployed with <code className="text-[10px] font-mono text-indigo-300 bg-[#0d121f] px-1.5 py-0.5 rounded">llama-4-scout-17b-16e-instruct</code>.
                  </li>
                </ul>
              </div>
            </div>

            {/* CADS VIT Chennai */}
            <div className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-[10px] h-[10px] rounded-full bg-indigo-500 border-2 border-[#020306] group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />
              
              <div className="bg-[#080c14]/60 border border-[#1e293b]/80 p-6 rounded-xl backdrop-blur-sm group-hover:border-indigo-500/50 transition-all flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      Research Intern
                    </h3>
                    <div className="text-xs text-[#94a3b8] font-medium mt-0.5">
                      Centre for Advanced Data Science (CADS), VIT Chennai
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-md sm:self-start">
                    Jun 2024 – Nov 2024
                  </span>
                </div>

                <ul className="text-xs text-[#94a3b8] space-y-2 list-disc pl-4 leading-relaxed mt-1">
                  <li>
                    Developed a deep-sea image segmentation framework in collaboration with NIOT for polymetallic nodule detection, achieving <strong className="text-[#f1f5f9]">97.90% accuracy using SAM 2.1</strong> with custom annotated datasets.
                  </li>
                  <li>
                    Presented the work at the <strong className="text-[#f1f5f9]">7th International Conference on Ocean Engineering (ICOE 2025)</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="text-xs md:text-sm text-[#64748b]">Selected applications and systems built recently</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {/* South Indian Nutrition Advisor */}
            <div className="group bg-[#080c14]/65 border border-[#1e293b]/80 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-bold tracking-wider">
                  Agentic AI & LLMs
                </span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94a3b8] hover:text-white text-xs flex items-center gap-1 font-mono transition-colors"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  South Indian Nutrition Advisor
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  An AI-powered meal recommendations assistant tailored for South Indian cuisine, processing food ingredient logs and delivering email reports automatically.
                </p>
              </div>

              <ul className="text-xs text-[#94a3b8] list-disc pl-4 space-y-1 mt-1 flex-1 leading-relaxed">
                <li>Uses <strong className="text-[#f1f5f9]">Google Gemini & LangGraph</strong> for multi-step food analysis and custom dietary guides.</li>
                <li>Automates deliveries of personalized dietary PDF reviews via secure SMTP protocols with zero manual intervention.</li>
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1e293b]/40">
                {['Python', 'Gemini API', 'LangGraph', 'Agentic AI', 'SMTP'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[#04060a]/90 border border-[#1e293b] rounded text-[10px] font-mono text-[#64748b] hover:text-white cursor-default transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Smart Elevator Prototype */}
            <div className="group bg-[#080c14]/65 border border-[#1e293b]/80 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold tracking-wider">
                  IoT & Computer Vision
                </span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94a3b8] hover:text-white text-xs flex items-center gap-1 font-mono transition-colors"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Smart Elevator Automation
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  An embedded IoT system prototyping modern elevator control using computer vision algorithms to detect occupant numbers and optimize lift routing in high-rise buildings.
                </p>
              </div>

              <ul className="text-xs text-[#94a3b8] list-disc pl-4 space-y-1 mt-1 flex-1 leading-relaxed">
                <li>Built core routing firmware on <strong className="text-[#f1f5f9]">Raspberry Pi</strong> interfaces with integrated ultrasonic and motion detector sensors.</li>
                <li>Utilized <strong className="text-[#f1f5f9]">OpenCV</strong> algorithms for real-time occupant detection and smart queue optimization.</li>
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1e293b]/40">
                {['OpenCV', 'Python', 'Raspberry Pi', 'IoT', 'Computer Vision'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[#04060a]/90 border border-[#1e293b] rounded text-[10px] font-mono text-[#64748b] hover:text-white cursor-default transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
            <p className="text-xs md:text-sm text-[#64748b]">My core engineering toolbox</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {/* AI/ML */}
            <div className="bg-[#080c14]/50 border border-[#1e293b]/80 p-6 rounded-xl flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 font-mono">AI & Machine Learning</h3>
              <div className="flex flex-col gap-3">
                {skills.filter(s => s.category === 'AI/ML').map(s => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-[#f1f5f9]">{s.name}</span>
                    <span className="text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded font-mono">Expert</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="bg-[#080c14]/50 border border-[#1e293b]/80 p-6 rounded-xl flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono">Languages</h3>
              <div className="flex flex-col gap-3">
                {skills.filter(s => s.category === 'Programming').map(s => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-[#f1f5f9]">{s.name}</span>
                    <span className="text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">Fluent</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-[#080c14]/50 border border-[#1e293b]/80 p-6 rounded-xl flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono">Tools & Web Stacks</h3>
              <div className="flex flex-col gap-3">
                {skills.filter(s => s.category === 'Tools').map(s => (
                  <div key={s.name} className="flex justify-between items-center text-xs">
                    <span className="text-[#f1f5f9]">{s.name}</span>
                    <span className="text-[10px] text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded font-mono">Advanced</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="bg-[#080c14]/40 border border-[#1e293b]/80 rounded-xl p-8 max-w-4xl flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">Academic Background</div>
            <h3 className="text-lg font-bold text-white">Vellore Institute of Technology, Chennai</h3>
            <p className="text-xs text-[#94a3b8] mt-0.5">B.Tech in Electronics and Computer Engineering</p>
          </div>
          <div className="flex flex-col sm:items-end justify-between gap-2">
            <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-md self-start sm:self-auto">
              2023 – 2027
            </span>
            <div className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">
              CGPA: 8.85
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="flex flex-col gap-10 border-t border-[#1e293b]/50 pt-16 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Let's Connect</h2>
            <p className="text-xs md:text-sm text-[#64748b]">Get in touch for internships, collaborations, or opportunities</p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="mailto:nagarjun1302@gmail.com"
              className="flex items-center gap-3 bg-[#080c14]/70 border border-[#1e293b]/80 px-6 py-4 rounded-xl hover:border-indigo-500 hover:bg-[#0d1322] transition-all group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">✉</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#64748b] uppercase font-bold tracking-wider">Email Me</span>
                <span className="text-xs text-[#e2e8f0] font-medium">nagarjun1302@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+919789051809"
              className="flex items-center gap-3 bg-[#080c14]/70 border border-[#1e293b]/80 px-6 py-4 rounded-xl hover:border-indigo-500 hover:bg-[#0d1322] transition-all group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">📞</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#64748b] uppercase font-bold tracking-wider">Call Me</span>
                <span className="text-xs text-[#e2e8f0] font-medium">+91 9789051809</span>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#080c14]/70 border border-[#1e293b]/80 px-6 py-4 rounded-xl hover:border-indigo-500 hover:bg-[#0d1322] transition-all group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">💻</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#64748b] uppercase font-bold tracking-wider">GitHub</span>
                <span className="text-xs text-[#e2e8f0] font-medium">github.com/nagarjun</span>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#080c14]/70 border border-[#1e293b]/80 px-6 py-4 rounded-xl hover:border-indigo-500 hover:bg-[#0d1322] transition-all group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">🔗</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#64748b] uppercase font-bold tracking-wider">LinkedIn</span>
                <span className="text-xs text-[#e2e8f0] font-medium">linkedin.com/in/nagarjun</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>

    {/* Footer copyright */}
    <footer className="border-t border-[#1e293b]/30 py-8 text-center text-[10px] font-mono text-[#475569] relative z-10 bg-[#020306]">
      © {new Date().getFullYear()} P Nagarjun. All rights reserved. Designed with tactile grids & morphing systems.
    </footer>
  </main>
);
}
