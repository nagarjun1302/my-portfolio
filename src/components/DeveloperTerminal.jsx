import { useState, useEffect } from 'react';
import Interactive3DCard from './Interactive3DCard';

const terminalLogs = [
  { text: "$ npm run start-portfolio", delay: 300, type: "input" },
  { text: "> loading nagarjun-developer-profile...", delay: 600, type: "info" },
  { text: "[System] Initializing Electronics & Computer Engineering environment", delay: 1000, type: "success" },
  { text: "[AI Agent] Loading LangGraph + Groq engine...", delay: 1500, type: "info" },
  { text: "[AI Agent] Chatbot online: Llama-4-scout active", delay: 1800, type: "success" },
  { text: "[Computer Vision] Initializing SAM 2.1 framework", delay: 2400, type: "info" },
  { text: "[Computer Vision] Deep-sea image segmentation loaded (97.90% acc)", delay: 2700, type: "success" },
  { text: "[B2B Catalog] Database sync: MongoDB + CRM webhooks active", delay: 3300, type: "success" },
  { text: "[Smart Elevator] OpenCV camera feed online (Raspberry Pi)", delay: 3800, type: "info" },
  { text: "[Ready] Portfolio server listening on port 3000", delay: 4200, type: "success" }
];

export default function DeveloperTerminal() {
  const [logs, setLogs] = useState([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    if (currentLogIndex >= terminalLogs.length) {
      // Loop log stream after 5 seconds of completion
      const timer = setTimeout(() => {
        setLogs([]);
        setCurrentLogIndex(0);
      }, 5000);
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
    <Interactive3DCard maxTilt={12} className="w-full max-w-[540px] mx-auto">
      <div className="terminal-shell bg-[#080a10]/95 border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
        {/* Terminal Header */}
        <div className="terminal-header bg-[#0e1320] border-b border-[#1e293b] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs font-mono text-[#64748b] select-none">
            nagarjun_spec.json
          </div>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* IDE Layout */}
        <div className="ide-container grid grid-cols-[140px_1fr] h-[340px] font-mono text-xs text-[#94a3b8]">
          {/* File Sidebar */}
          <div className="file-sidebar bg-[#04060a] border-r border-[#1e293b] p-3 select-none flex flex-col gap-2.5">
            <div className="text-[10px] uppercase font-bold text-[#475569] tracking-wider mb-1">
              Workspace
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <span>📁</span> src
              </div>
              <div className="flex flex-col gap-1.5 pl-4">
                <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                  <span>📄</span> agent_bot.py
                </div>
                <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                  <span>📄</span> sam_seg.cpp
                </div>
                <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                  <span>📄</span> b2b_server.js
                </div>
                <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors text-white">
                  <span className="text-yellow-500">⚡</span> spec.json
                </div>
              </div>
            </div>

            <div className="mt-auto pt-2 border-t border-[#1e293b]/50">
              <div className="text-[10px] text-emerald-400/80 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                VITE ONLINE
              </div>
            </div>
          </div>

          {/* Main Code/Terminal Body */}
          <div className="editor-area bg-[#080a10] p-4 overflow-y-auto flex flex-col gap-2 select-none scrollbar-thin">
            {/* JSON Spec display */}
            <div className="text-[#64748b] border-b border-[#1e293b]/50 pb-3 mb-2">
              <span className="text-[#f43f5e]">{"{"}</span>
              <div className="pl-4">
                <span className="text-sky-400">"developer"</span>: <span className="text-[#38bdf8]">"P Nagarjun"</span>,
                <br />
                <span className="text-sky-400">"focus"</span>: <span className="text-[#818cf8]">["AI", "CV", "Web"]</span>,
                <br />
                <span className="text-sky-400">"cgpa"</span>: <span className="text-emerald-400">8.85</span>
              </div>
              <span className="text-[#f43f5e]">{"}"}</span>
            </div>

            {/* Simulated Live Terminal */}
            <div className="flex-1 flex flex-col gap-1.5 text-[11px] min-h-0 overflow-y-auto">
              {logs.map((log, index) => {
                let colorClass = "text-[#94a3b8]";
                if (log.type === "input") colorClass = "text-sky-400 font-semibold";
                if (log.type === "success") colorClass = "text-emerald-400";
                if (log.type === "info") colorClass = "text-indigo-300";

                return (
                  <div key={index} className={`font-mono leading-relaxed break-all ${colorClass}`}>
                    {log.text}
                  </div>
                );
              })}
              {/* Cursor cursor blink */}
              {currentLogIndex < terminalLogs.length && (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-3 bg-sky-400 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Interactive3DCard>
  );
}
