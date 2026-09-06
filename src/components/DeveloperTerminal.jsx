import { useState, useEffect } from 'react';
import Interactive3DCard from './Interactive3DCard';

const terminalLogs = [
  { text: "$ pnpm run init-profile --name='P NAGARJUN'", delay: 300, type: "input" },
  { text: "> Loading developer context (VIT Chennai - B.Tech ECM)...", delay: 600, type: "info" },
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

  return (
    <Interactive3DCard maxTilt={10} className="w-full max-w-[560px] mx-auto shadow-2xl">
      <div className="terminal-shell bg-[#0a0d16]/95 border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="bg-[#0f1424] border-b border-[#1e293b] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm shadow-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm shadow-amber-500/50" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm shadow-emerald-500/50" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
              nagarjun_system.v2
            </span>
          </div>
          <div className="w-12 text-right">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
          </div>
        </div>

        {/* IDE Layout */}
        <div className="ide-container grid grid-cols-[135px_1fr] h-[350px] font-mono text-xs text-slate-300">
          {/* File Sidebar */}
          <div className="file-sidebar bg-[#050810] border-r border-[#1e293b]/80 p-3 select-none flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 flex items-center gap-1">
                <span>⚡</span> Project Workspace
              </div>
              
              <div className="flex flex-col gap-1 text-[11px]">
                <button
                  onClick={() => setSelectedFile('agent_system.py')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'agent_system.py' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-amber-400">🐍</span> agents.py
                </button>
                <button
                  onClick={() => setSelectedFile('sam_seg.py')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'sam_seg.py' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-purple-400">🧠</span> sam_seg.py
                </button>
                <button
                  onClick={() => setSelectedFile('spec.json')}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded transition-all text-left ${
                    selectedFile === 'spec.json' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sky-400">📋</span> spec.json
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1e293b]/60">
              <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </div>
            </div>
          </div>

          {/* Editor & Console Output Area */}
          <div className="editor-area bg-[#090c15] p-3.5 overflow-y-auto flex flex-col gap-3 scrollbar-thin select-text">
            {/* Header Code Spec Snippet based on selection */}
            <div className="bg-[#05070e] border border-[#1e293b]/80 p-3 rounded-lg text-[11px] leading-relaxed text-slate-300 font-mono">
              {selectedFile === 'agent_system.py' && (
                <>
                  <span className="text-purple-400">from</span> <span className="text-sky-300">langgraph.graph</span> <span className="text-purple-400">import</span> StateGraph<br />
                  <span className="text-purple-400">from</span> <span className="text-sky-300">groq</span> <span className="text-purple-400">import</span> Groq<br />
                  <span className="text-emerald-400"># Autonomous Multi-Agent Code Generator</span><br />
                  <span className="text-indigo-300">agents</span> = [<span className="text-amber-300">"Planner"</span>, <span className="text-amber-300">"Architect"</span>, <span className="text-amber-300">"Coder"</span>, <span className="text-amber-300">"Reviewer"</span>]
                </>
              )}
              {selectedFile === 'sam_seg.py' && (
                <>
                  <span className="text-purple-400">import</span> cv2, torch<br />
                  <span className="text-purple-400">from</span> <span className="text-sky-300">segment_anything</span> <span className="text-purple-400">import</span> sam_model_registry<br />
                  <span className="text-emerald-400"># Deep-Sea Polymetallic Nodule Detection</span><br />
                  <span className="text-indigo-300">accuracy</span> = <span className="text-emerald-400">97.90</span> <span className="text-slate-400"># NIOT Collaboration</span>
                </>
              )}
              {selectedFile === 'spec.json' && (
                <>
                  <span className="text-indigo-400">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-sky-300">"name"</span>: <span className="text-amber-300">"Nagarjun"</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"degree"</span>: <span className="text-amber-300">"B.Tech ECM @ VIT Chennai"</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"cgpa"</span>: <span className="text-emerald-400">8.85</span>,<br />
                  &nbsp;&nbsp;<span className="text-sky-300">"specialization"</span>: [<span className="text-amber-300">"Agentic AI"</span>, <span className="text-amber-300">"End-to-End Applications"</span>]<br />
                  <span className="text-indigo-400">{"}"}</span>
                </>
              )}
            </div>

            {/* Live Terminal Streaming Log */}
            <div className="flex-1 flex flex-col gap-1 text-[11px] min-h-0 pt-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Terminal Stream</span>
                <span className="text-indigo-400">bash 5.2</span>
              </div>
              {logs.map((log, index) => {
                let colorClass = "text-slate-400";
                if (log.type === "input") colorClass = "text-sky-300 font-semibold";
                if (log.type === "success") colorClass = "text-emerald-400";
                if (log.type === "info") colorClass = "text-indigo-300";
                if (log.type === "accent") colorClass = "text-amber-300 font-semibold";

                return (
                  <div key={index} className={`font-mono leading-relaxed break-all ${colorClass}`}>
                    {log.text}
                  </div>
                );
              })}
              {currentLogIndex < terminalLogs.length && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-3 bg-indigo-400 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Interactive3DCard>
  );
}
