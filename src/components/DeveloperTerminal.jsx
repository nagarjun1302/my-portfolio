import { useState, useEffect, useRef } from 'react';
import Interactive3DCard from './Interactive3DCard';

const terminalLogs = [
  { text: "nagarjun@portfolio:~$ pnpm run init-profile --name='P NAGARJUN'", delay: 300, type: "input" },
  { text: "Loading developer context (VIT Chennai - B.Tech ECM)...", delay: 600, type: "info" },
  { text: "[System] CGPA verified: 8.85 | Location: Chennai, TN", delay: 900, type: "success" },
  { text: "[Agentic AI] LangGraph + Groq multi-agent framework loaded", delay: 1400, type: "info" },
  { text: "[Agentic AI] Initialized Planner, Architect, Coder & Reviewer agents", delay: 1800, type: "success" },
  { text: "[LLM Stack] Google Gemini + LangChain + Supabase Auth active", delay: 2800, type: "info" },
  { text: "[IoT Sensor] OpenCV Raspberry Pi occupant detection stream active", delay: 3300, type: "info" },
  { text: "[Full-Stack] Express.js & MongoDB B2B catalog engine ready", delay: 3700, type: "success" },
  { text: "[Certifications] Oracle Agentic AI & Claude Code in Action verified", delay: 4200, type: "success" },
  { text: "[Ready] Portfolio backend listening on port 3000 ✔", delay: 4600, type: "accent" }
];

export default function DeveloperTerminal() {
  const [logs, setLogs] = useState([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState('agent_system.py');
  const logContainerRef = useRef(null);

  useEffect(() => {
    if (currentLogIndex >= terminalLogs.length) {
      const timer = setTimeout(() => {
        setLogs([]);
        setCurrentLogIndex(0);
      }, 6000);
      return () => clearTimeout(timer);
    }

    const log = terminalLogs[currentLogIndex];
    const timer = setTimeout(() => {
      setLogs((prev) => [...prev, log]);
      setCurrentLogIndex((prev) => prev + 1);
    }, log.delay - (currentLogIndex > 0 ? terminalLogs[currentLogIndex - 1].delay : 0));

    return () => clearTimeout(timer);
  }, [currentLogIndex]);

  // Scroll only the log container itself — never the page.
  useEffect(() => {
    const container = logContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [logs]);

  return (
    <Interactive3DCard maxTilt={10} className="w-full max-w-[560px] mx-auto shadow-2xl">
      <div className="terminal-shell bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg overflow-hidden shadow-2xl shadow-black/50">
        {/* Terminal Header */}
        <div className="bg-[#2c2c2c] border-b border-[#1a1a1a] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-emerald-400 text-[13px] leading-none shrink-0">▍</span>
            <span className="text-[12px] font-mono text-slate-300 truncate">
              nagarjun@portfolio<span className="text-slate-500">:</span>
              <span className="text-sky-400">~/projects</span>
              <span className="text-slate-500">$</span>
            </span>
          </div>
          <div className="flex items-center gap-3.5 text-slate-400 shrink-0 pl-3">
            <span className="text-[13px] leading-none cursor-pointer hover:text-slate-200">─</span>
            <span className="text-[11px] leading-none cursor-pointer hover:text-slate-200">▢</span>
            <span className="text-[14px] leading-none cursor-pointer hover:text-red-400">✕</span>
          </div>
        </div>

        {/* IDE Layout */}
        <div className="ide-container grid grid-cols-[135px_1fr] h-[380px] font-mono text-xs text-slate-300">
          {/* File Sidebar */}
          <div className="file-sidebar bg-[#181818] border-r border-[#3a3a3a] p-3 select-none flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 flex items-center gap-1">
                <span>⚡</span> Project Workspace
              </div>

              <div className="flex flex-col gap-1 text-[11px]">
                <button
                  onClick={() => setSelectedFile('agent_system.py')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'agent_system.py' ? 'bg-[#333333] text-emerald-300 border border-[#4a4a4a] font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-amber-400">🐍</span> agents.py
                </button>
                <button
                  onClick={() => setSelectedFile('sam_seg.py')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'sam_seg.py' ? 'bg-[#333333] text-emerald-300 border border-[#4a4a4a] font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-purple-400">🧠</span> sam_seg.py
                </button>
                <button
                  onClick={() => setSelectedFile('spec.json')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'spec.json' ? 'bg-[#333333] text-emerald-300 border border-[#4a4a4a] font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sky-400">📋</span> spec.json
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3a3a3a]">
              <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </div>
            </div>
          </div>

          {/* Editor & Console Output Area */}
          <div className="editor-area bg-[#1e1e1e] p-3.5 overflow-y-auto flex flex-col gap-3 scrollbar-thin select-text">
            {/* Header Code Spec Snippet based on selection */}
            <div className="bg-[#181818] border border-[#3a3a3a] p-3 rounded-md text-[11px] leading-relaxed text-slate-300 font-mono shrink-0">
              {selectedFile === 'agent_system.py' && (
                <>
                  <span className="text-purple-400">from</span> <span className="text-sky-300">langgraph.graph</span> <span className="text-purple-400">import</span> StateGraph<br />
                  <span className="text-purple-400">from</span> <span className="text-sky-300">groq</span> <span className="text-purple-400">import</span> Groq<br />
                  <span className="text-emerald-400"># Autonomous Multi-Agent Code Generator</span><br />
                  <span className="text-orange-300">agents</span> = [<span className="text-amber-300">"Planner"</span>, <span className="text-amber-300">"Architect"</span>, <span className="text-amber-300">"Coder"</span>, <span className="text-amber-300">"Reviewer"</span>]
                </>
              )}
              {selectedFile === 'sam_seg.py' && (
                <>
                  <span className="text-purple-400">import</span> cv2, torch<br />
                  <span className="text-purple-400">from</span> <span className="text-sky-300">segment_anything</span> <span className="text-purple-400">import</span> sam_model_registry<br />
                  <span className="text-emerald-400"># Deep-Sea Polymetallic Nodule Detection</span><br />
                  <span className="text-orange-300">accuracy</span> = <span className="text-emerald-400">97.90</span> <span className="text-slate-500"># NIOT Collaboration</span>
                </>
              )}
              {selectedFile === 'spec.json' && (
                <>
                  <span className="text-slate-400">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-sky-300">"name"</span>: <span className="text-amber-300">"Nagarjun"</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"degree"</span>: <span className="text-amber-300">"B.Tech ECM @ VIT Chennai"</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"cgpa"</span>: <span className="text-emerald-400">8.85</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"specialization"</span>: [<span className="text-amber-300">"Agentic AI"</span>, <span className="text-amber-300">"End-to-End Applications"</span>]<br />
                  <span className="text-slate-400">{"}"}</span>
                </>
              )}
            </div>

            {/* Live Terminal Streaming Log */}
            <div ref={logContainerRef} className="flex-1 flex flex-col gap-1 text-[11px] min-h-0 pt-1 overflow-y-auto">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 flex items-center justify-between shrink-0">
                <span>Terminal Stream</span>
                <span className="text-emerald-400">bash 5.2</span>
              </div>
              {logs.map((log, index) => {
                let colorClass = "text-slate-400";
                if (log.type === "input") colorClass = "text-sky-300 font-semibold";
                if (log.type === "success") colorClass = "text-emerald-400";
                if (log.type === "info") colorClass = "text-slate-300";
                if (log.type === "accent") colorClass = "text-amber-300 font-semibold";

                return (
                  <div key={index} className={`font-mono leading-relaxed break-all ${colorClass}`}>
                    {log.text}
                  </div>
                );
              })}
              {currentLogIndex < terminalLogs.length && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Interactive3DCard>
  );
}