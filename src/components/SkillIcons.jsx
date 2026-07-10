import React from 'react';

export default function SkillIcon({ name, className = 'w-4 h-4' }) {
  switch (name) {
    case 'LangGraph':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="5" r="2.5" className="stroke-indigo-400 fill-indigo-400/20" />
          <circle cx="6" cy="18" r="2.5" className="stroke-indigo-400 fill-indigo-400/20" />
          <circle cx="18" cy="18" r="2.5" className="stroke-indigo-400 fill-indigo-400/20" />
          <path d="M10.5 7L7.5 16" className="stroke-indigo-500/50" />
          <path d="M13.5 7L16.5 16" className="stroke-indigo-500/50" />
          <path d="M8.5 18H15.5" className="stroke-indigo-500/50" strokeDasharray="2 2" />
        </svg>
      );
    case 'SAM 2.1':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-indigo-400/40" strokeDasharray="3 3" />
          <path d="M7 10C7 8.3 8.3 7 10 7H14C15.7 7 17 8.3 17 10V14C17 15.7 15.7 17 14 17H10C8.3 17 7 15.7 7 14V10Z" className="stroke-indigo-400 fill-indigo-400/10" />
          <circle cx="12" cy="12" r="1.5" className="fill-indigo-300 stroke-indigo-300" />
          <path d="M12 8V6" className="stroke-indigo-300" />
          <path d="M12 16V18" className="stroke-indigo-300" />
          <path d="M8 12H6" className="stroke-indigo-300" />
          <path d="M16 12H18" className="stroke-indigo-300" />
        </svg>
      );
    case 'Gemini API':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#38bdf8]`}>
          <path d="M12 2C12 2 12.5 8.5 19 9C12.5 9.5 12 16 12 16C12 16 11.5 9.5 5 9C11.5 8.5 12 2 12 2Z" />
          <path d="M17 14C17 14 17.3 17.5 21 17.75C17.3 18 17 21.5 17 21.5C17 21.5 16.7 18 13 17.75C16.7 17.5 17 14 17 14Z" className="opacity-80" />
        </svg>
      );
    case 'OpenCV':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" className={className}>
          <circle cx="12" cy="8.5" r="4" className="stroke-red-500" />
          <circle cx="8" cy="15.5" r="4" className="stroke-green-500" />
          <circle cx="16" cy="15.5" r="4" className="stroke-blue-500" />
        </svg>
      );
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#38bdf8]`}>
          <path d="M12 2C11.3 2 10.6 2.1 10.1 2.2C8.3 2.6 7.4 3.7 7.4 5.5V7H12.2V7.7H5.2C3.5 7.7 2.1 8.8 2 10.6C1.9 12.6 3.1 13.8 4.8 13.8H6.3V11.8C6.3 9.7 7.7 8.3 9.8 8.3H14.6C16.3 8.3 17.7 7.1 17.8 5.4C17.9 3.5 16.7 2.2 15 2.2C14 2.1 13 2 12 2ZM9.5 4.3C9.9 4.3 10.3 4.6 10.3 5C10.3 5.4 10 5.8 9.5 5.8C9.1 5.8 8.8 5.5 8.8 5.1C8.8 4.7 9.1 4.3 9.5 4.3ZM12 22C12.7 22 13.4 21.9 13.9 21.8C15.7 21.4 16.6 20.3 16.6 18.5V17H11.8V16.3H18.8C20.5 16.3 21.9 15.2 22 13.4C22.1 11.4 20.9 10.2 19.2 10.2H17.7V12.2C17.7 14.3 16.3 15.7 14.2 15.7H9.4C7.7 15.7 6.3 16.9 6.2 18.6C6.1 20.5 7.3 21.8 9 21.8C10 21.9 11 22 12 22ZM14.5 19.7C14.1 19.7 13.7 19.4 13.7 19C13.7 18.6 14 18.2 14.5 18.2C14.9 18.2 15.2 18.5 15.2 18.9C15.2 19.3 14.9 19.7 14.5 19.7Z" />
        </svg>
      );
    case 'C++':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-blue-400`}>
          <path d="M12 6a6 6 0 1 0 0 12c1.8 0 3.3-.8 4.2-2.1" />
          <path d="M16 10h2 M17 9v2 M20 10h2 M21 9v2" strokeWidth="2" />
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-orange-400`}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M6 2v2" />
          <path d="M10 2v2" />
          <path d="M14 2v2" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-yellow-400 rounded-sm`}>
          <path d="M3 3h18v18H3z" />
          <text x="19" y="18" fill="black" fontSize="9" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="end">JS</text>
        </svg>
      );
    case 'Next.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="10" className="stroke-white fill-black" />
          <path d="M7 17V7l10 10V7" className="stroke-white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-gray-400`}>
          <rect x="2" y="4" width="20" height="16" rx="2" className="stroke-gray-500 fill-gray-500/5" />
          <path d="M7 9l3 3-3 3M13 15h4" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 2s-5 4-5 10c0 4.5 3 8 5 10 2-2 5-5.5 5-10 0-6-5-10-5-10z" className="fill-emerald-500/10 stroke-emerald-500" />
          <path d="M12 2v22" className="stroke-emerald-400/40" />
        </svg>
      );
    case 'Raspberry Pi':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 8c1-2 3-3 5-3 .5 1.5 0 3.5-2.5 4.5" className="stroke-emerald-500 fill-emerald-500/10" />
          <path d="M12 8c-1-2-3-3-5-3-.5 1.5 0 3.5 2.5 4.5" className="stroke-emerald-500 fill-emerald-500/10" />
          <circle cx="12" cy="12" r="2.5" className="stroke-red-500 fill-red-500/20" />
          <circle cx="9.5" cy="14" r="2" className="stroke-red-500 fill-red-500/20" />
          <circle cx="14.5" cy="14" r="2" className="stroke-red-500 fill-red-500/20" />
          <circle cx="12" cy="16.5" r="2" className="stroke-red-500 fill-red-500/20" />
          <circle cx="9.5" cy="10.5" r="2" className="stroke-red-500 fill-red-500/20" />
          <circle cx="14.5" cy="10.5" r="2" className="stroke-red-500 fill-red-500/20" />
        </svg>
      );
    case 'Agentic AI':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${className} text-purple-400`}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" strokeDasharray="3 3" />
          <path d="M12 6v12M6 12h12" />
          <circle cx="12" cy="12" r="3" className="fill-purple-400/25" />
        </svg>
      );
    case 'SMTP':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-blue-400`}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'IoT':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-emerald-400`}>
          <path d="M5 12a7 7 0 0 1 14 0" />
          <path d="M8.5 15.5a3.5 3.5 0 0 1 7 0" />
          <circle cx="12" cy="19" r="1" className="fill-emerald-400" />
        </svg>
      );
    case 'Computer Vision':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-sky-400`}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" className="fill-sky-400/20" />
          <path d="M12 9V5M12 19v-4M9 12H5M19 12h-4" />
        </svg>
      );
    default:
      return null;
  }
}
