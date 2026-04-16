# 🚀 Senior AI Engineer Portfolio Architecture

Welcome to the source repository for my interactive, production-grade GenAI Engineering Portfolio. 

This repository houses a highly-optimized, performance-driven web application architected to showcase my expertise in Large Language Models (LLMs), Agentic Frameworks (LangGraph, CrewAI, AutoGen), and Enterprise Medical/Competitor AI Systems.

## 🏗️ New Data-Driven Architecture (Option 3)

The portfolio has been recently refactored to a **Centralized Configuration Architecture**. This allows for 100% decoupling of the UI logic from the portfolio data.

- **Single Source of Truth**: All narrative text, career history, skills, and project technical details are now managed inside a single file: `src/data/portfolioConfig.js`.
- **Easy Maintenance**: Content can be added, removed, or modified without ever touching a line of React or CSS code.
- **Production Performance**: The app remains a fast, statically-built SPA while gaining the organizational benefits of a full-stack CMS.

## 🛠 Web Architecture & Tech Stack

This frontend system is engineered with modern React paradigms to provide a highly interactive, "Agentic" user experience based around a custom dark-theme cyber matrix UI.

- **Framework**: `React.js` powered by `Vite` for ultra-fast Hot Module Replacement (HMR) and optimized build times.
- **Micro-Animations**: Uses `Framer Motion` for physics-based scroll targeting, component reveals, and staggered stagger-children container layouts.
- **Component Styling**: Pure CSS variables and custom `Glassmorphism` utilities with high-end graphical blurs (`backdrop-filter: blur(16px)`).
- **Iconography**: `lucide-react` for lightweight, scalable, and tree-shakeable vector injections.
- **Interactive Markdown**: Fully implements `react-markdown` inside asynchronous Modals to perfectly map actual Python infrastructure documentation onto the glass UI.

## 🧠 Custom Agentic Features Built from Scratch

1. **The Agentic Terminal Simulator (`AgenticTerminal.jsx`)**
   - Engineered a mock macOS desktop terminal that types out system logs, verifying LLM credentials before rendering DOM context.
   - Hardened logic ensuring it is 100% safe against React 18 Strict Mode and re-render constraints.

2. **Intelligent Flashlight Engine**
   - A global mouse-tracking coordinate listener drive a luxurious radial gradient beam underneath the user's cursor.

3. **High-Fidelity Architecture Modals**
   - Professional `Architecture & Details` modals for every project featuring custom Markdown rendering, purple "Golden Asset" blockquotes, and cyan sub-headers for technical deep-dives.

4. **Responsive Mobile Restructuring**
   - Hand-coded CSS media queries leveraging Flexbox `wrap-reverse` mechanics and specific `hero-section` safe padding for mobile devices.

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

This infrastructure supports immediate continuous integration (CI/CD) via GitHub and Vercel. Any pushes to the `main` branch will seamlessly trigger an edge deployment build cycle.

```bash
npm run build 
# Generates the highly minified /dist artifact folder.
```

---
*Architected and engineered by Vijai Venkatesan.*
