import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Database, Server, Component, Cloud } from 'lucide-react';

const skillsData = [
  {
    icon: <Brain size={24} className="text-accent" />,
    title: "Frontier LLMs & AI Models",
    items: ["Anthropic Claude Models", "OpenAI GPT Models", "Google Gemini Models", "Llama-3.3 & 3.1", "HuggingFace Ecosystem", "Whisper-v3", "Groq", "Azure OpenAI", "Transformers", "TensorFlow", "Scikit-Learn"]
  },
  {
    icon: <Bot size={24} className="text-accent" />,
    title: "Agentic AI & RAG Ecosystem",
    items: ["LangGraph", "CrewAI", "AutoGen", "OpenAI Agents SDK", "Model Context Protocol (MCP)", "Agentic RAG", "Context Engineering", "Prompt Engineering", "Langchain", "ChromaDB", "Semantic Routing"]
  },
  {
    icon: <Server size={24} className="text-accent" />,
    title: "Core Engineering & Backend",
    items: ["Python (3.9 - 3.11)", "FastAPI", "Django REST Framework", "SQLAlchemy (Async)", "RESTful API Architecture", "ThreadPoolExecutor", "JWT Auth"]
  },
  {
    icon: <Database size={24} className="text-accent" />,
    title: "Data, Web Scraping & Document AI",
    items: ["Pillow", "Tesseract OCR", "EasyOCR", "PyPDF2", "fpdf2", "python-pptx", "DuckDuckGo Search", "yfinance", "Pytrends", "BeautifulSoup4", "Trafilatura", "Pandas", "NumPy"]
  },
  {
    icon: <Component size={24} className="text-accent" />,
    title: "Frontend & UI Engineering",
    items: ["React 18", "Vite", "Streamlit", "Framer Motion", "Recharts", "Lucide React"]
  },
  {
    icon: <Cloud size={24} className="text-accent" />,
    title: "Cloud, DevOps & Infrastructure",
    items: ["Azure VMs", "GCP VMs", "AWS DevOps", "Docker", "GitHub Actions (CI/CD)", "Render.com", "Netlify", "PostgreSQL", "SQLite"]
  }
];

const SkillsGrid = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Key Technical Arsenal</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '2rem'
      }}>
        {skillsData.map((category, idx) => (
          <motion.div 
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--accent-cyan)' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{category.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.items.map((item, i) => (
                <span key={i} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
