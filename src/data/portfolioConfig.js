export const portfolioConfig = {
  // ==========================================
  // HERO SECTION
  // ==========================================
  hero: {
    title: "Building Production-Grade AI Systems That Scale Across Enterprises",
    subtitle: "AI/ML Engineer with nearly 7 years of experience delivering production-grade AI solutions across Voice AI, Agentic AI, Generative AI, and Intelligent Document Processing (IDP). Currently leading the Heart & Paw Voice AI Agent initiative at Datamatics for a 30-clinic US veterinary chain handling ~360,000 calls/year.",
    githubAvatarUrl: "https://github.com/VijaiVenkatesan.png",
  },

  // ==========================================
  // ABOUT SECTION
  // ==========================================
  about: {
    paragraphs: [
      "As a Senior AI Engineer with nearly 7 years of experience in the Applied AI and Machine Learning domain, I specialize in designing, deploying, and scaling enterprise-grade artificial intelligence systems across Voice AI, Agentic AI, Generative AI, and Intelligent Document Processing (IDP). My expertise bridges the gap between state-of-the-art research and mission-critical production engineering.",
      "Currently, I am leading the Heart and Paw Voice AI Agent initiative at Datamatics — an enterprise CX Agent Studio (Dialogflow CX) IVR system powered by gemini-3.1-flash-live (frontend NLU) and Vertex AI gemini-3.5-flash (backend webhook LLM) for a 30-clinic US veterinary chain handling ~360,000 inbound calls/year, currently in UAT phase. Previously, I owned end-to-end production delivery of the Ingram Micro and BelleTire invoice automation systems (achieving 90% and 93.4% extraction accuracy with 10–11s latency), followed by a structured knowledge transition to the TruCap team.",
      "Proficient in building multi-agent pipelines (LangGraph, CrewAI, AutoGen, Model Context Protocol - MCP) and LLM-powered workflows with both frontier models (Gemini, Claude, GPT) and open-source models (Llama, Mistral, Qwen). My approach combines strong AI/ML fundamentals with rigorous software architecture, high SLA adherence, minimal latency, and resilient cloud infrastructure across Google Cloud Platform (GCP) and Microsoft Azure."
    ]
  },

  // ==========================================
  // SKILLS SECTION
  // ==========================================
  skills: [
    {
      categoryName: "Voice AI & Conversational Engineering",
      iconName: "Mic",
      items: [
        "CX Agent Studio (Dialogflow CX)",
        "gemini-3.1-flash-live",
        "Vertex AI gemini-3.5-flash",
        "Achernar Chirp3-HD TTS",
        "RingCentral Telephony IVR",
        "Deepgram (STT)",
        "ElevenLabs (TTS)",
        "Retell AI",
        "LiveKit",
        "14 CX Tool Callbacks"
      ]
    },
    {
      categoryName: "Agentic AI & Multi-Agent Frameworks",
      iconName: "Bot",
      items: [
        "LangGraph",
        "CrewAI",
        "AutoGen",
        "OpenAI Agents SDK",
        "Model Context Protocol (MCP)",
        "Agentic RAG",
        "Context Engineering",
        "Prompt Engineering",
        "LangChain",
        "Semantic Routing"
      ]
    },
    {
      categoryName: "Frontier & Open Source LLMs",
      iconName: "Brain",
      items: [
        "Gemini (3.1-flash-live, 3.5-flash)",
        "Anthropic Claude",
        "OpenAI GPT-4o / GPT-4",
        "Llama 3.x",
        "Mistral",
        "Qwen",
        "Kimi",
        "DeepSeek",
        "Groq Cloud API",
        "Ollama (Local Inference)",
        "Hugging Face Hub"
      ]
    },
    {
      categoryName: "Machine Learning, NLP & Document AI",
      iconName: "Database",
      items: [
        "Intelligent Document Processing (IDP)",
        "Transformer Models",
        "BERT",
        "Named Entity Recognition (NER)",
        "SpaCy & med7",
        "TensorFlow & Keras",
        "Scikit-Learn",
        "Pandas & NumPy",
        "Elasticsearch & Kibana",
        "OCR Pipelines (Tesseract, Groq Vision)"
      ]
    },
    {
      categoryName: "Backend, Cloud & Microservices",
      iconName: "Server",
      items: [
        "Python (3.9 - 3.11)",
        "Python Flask (Gunicorn)",
        "FastAPI",
        "Django REST API",
        "GCP Cloud Run",
        "Cloud Firestore",
        "Cloud Scheduler",
        "GCP Secret Manager",
        "Cloud Logging & VPC",
        "Azure Virtual Machines",
        "AWS DevOps & Docker",
        "Vetspire GraphQL & REST APIs"
      ]
    },
    {
      categoryName: "Visualization, IDEs & Developer Tools",
      iconName: "Component",
      items: [
        "Power BI",
        "Tableau",
        "React.js & Vite",
        "Framer Motion",
        "Streamlit",
        "Cursor & VS Code",
        "PyCharm & Jupyter",
        "Git & GitHub",
        "Postman",
        "WinSCP & FileZilla"
      ]
    }
  ],

  // ==========================================
  // EXPERIENCE SECTION
  // ==========================================
  experience: [
    {
      role: "Senior AI Engineer",
      company: "Datamatics (TruAI Division)",
      location: "Pondicherry",
      duration: "04/2022 - Present",
      bullets: [
        "Current Project — Heart and Paw Voice AI Agent (UAT Phase): Leading end-to-end design and development of an AI-powered Voice Agent for Heart and Paw, a 30-clinic US veterinary chain, handling ~360,000 inbound calls/year across appointment scheduling, caller identification, pet verification, new client/pet registration, and clinic FAQs. Successfully progressed to UAT phase ahead of production deployment.",
        "Conversational & Webhook LLM Architecture: Architected IVR system using CX Agent Studio (Dialogflow CX) with gemini-3.1-flash-live as frontend conversational model, and Vertex AI gemini-3.5-flash as backend webhook LLM for structured spoken date and slot resolution. Engineered 0ms local fast-path parsers with Vertex AI gemini-3.5-flash fallback guarded by a 3.0s ThreadPoolExecutor timeout.",
        "GCP Cloud Run Microservices: Built and deployed Python Flask webhook microservice on GCP Cloud Run (hnp-voice-webhook-pod02, 2 vCPU/2 GiB, Gunicorn) handling 14 CX Tool Callbacks with Vetspire GraphQL & REST API integration, RingCentral telephony, and Achernar Chirp3-HD TTS.",
        "Infrastructure & Resiliency: Managed GCP infrastructure (IAM, Secret Manager, Cloud Logging, VPC networking), Cloud Scheduler for daily 32-clinic data sync, and Cloud Firestore (clinics_pod02) for high-speed DNIS-to-clinic caching.",
        "Previous Key Projects — Ingram Micro & BelleTire TruAI Automation: Led end-to-end production ownership of Ingram Micro (90% extraction accuracy) and BelleTire (93.4% accuracy) invoice automation with average processing latency of 10–11 seconds per page end-to-end.",
        "Production Operations & Knowledge Transition: Successfully completed structured knowledge transition of both projects to the TruCap team, ensuring continuous operations. Independently managed live production pipelines ensuring strict SLA adherence.",
        "Other Notable Enterprise Deliveries: NER (ADB), Image Classification (UHG & Star Health), Receipt Extraction, Photo Matching, Resume Data Extraction, Trepp Field Extraction, Web Scraper (Fiercepharma), TruAI GPT R&D, Trepp Newsfeed, Resume AI, Azure OpenAI GPT-4 Integration (XPO Project), TruAI Voltas, IDFC First Bank, CCH-ARM, MCC."
      ],
      tech: [
        "Dialogflow CX",
        "gemini-3.1-flash-live",
        "Vertex AI gemini-3.5-flash",
        "Python Flask",
        "GCP Cloud Run",
        "Cloud Firestore",
        "Cloud Scheduler",
        "Vetspire GraphQL",
        "RingCentral",
        "Chirp3-HD TTS",
        "Django REST",
        "Azure & GCP VMs"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Innodatatics",
      location: "Hyderabad",
      duration: "10/2021 - 04/2022",
      bullets: [
        "Recommendation Engine for Career Transition: Developed and deployed a machine learning-based recommendation engine using collaborative and content-based filtering for career transitions, achieving 85% accuracy.",
        "NER on Medical Journals: Optimized domain-specific Named Entity Recognition (NER) processes from medical journals and clinical reports, significantly accelerating research extraction time."
      ],
      tech: ["Python", "Scikit-Learn", "TensorFlow", "NLP (med7, SpaCy)", "Tika", "Pdfminer", "Pandas", "Streamlit"]
    },
    {
      role: "Associate (Medical Summarizer)",
      company: "Aosta Software Technologies India Pvt Ltd",
      location: "Chennai",
      duration: "06/2021 - 08/2021",
      bullets: [
        "Summarized complex medical records for legal experts using AI/ML and NLP techniques, ensuring analytical clarity, contextual relevance, and legal accuracy.",
        "Leveraged Cognitive Science principles to improve accuracy; applied Python and SQL to organize and streamline medical records."
      ],
      tech: ["Python", "SQL", "Cognitive Science", "NLP Context Analysis"]
    },
    {
      role: "Medical Record Analyst",
      company: "Rapid Care Transcription Pvt Ltd",
      location: "Pondicherry",
      duration: "04/2018 - 05/2021",
      bullets: [
        "Supported US healthcare providers and legal investigations through detailed medical record analysis, trend identification, and data visualization.",
        "Analyzed comprehensive medical records for accuracy and completeness, ensuring compliance with strict regulatory standards; enhanced reporting quality using SQL and visualization tools."
      ],
      tech: ["SQL", "Data Visualization", "Healthcare Analytics", "Regulatory Compliance"]
    },
    {
      role: "Project Intern",
      company: "CSIR-Central Leather Research Institute",
      location: "Chennai",
      duration: "12/2016 - 06/2017",
      bullets: [
        "Researched antimicrobial activity of secondary metabolites from soil actinomycetes, contributing to pharmaceutical research advancements."
      ],
      tech: ["Biotechnology", "Microbial Metabolites", "Pharmaceutical Research"]
    }
  ],

  // ==========================================
  // CERTIFICATIONS & AWARDS & EDUCATION
  // ==========================================
  certifications: [
    "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents (Udemy | Instructor: Ligency, Ed Donner)",
    "AI Engineer Agentic Track: The Complete Agent & MCP Course (Udemy | Instructor: Ligency, Ed Donner)",
    "MCP Masterclass: Complete Guide to MCP in Python [2025] (Udemy)",
    "Data Science Certification Programme (Panasonic CareerEx & 360DigiTMG)",
    "Data Science Using Python and R Programming (360DigiTMG)",
    "Machine Learning with Python (IBM & 360DigiTMG)",
    "Introduction to Data Science, Python, Data Analysis, ML with R, SQL & Relational Databases, Deep Learning Fundamentals (IBM)",
    "Google Analytics for Beginners (Google Analytics Academy)",
    "Cloud Learning: AWS DevOps, Azure DevOps, Docker (Datamatics Internal L&D)"
  ],
  awards: [
    "L&D Trainer Felicitation — Certificate of Appreciation (Datamatics, May 2025)",
    "Spot Individual Award Winner (Datamatics, Jul 2024)",
    "L&D Trainer Felicitation — Certificate of Appreciation (Datamatics, May 2024)",
    "Spot Individual Award Winner (Datamatics, Jun 2023)"
  ],
  education: [
    {
      degree: "B.Tech in Biotechnology",
      institution: "Shri Andal Alagar College of Engineering, Anna University",
      period: "08/2013 - 05/2017",
      grade: "GPA: 72.9%"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mutharaiyar HR Sec School, Pondicherry",
      period: "06/2012 - 03/2013",
      grade: "GPA: 64.08%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Indira Gandhi Govt HR Sec School, Pondicherry",
      period: "06/2010 - 03/2011",
      grade: "GPA: 79%"
    }
  ],

  // ==========================================
  // CONTACT SECTION
  // ==========================================
  contact: {
    email: "vijaibt1@gmail.com",
    phone: "+918825947952",
    phoneDisplay: "+91 8825947952",
    location: "Pondicherry, India",
    githubUrl: "https://github.com/VijaiVenkatesan",
    linkedinUrl: "https://www.linkedin.com/in/vijai-v-2b89841a3/",
    portfolioLiveUrl: "https://vijai-ai-portfolio.vercel.app",
    footerMessage: "Interested in discussing Voice AI IVR systems, multi-agent LLM architectures, or enterprise automation pipelines? I am always open to exploring cutting-edge opportunities."
  },

  // ==========================================
  // PROJECTS SECTION
  // ==========================================
  projects: [
    {
      id: "heart-and-paw",
      title: "Heart & Paw Voice AI Agent - Enterprise Clinic IVR System",
      problem: "A 30-clinic US veterinary chain handles ~360,000 calls/year, straining front-desk staff with repetitive scheduling, verification, and FAQ triage.",
      abstract: "Production Voice AI IVR system engineered with CX Agent Studio (Dialogflow CX), gemini-3.1-flash-live frontend NLU, and Vertex AI gemini-3.5-flash webhook LLM, integrated with Vetspire GraphQL/REST APIs to autonomously handle appointment scheduling, caller identification, pet verification, and clinic FAQs.",
      status: "Enterprise Production (UAT Phase) • ~360K Calls/Yr",
      stack: [
        "CX Agent Studio (Dialogflow CX)",
        "gemini-3.1-flash-live",
        "Vertex AI gemini-3.5-flash",
        "Python Flask (Cloud Run)",
        "Cloud Firestore",
        "Cloud Scheduler",
        "Vetspire GraphQL & REST",
        "RingCentral",
        "Achernar Chirp3-HD TTS"
      ],
      github: null,
      live: null,
      readme: `> **Production Enterprise Voice AI Agent for Heart and Paw, a 30-clinic US veterinary chain.**
> Handles **~360,000 inbound calls/year** across appointment booking, caller identification, pet verification, new client/pet registration, and clinic FAQs. Currently in **UAT Phase** ahead of full production rollout.

## 🎙️ Voice Architecture Overview
\`\`\`text
┌──────────────────────────────────────────────────────────────────────────────┐
│                    HEART & PAW VOICE AI IVR ARCHITECTURE                     │
│                                                                              │
│    RINGCENTRAL TELEPHONY                GOOGLE CLOUD CX AGENT STUDIO         │
│  ┌────────────────────────┐           ┌──────────────────────────────────┐   │
│  │ Inbound Caller (~360K) │ ────────► │ Dialogflow CX                    │   │
│  │ (30 US Clinic DNIS)    │           │ • Frontend NLU:                  │   │
│  └────────────────────────┘           │   gemini-3.1-flash-live          │   │
│               │                       │ • Achernar Chirp3-HD TTS         │   │
│               │                       └────────────────┬─────────────────┘   │
│               │                                        │ 14 CX Tool Callbacks│
│               ▼                                        ▼                     │
│    GCP CLOUD FIRESTORE                GCP CLOUD RUN WEBHOOK MICROSERVICE     │
│  ┌────────────────────────┐           ┌──────────────────────────────────┐   │
│  │ clinics_pod02 Cache    │ ◄───────► │ hnp-voice-webhook-pod02          │   │
│  │ DNIS-to-Clinic Mapping │           │ (Python 3.11, Flask, Gunicorn)   │   │
│  └────────────────────────┘           └────────────────┬─────────────────┘   │
│               ▲                                        │                     │
│               │ Daily Sync                             ▼                     │
│  ┌────────────────────────┐           ┌──────────────────────────────────┐   │
│  │ Cloud Scheduler        │           │ Hybrid Date & Slot Resolution    │   │
│  │ (32 Clinics automated) │           │ • 0ms Local Fast-Path Parsers    │   │
│  └────────────────────────┘           │ • Fallback: Vertex AI            │   │
│                                       │   gemini-3.5-flash (3s guard)    │   │
│                                       └────────────────┬─────────────────┘   │
│                                                        │                     │
│                                                        ▼                     │
│                                       ┌──────────────────────────────────┐   │
│                                       │ VETSPIRE EHR BACKEND             │   │
│                                       │ • GraphQL API (Slot Discovery)   │   │
│                                       │ • REST API (Booking & Profiles)  │   │
│                                       └──────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### ⚡ Key Capabilities & Engineering Highlights
*   **Conversational NLU**: Powered by Google's \`gemini-3.1-flash-live\` directly inside CX Agent Studio for fluid human-like speech recognition and natural turn-taking.
*   **Structured Resolution Webhook**: Deployed on GCP Cloud Run (\`hnp-voice-webhook-pod02\`, 2 vCPU/2 GiB) handling 14 CX Tool Callbacks with deterministic zero-hallucination execution.
*   **Hybrid Date & Slot Engine**: High-frequency spoken date parsing runs on a **0ms local fast-path engine**, with automatic fallback to **Vertex AI \`gemini-3.5-flash\`** bounded by a strict **3.0s ThreadPoolExecutor timeout guard**.
*   **Telephony & EHR Integration**: RingCentral SIP/IVR integration paired with live Vetspire GraphQL queries for real-time doctor availability and REST mutations for booking appointments.
*   **Multi-Clinic Caching**: Daily Cloud Scheduler synchronizes 32 clinic schedules into Cloud Firestore (\`clinics_pod02\`) for sub-10ms DNIS-to-clinic lookups.
*   **Lifelike Audio**: Achernar Chirp3-HD TTS delivers realistic, warm veterinary reception vocalizations.`
    },
    {
      id: "medisure",
      title: "MediSure AI - Enterprise Medical Intelligence Platform",
      problem: "Insurance claims processing and medical underwriting are hampered by manual, error-prone document reviews.",
      abstract: "A comprehensive 100% open-source multi-agent AI ecosystem for automated underwriting, fraud detection, and ICD-10 coding.",
      status: "Open Source Platform • Production Architecture",
      stack: ["Python 3.11", "LangGraph", "Llama-3.3-70b", "Llama-4-Vision", "FastAPI", "ChromaDB", "React"],
      github: "https://github.com/VijaiVenkatesan/medisure-ai-platform",
      live: "https://medisure-ai-platform.pages.dev/",
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
      status: "Live Application • 9 Real-Time Data Sources",
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
      status: "Live Application • Brand Compliant",
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
      status: "Live Application • Agentic RAG",
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
  ]
};
