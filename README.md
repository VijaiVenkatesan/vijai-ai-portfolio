# 🚀 Senior AI Engineer Portfolio Architecture

Welcome to the source repository for my interactive, production-grade AI Engineering Portfolio. 

This repository houses a highly-optimized, performance-driven web application architected to showcase my expertise in **Voice AI**, **Agentic AI Frameworks** (LangGraph, CrewAI, AutoGen, Model Context Protocol - MCP), **Large Language Models** (Gemini 3.1 Flash Live, Vertex AI Gemini 3.5 Flash, Claude, GPT-4o), and **Enterprise Document & Voice Automation Systems**.

## 🏗️ Centralized Configuration Architecture

The portfolio utilizes a **Centralized Configuration Architecture** that completely decouples UI presentation from portfolio data:

- **Single Source of Truth**: All narrative text, career history, skills, certifications, education, and project technical details are managed inside `src/data/portfolioConfig.js`.
- **Easy Maintenance**: Content can be updated, expanded, or modified without altering component or styling code.
- **Production Performance**: The app remains an ultra-fast, statically-built React 18 SPA on Vite.

## 🛠 Web Architecture & Tech Stack

This frontend system is engineered with modern React paradigms to provide a highly interactive, "Agentic" cyber aesthetic:

- **Framework**: `React.js` powered by `Vite` for ultra-fast Hot Module Replacement (HMR) and optimized build times.
- **Micro-Animations**: Uses `Framer Motion` for physics-based scroll targeting, component reveals, and staggered child layouts.
- **Component Styling**: Pure CSS variables and custom `Glassmorphism` utilities with high-end graphical blurs (`backdrop-filter: blur(16px)`).
- **Iconography**: `lucide-react` for lightweight, scalable, and tree-shakeable vector injections.
- **Interactive Markdown**: Fully implements `react-markdown` inside asynchronous Modals to render complete production ASCII diagrams and architecture breakdowns.

## 🧠 Custom Agentic & Voice AI Features

1. **The Agentic Terminal Simulator (`AgenticTerminal.jsx`)**
   - Engineered a mock macOS desktop terminal that types out system logs, verifying Voice AI pipelines, Gemini 3.1 Flash Live, and LLM credentials before rendering DOM context.
   - Built to run seamlessly across all viewports and React 18 Strict Mode lifecycles.

2. **Intelligent Flashlight Engine**
   - A global mouse-tracking coordinate listener drives a luxurious radial gradient beam underneath the user's cursor.

3. **High-Fidelity Architecture Modals (`Projects.jsx`)**
   - Professional `Architecture & Details` modals for every project featuring custom Markdown rendering, purple "Golden Asset" blockquotes, cyan sub-headers, and production ASCII flows.
   - Highlights flagship enterprise systems including the **Heart & Paw Voice AI IVR System (~360,000 calls/year)** and **MediSure AI Platform**.

4. **Responsive Mobile Restructuring**
   - Hand-coded CSS media queries with Flexbox `wrap-reverse` mechanics and dedicated mobile safe padding.

## 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/VijaiVenkatesan/vijai-ai-portfolio.git

# 2. Install dependencies
npm install

# 3. Start the Development Server
npm run dev
```

## ☁️ Production Deployment

This infrastructure supports immediate continuous integration (CI/CD) via GitHub and Vercel. Pushing to the `main` branch automatically triggers an edge deployment build cycle.

```bash
npm run build 
# Generates the highly minified /dist artifact folder.
```

---
*Architected and engineered by Vijai Venkatesan.*
