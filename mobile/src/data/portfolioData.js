export const portfolioData = {
  personal: {
    name: "P Nagarjun",
    title: "Engineering Agentic AI Systems & End-to-End Applications",
    institution: "VIT Chennai",
    degree: "B.Tech in Electronics and Computer Engineering",
    gradYear: "2023 – 2027",
    cgpa: "8.85",
    location: "Chennai, Tamil Nadu, India",
    email: "nagarjun1302@gmail.com",
    github: "https://github.com/nagarjun1302",
    linkedin: "https://www.linkedin.com/in/nagarjun-p-b698852a0/",
    resumeUrl: "https://github.com/nagarjun1302",
    bio: "A final-year B.Tech Electronics & Computer Engineering student at VIT Chennai. Specializing in multi-agent LLM frameworks, autonomous decision loops, and full-stack AI platforms.",
    stats: [
      { label: "CGPA", value: "8.85", detail: "VIT Chennai" },
      { label: "Specialization", value: "Agentic AI", detail: "Multi-Agent Systems" },
      { label: "Research", value: "97.9%", detail: "Deep-Sea CV Acc." },
      { label: "Certifications", value: "5 Verified", detail: "Oracle & Anthropic" },
    ]
  },

  terminalFiles: {
    "agents.py": {
      name: "agents.py",
      icon: "🐍",
      subtitle: "Autonomous Multi-Agent Code Generator",
      code: [
        "from langgraph.graph import StateGraph",
        "from groq import Groq",
        "",
        "# Autonomous Multi-Agent Code Generator",
        "agents = [\"Planner\", \"Architect\", \"Coder\", \"Reviewer\"]",
        "graph = StateGraph(AgentState)",
        "graph.add_node(\"planner\", plan_codebase)",
        "graph.add_node(\"coder\", generate_code)",
        "workflow = graph.compile()"
      ]
    },
    "sam_seg.py": {
      name: "sam_seg.py",
      icon: "🧠",
      subtitle: "NIOT Polymetallic Nodule Detection",
      code: [
        "import cv2, torch",
        "from segment_anything import sam_model_registry",
        "",
        "# Deep-Sea Polymetallic Nodule Detection",
        "accuracy = 97.90  # NIOT Research Collaboration",
        "conference = \"ICOE 2025 (7th Int'l Conference)\"",
        "model = sam_model_registry[\"vit_h\"](checkpoint=\"sam_vit_h.pth\")",
        "masks = model.predict(deep_sea_sonar_image)"
      ]
    },
    "spec.json": {
      name: "spec.json",
      icon: "📋",
      subtitle: "Developer Identity & Core Attributes",
      code: [
        "{",
        '  "developer": "P Nagarjun",',
        '  "degree": "B.Tech ECM @ VIT Chennai",',
        '  "cgpa": 8.85,',
        '  "specializations": [',
        '    "Agentic AI Frameworks",',
        '    "Computer Vision & Deep Learning",',
        '    "Full-Stack Web Architectures"',
        "  ],",
        '  "status": "Available for AI Engineering Roles"',
        "}"
      ]
    }
  },

  terminalLogs: [
    { text: "nagarjun@portfolio:~$ pnpm run init-profile --name='P NAGARJUN'", type: "input" },
    { text: "Loading developer context (VIT Chennai - B.Tech ECM)...", type: "info" },
    { text: "[System] CGPA verified: 8.85 | Location: Chennai, TN", type: "success" },
    { text: "[Agentic AI] LangGraph + Groq multi-agent framework loaded", type: "info" },
    { text: "[Agentic AI] Initialized Planner, Architect, Coder & Reviewer agents", type: "success" },
    { text: "[LLM Stack] Google Gemini + LangChain + Supabase Auth active", type: "info" },
    { text: "[IoT Sensor] OpenCV Raspberry Pi occupant detection stream active", type: "info" },
    { text: "[Full-Stack] Express.js & MongoDB B2B catalog engine ready", type: "success" },
    { text: "[Certifications] Oracle Agentic AI & Claude Code in Action verified", type: "success" },
    { text: "[Ready] Portfolio backend listening on port 3000 ✔", type: "accent" }
  ],

  experiences: [
    {
      id: "loyalty-automation",
      role: "AI & Web Development Intern",
      company: "Loyalty Automation Pvt Ltd",
      location: "Chennai, India",
      period: "Jun. 2026 – Jul. 2026",
      tagColor: "#4f46e5",
      badgeText: "AI & Web Development Intern",
      bullets: [
        "Built and maintained a B2B product catalog platform using Express.js and MongoDB.",
        "Developed an Agentic AI chatbot with LangGraph + Groq, enabling product search via natural language."
      ],
      tech: ["Express.js", "MongoDB", "LangGraph", "Groq", "Agentic AI"]
    },
    {
      id: "cads-vit",
      role: "Research Intern",
      company: "Centre for Advanced Data Science (CADS), VIT Chennai",
      location: "Chennai, India",
      period: "Jun. 2024 – Nov. 2024",
      tagColor: "#7c3aed",
      badgeText: "Research Intern",
      bullets: [
        "Developed a deep-sea image segmentation framework in collaboration with NIOT for polymetallic nodule detection, achieving 97.90% accuracy with custom annotated datasets.",
        "Presented the research findings at the 7th International Conference on Ocean Engineering (ICOE 2025)."
      ],
      tech: ["OpenCV", "Computer Vision", "Python", "NIOT Research", "ICOE 2025"]
    }
  ],

  projects: [
    {
      id: "nutrition",
      title: "South Indian Nutrition Advisor",
      tagline: "AI-Powered Dietary & Glycemic Risk Assessment System",
      category: "ai",
      categoryLabel: "Agentic AI & LLMs",
      github: "https://github.com/nagarjun1302/south-indian-nutrition-advisor",
      bullets: [
        "Built an end-to-end AI nutrition advisor tailored for South Indian cuisine using Google Gemini and LangChain for multi-step meal analysis, glycemic risk assessment, and ingredient-level dietary recommendations.",
        "Integrated Supabase for secure user authentication (Google OAuth + Email) with Row Level Security (RLS) policies protecting user meal logs.",
        "Automated personalised email nutrition report delivery via Gmail REST API with zero manual intervention."
      ],
      tech: ["Python", "FastAPI", "Google Gemini API", "LangChain", "Supabase", "Email Automation"]
    },
    {
      id: "code-gen",
      title: "Multi-Agent Autonomous Code Generator",
      tagline: "Self-Coordinating LLM Framework for Full Codebase Synthesis",
      category: "ai",
      categoryLabel: "Agentic AI & LLMs",
      github: "https://github.com/nagarjun1302/agentriq-ai",
      bullets: [
        "Developed a multi-agent AI framework using LangGraph that converts a natural language prompt into a fully generated codebase via coordinated Planner, Architect, Coder, and Reviewer agents.",
        "Built a FastAPI streaming backend with live agent execution timeline, interactive file browser, and instant ZIP project download.",
        "Leveraged Groq LLM inference for ultra-fast, low-latency code generation across complex project architectures."
      ],
      tech: ["Python", "LangGraph", "FastAPI", "Groq", "Agentic AI"]
    },
    {
      id: "elevator",
      title: "Smart Elevator Automation Prototype",
      tagline: "Embedded IoT & Computer Vision Lift Dispatcher",
      category: "iot",
      categoryLabel: "IoT & Computer Vision",
      github: "https://github.com/nagarjun1302/smart-elevator-automation",
      bullets: [
        "Built a smart elevator system using Raspberry Pi, PIR, ultrasonic sensors, and OpenCV-based computer vision for real-time occupant detection and intelligent floor-stopping.",
        "Optimized elevator passenger dispatching and energy consumption in high-density building prototypes.",
        "Engineered real-time sensor processing pipelines with Python and embedded hardware interrupts."
      ],
      tech: ["OpenCV", "Python", "Computer Vision", "IoT", "Raspberry Pi"]
    }
  ],

  techCategories: [
    { id: "all", label: "All Tech" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend-db", label: "Backend & DB" },
    { id: "ai-data", label: "AI & Data" },
    { id: "hardware", label: "Hardware" }
  ],

  techStack: [
    // Languages
    { name: "Python", category: "languages", level: "Advanced", icon: "🐍", color: "#3776AB", desc: "Core language for AI agent development, computer vision, data analysis, and FastAPI backend engineering." },
    { name: "Java", category: "languages", level: "Proficient", icon: "☕", color: "#ED8B00", desc: "Object-oriented programming, data structures, and enterprise software foundations." },
    { name: "C", category: "languages", level: "Proficient", icon: "⚙️", color: "#A8B9CC", desc: "Low-level systems programming, memory management, and microcontroller programming." },
    { name: "C++", category: "languages", level: "Proficient", icon: "⚡", color: "#00599C", desc: "High-performance algorithms, computer vision pipelines, and embedded computational modules." },

    // Frontend & Fullstack
    { name: "React", category: "frontend", level: "Advanced", icon: "⚛️", color: "#61DAFB", desc: "Modern dynamic user interfaces, interactive component systems, and responsive web/mobile applications." },
    { name: "Next.js", category: "frontend", level: "Intermediate", icon: "▲", color: "#000000", desc: "Server-side rendering, static site generation, and full-stack React framework." },
    { name: "JavaScript", category: "frontend", level: "Advanced", icon: "🟨", color: "#F7DF1E", desc: "Modern ES6+ development, asynchronous patterns, and frontend state manipulation." },
    { name: "HTML5", category: "frontend", level: "Advanced", icon: "🌐", color: "#E34F26", desc: "Semantic web structuring, modern accessibility standards, and web document architecture." },
    { name: "CSS3", category: "frontend", level: "Advanced", icon: "🎨", color: "#1572B6", desc: "Tailwind CSS styling, responsive grid layouts, and modern keyframe animations." },

    // Backend & DB
    { name: "Node.js", category: "backend-db", level: "Proficient", icon: "🟢", color: "#5FA04E", desc: "Asynchronous runtime for server-side JavaScript applications and REST microservices." },
    { name: "FastAPI", category: "backend-db", level: "Advanced", icon: "⚡", color: "#009688", desc: "High-performance Python API framework powering AI agent streaming endpoints and LLM integrations." },
    { name: "Express.js", category: "backend-db", level: "Proficient", icon: "🚂", color: "#333333", desc: "Fast minimalist web framework used for B2B product catalogs and middleware pipelines." },
    { name: "MongoDB", category: "backend-db", level: "Proficient", icon: "🍃", color: "#47A248", desc: "NoSQL document database powering flexible catalogs, user collections, and logs." },
    { name: "Supabase", category: "backend-db", level: "Advanced", icon: "⚡", color: "#3ECF8E", desc: "Postgres-backed open source backend with Row Level Security (RLS) and OAuth authentication." },
    { name: "PostgreSQL", category: "backend-db", level: "Proficient", icon: "🐘", color: "#4169E1", desc: "Relational database management, complex relational schemas, and ACID-compliant transactional storage." },

    // AI & Data
    { name: "LangChain", category: "ai-data", level: "Advanced", icon: "🦜", color: "#10B981", desc: "Orchestration framework for multi-step LLM chains, prompt templates, and custom tool binding." },
    { name: "LangGraph", category: "ai-data", level: "Advanced", icon: "🕸️", color: "#6366F1", desc: "Stateful cyclical multi-agent graph architecture with human-in-the-loop and autonomous coordination." },
    { name: "OpenCV", category: "ai-data", level: "Advanced", icon: "👁️", color: "#5C3EE8", desc: "Computer vision library used for NIOT deep-sea nodule detection and real-time occupant detection." },
    { name: "Pandas", category: "ai-data", level: "Proficient", icon: "🐼", color: "#150458", desc: "Tabular data processing, sensor data aggregation, and structured feature engineering." },
    { name: "NumPy", category: "ai-data", level: "Proficient", icon: "🔢", color: "#013243", desc: "Multidimensional array computation and scientific numerical operations." },

    // Hardware
    { name: "Raspberry Pi", category: "hardware", level: "Advanced", icon: "🍓", color: "#C51A4A", desc: "Single-board computer used for embedded smart elevator dispatcher and camera streaming." },
    { name: "ESP32", category: "hardware", level: "Proficient", icon: "📶", color: "#E7352C", desc: "Wi-Fi & Bluetooth microcontroller for low-power IoT sensor acquisition and telemetry." }
  ],

  certificates: [
    {
      id: "oracle-ai",
      title: "Oracle Agentic AI Certified Foundations Associate",
      issuer: "Oracle Corporation",
      issuerTag: "Oracle",
      date: "Aug. 2026",
      desc: "Demonstrates foundational expertise in multi-agent system architecture, autonomous decision loops, tool integrations, and enterprise AI orchestration.",
      badgeColor: "#4f46e5",
      tagBg: "#eef2ff",
      tagText: "#4338ca",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E39AEE06227E02036D56B757EA8B81F332672980C63E1778ECCBCDF0AADA500"
    },
    {
      id: "claude-101",
      title: "Claude 101",
      issuer: "Anthropic",
      issuerTag: "Anthropic",
      date: "Jul. 2026",
      desc: "Verifies proficiency in Claude core features, prompting fundamentals, context window management, and everyday AI productivity workflows.",
      badgeColor: "#4f46e5",
      tagBg: "#eef2ff",
      tagText: "#4338ca",
      link: "https://verify.skilljar.com/c/e8hfk8typb7r"
    },
    {
      id: "claude-code",
      title: "Claude Code in Action",
      issuer: "Anthropic",
      issuerTag: "Anthropic",
      date: "Jul. 2026",
      desc: "Practical certification covering advanced prompt engineering, automated code refactoring, context optimization, and agentic CLI workflows using Claude.",
      badgeColor: "#4f46e5",
      tagBg: "#eef2ff",
      tagText: "#4338ca",
      link: "https://verify.skilljar.com/c/sh5ux32pbeyo"
    },
    {
      id: "agent-skills",
      title: "Introduction to agent skills",
      issuer: "Anthropic",
      issuerTag: "Anthropic",
      date: "Jul. 2026",
      desc: "Specialized training on function calling, API tool definitions, JSON schema parameters, and agentic execution pipelines with Claude.",
      badgeColor: "#4f46e5",
      tagBg: "#eef2ff",
      tagText: "#4338ca",
      link: "https://verify.skilljar.com/c/nvu6h8khrfka"
    },
    {
      id: "mcp-intro",
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      issuerTag: "Anthropic",
      date: "Jul. 2026",
      desc: "Certification in Model Context Protocol (MCP) standards, building client-server protocol bridges, and connecting LLMs to external tools and databases.",
      badgeColor: "#4f46e5",
      tagBg: "#eef2ff",
      tagText: "#4338ca",
      link: "https://verify.skilljar.com/c/iskbyca3qx3j"
    }
  ],

  education: [
    {
      id: "vit",
      institution: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Electronics and Computer Engineering",
      period: "2023 – 2027",
      scoreType: "Cumulative Grade",
      score: "CGPA: 8.85",
      accentColor: "#4f46e5",
      badgeBg: "#ecfdf5",
      badgeText: "#065f46"
    },
    {
      id: "chaitanya-12",
      institution: "Sri Chaitanya Techno School, Mylapore",
      degree: "Class 12 Higher Secondary Education",
      period: "2022 – 2023",
      scoreType: "Board Score",
      score: "92%",
      accentColor: "#9333ea",
      badgeBg: "#eef2ff",
      badgeText: "#4338ca"
    },
    {
      id: "chaitanya-10",
      institution: "Sri Chaitanya Techno School, K K Nagar",
      degree: "Class 10 Secondary Education",
      period: "2020 – 2021",
      scoreType: "Board Score",
      score: "97.8%",
      accentColor: "#0284c7",
      badgeBg: "#f0f9ff",
      badgeText: "#0369a1"
    }
  ],

  contactLinks: [
    {
      id: "email",
      label: "Email",
      value: "nagarjun1302@gmail.com",
      actionType: "email",
      icon: "✉",
      bgColor: "#eef2ff",
      textColor: "#4f46e5",
      hint: "Tap to compose / copy"
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/nagarjun1302",
      actionType: "link",
      url: "https://github.com/nagarjun1302",
      icon: "🐙",
      bgColor: "#f1f5f9",
      textColor: "#0f172a",
      hint: "Open profile ↗"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/nagarjun-p",
      actionType: "link",
      url: "https://www.linkedin.com/in/nagarjun-p-b698852a0/",
      icon: "💼",
      bgColor: "#eff6ff",
      textColor: "#2563eb",
      hint: "Connect on LinkedIn ↗"
    }
  ]
};
