export const projectsData = [
  {
    id: "medisure",
    title: "MediSure AI - Enterprise Medical Intelligence Platform",
    problem: "Insurance claims processing and medical underwriting are hampered by manual, error-prone document reviews.",
    abstract: "A comprehensive 100% open-source multi-agent AI ecosystem for automated underwriting, fraud detection, and ICD-10 coding.",
    stack: ["Python 3.11", "LangGraph", "Llama-3.3-70b", "Llama-4-Vision", "FastAPI", "ChromaDB", "React"],
    github: "https://github.com/VijaiVenkatesan/medisure-ai-platform",
    live: "https://medisure-vj-ai.netlify.app",
    readme: `> Enterprise-grade multi-agent AI platform for insurance claims, medical document intelligence, clinical decision support, and medical underwriting. India-first. 100% open-source. Free to deploy.

## Platform Architecture
\`\`\`text
┌──────────────────────────────────────────────────────────────────────────┐
│                        MEDISURE AI PLATFORM v2.0                         │
│                                                                           │
│  NETLIFY (React + Vite)    RENDER.COM (FastAPI + Python 3.11)            │
│  medisure-vj-ai.netlify.app ─►  medisure-api-vyx1.onrender.com           │
│     │                      ┌────┴────────────────────────────────────┐    │
│     │                      │           GROQ AI CLOUD                 │    │
│     │                      │  llama-3.3-70b-versatile  (reasoning)   │    │
│     │                      │  llama-4-scout-17b        (vision OCR)  │    │
│     │                      └─────────────────────────────────────────┘    │
│     │                           │                                         │
│     │                      ┌────┴───────────┐   ┌────────────────────┐   │
│     │                      │  SQLite / PG   │   │  ChromaDB (RAG)    │   │
│     │                      └────────────────┘   └────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Phase 1 — Insurance Claims Processing
\`\`\`text
 UPLOAD PDF/IMAGE
      │
      ▼
 OCR Node 
  Digital PDF → pypdf text layer
  Scanned PDF → Groq Vision (llama-4-scout)
      │
      ▼
 Extraction Agent (llama-3.3-70b-versatile)
      │
      ▼
 Validation Agent (rule-based, no LLM call)
      │
      ▼
 Policy Agent (ChromaDB RAG + llama-3.3-70b)
      │
      ▼
 Fraud Agent (rule-based + llama-3.1-8b)
      │
      ├── score ≥ 0.90 ──► AUTO REJECT
      ├── score ≥ 0.75 ──► HITL REVIEW
      ▼
 Decision Agent 
  Auto-approve: low risk + amount ≤ ₹50,000
\`\`\`

### Phase 2 — Medical Document Intelligence
*   **Medical Summarization:** Discharge summaries, OPD, lab, prescription → structured clinical summary.
*   **ICD-10 Auto-Coding:** Clinical text → ICD-10 codes with confidence.
*   **SOAP Transcription:** Dictation audio → structured SOAP note via Groq Whisper.

### Phase 3 — Clinical Decision Support & Underwriting
*   **Medical Underwriting:** Risk classes, Premium loading %, specific exclusions.
*   **Clinical Support:** Differential diagnoses ranked by probability, Drug Interactions, Risk Stratification.`
  },
  {
    id: "competitor",
    title: "Real-Time Competitor Intelligence AI",
    problem: "Curating exhaustive market and competitor intelligence demands navigating highly fragmented data streams.",
    abstract: "Autonomous market research powered by 9 real-time free data sources + AI synthesis. Synthesizes 8 analytical tabs under 30 seconds.",
    stack: ["Python", "Streamlit", "Groq API", "Langchain", "yfinance", "ThreadPoolExecutor"],
    github: "https://github.com/VijaiVenkatesan/real-time-competitor-intelligence-ai",
    live: "https://real-time-competitor-intelligence-ai.streamlit.app",
    readme: `> Autonomous market research powered by **9 real-time free data sources** + AI synthesis. 
> Supports **Indian (NSE/BSE) and global companies** — 100% free, zero paid APIs required.

## 📡 Data Sources — Parallel Executed
| Source | What It Provides | Key Needed |
|--------|-----------------|-----------|
| 📈 **Financials** | Stock price, market cap, P/E, 52W high/low | ❌ None |
| 📰 **Google News** | Latest articles + keyword sentiment scoring | ❌ None |
| 📊 **Google Trends**| Search interest (0–100), trend direction | ❌ None |
| 💻 **GitHub API** | Tech stack, stars, repos, commit activity | ❌ None |
| 📋 **SEC Edgar** | 10-K / 10-Q filings with direct links | ❌ None |
| 🚀 **Product Hunt** | Product launches, upvotes, community traction | ❌ None |
| 🏢 **Wikipedia** | Founded year, HQ, funding mentions | ❌ None |

## ⚙️ Architectural Flow
\`\`\`text
  User inputs company name
          │
          ▼
  ┌─────────────────────────────────────────────┐
  │  9 scrapers run in parallel (6 threads)     │
  │  Timeout: 60s total, each source independent│
  └─────────────────────────────────────────────┘
          │
          ▼
  ┌─────────────────────────────────────────────┐
  │  Context builder: raw JSON → structured     │
  │  markdown, trimmed to ~3,500 chars/section  │
  └─────────────────────────────────────────────┘
          │
          ▼
  ┌─────────────────────────────────────────────┐
  │  Groq AI: 7 sequential context calls        │
  │  1.5s enforced delay to bypass rate-limits  │
  └─────────────────────────────────────────────┘
          │
          ▼
  8-tab Streamlit dashboard + JSON export
\`\`\`

## 🧠 AI Models (Groq Cloud)
*   **Default:** \`llama-3.1-8b-instant\` (Lightning fast, reliable structured outputs)
*   **Reasoning:** \`llama-3.3-70b-versatile\` (Higher analytical quality)`
  },
  {
    id: "presentation",
    title: "Enterprise AI Presentation Architect",
    problem: "Generating corporate presentations that strictly adhere to rigid brand compliance is notoriously manual.",
    abstract: "Generate stunning, template-perfect PowerPoint presentations powered by AI + real-time web research.",
    stack: ["Python", "Streamlit", "Groq API", "python-pptx", "DuckDuckGo Search", "Tesseract OCR"],
    github: "https://github.com/VijaiVenkatesan/Enterprise_AI_Presentation_Architect_App",
    live: "https://enterprise-ai-presentation-architect-app.streamlit.app",
    readme: `> **Generate stunning, template-perfect PowerPoint presentations powered by AI + real-time web research.**
> Finalized for 100% layout fidelity and strict corporate branding compliance.

### ⚛️ Presentation Architecture
*   **Gamma Atomizer (Slide Doubling)** — Logic-driven toggle to split dense slides into **Narrative + Visual** (Chart/Table) pairs, ensuring 0% layout overlap.
*   **🛡️ Corporate Branding Guard** — Strict **2.2-inch top-margin** enforcement with floor detection to protect enterprise headers, logobars, and red bars.
*   **🧠 Smart Layout Bifurcation**:
    *   **Narrative Slides**: Automatically uses the template's native "Title and Content" layouts.
    *   **Visual Insights**: Uses "Blank Layouts" for 100% sterile rendering of charts and tables.
*   **🔄 Adaptive Batching** — Segments generation into **5-slide pause/resume cycles** to prevent AI model truncation and ensure 20+ slide consistency.
*   **🖥️ 16:9 Widescreen Optimized** — Dynamic font scaling and space negotiation for modern corporate widescreen templates.

### Core Capabilities
*   **Template-Faithful Generation** — Upload a PPTX template and generate new presentations that preserve 100% of the original styling.
*   **AI Content Generation** — Powered by Groq API + Real-Time Web Research (DuckDuckGo).
*   **Intelligent Visuals**: Automated generation of Bar, Column, Line charts and fully styled consulting Tables.
*   **Notes & Subtitles**: Mandated consulting-grade subtitles and talking points for every slide.`
  },
  {
    id: "resume-agent",
    title: "Agentic AI Resume Chatbot",
    problem: "Traditional ATS resume parsing entirely fails to capture the nuance of technical impact and context.",
    abstract: "Interactive, Agentic AI-driven retrieval system operating over structured career data to semantically query profiles.",
    stack: ["Agentic AI", "Model Context Protocol (MCP)", "RAG", "Groq API", "Streamlit"],
    github: "https://github.com/VijaiVenkatesan/Agentic_AI_Resume_Chatbot",
    live: "https://agentic-ai-resume-chatbot.streamlit.app",
    readme: `> Built with ❤️ using Agentic AI + MCP + RAG + Groq

### 🛠️ Core Capabilities
*   **Agentic Search:** A fully autonomous reasoning loop allowing recruiters to natively query technical experiences rather than searching for exact keywords.
*   **Retrieval-Augmented Generation (RAG):** Under-the-hood vectorization of complete career pathways, ensuring hallucination-free career tracking.
*   **Streaming Inference:** Blazing fast conversational feedback hosted entirely on Streamlit Cloud utilizing Groq's high-speed Llama variants.
*   **Context Grounding:** The model refuses to extrapolate skills outside the defined perimeter of the resume state structure.`
  }
];
