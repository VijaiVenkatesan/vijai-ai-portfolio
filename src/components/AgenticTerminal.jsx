import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Maximize2, Minus, X } from 'lucide-react';

const linesConfig = [
  { text: "> SYSTEM INITIALIZED...", delay: 500, color: "var(--text-muted)" },
  { text: "> LOADING AUTOGEN MODULES...", delay: 1000, color: "var(--text-muted)" },
  { text: "> ESTABLISHING LANGGRAPH EXECUTOR THREADS...", delay: 1500, color: "var(--text-muted)" },
  { text: "> [AGENT-01] Analyzing Candidate Profile...", delay: 2200, color: "var(--accent-purple)" },
  { text: "> [AGENT-01] Validating LLM Engineering Fundamentals...", delay: 2900, color: "var(--accent-cyan)" },
  { text: "  [SUCCESS] Advanced RAG confirmed.", delay: 3200, color: "#10b981" },
  { text: "  [SUCCESS] 7+ Years Production scaling confirmed.", delay: 3500, color: "#10b981" },
  { text: "> [SYSTEM] Injecting Profile Context into DOM...", delay: 4200, color: "var(--text-main)" },
  { text: "> ACCESS GRANTED. Welcome to Vijai's Hub.", delay: 5000, color: "#10b981", isBold: true }
];

const AgenticTerminal = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Sequential line rendering
    setDisplayedLines([]);
    const timeouts = [];
    
    linesConfig.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          // Double-check to prevent duplicates if timeouts cross-over
          if (prev.length < index + 1) {
            return [...prev, line];
          }
          return prev;
        });
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => {
      clearInterval(cursorInterval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        background: 'rgba(10, 10, 15, 0.85)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        width: '100%',
        maxWidth: '550px',
        fontFamily: '"Fira Code", monospace',
        fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
        wordBreak: 'break-word'
      }}
    >
      {/* Terminal Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          <Terminal size={14} /> <span>agentic_deploy_v4.py</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)' }}>
          <Minus size={14} />
          <Maximize2 size={14} />
          <X size={14} />
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column', gap: '0.6rem', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        {displayedLines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              color: line.color,
              fontWeight: line.isBold ? '600' : '400',
              textShadow: line.isBold ? '0 0 10px rgba(16, 185, 129, 0.4)' : 'none'
            }}
          >
            {line.text}
          </motion.div>
        ))}
        <div style={{ color: 'var(--text-main)', marginTop: '0.5rem', display: 'flex', gap: '8px' }}>
          <span>~/vijai/portfolio $</span>
          <span style={{ 
            width: '8px', 
            height: '16px', 
            background: 'var(--accent-cyan)', 
            display: 'inline-block',
            opacity: showCursor ? 1 : 0
          }} />
        </div>
      </div>
    </motion.div>
  );
};

export default AgenticTerminal;
