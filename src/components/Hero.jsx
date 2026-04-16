import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu } from 'lucide-react';
import AgenticTerminal from './AgenticTerminal';
import { portfolioConfig } from '../data/portfolioConfig';

const Hero = () => {
  return (
    <section className="section-container hero-section">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse', width: '100%' }}>
        <div style={{ flex: '1 1 500px', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <span className="badge"><Terminal size={14} style={{ marginRight: '6px' }}/> Senior AI Engineer</span>
              <span className="badge"><Cpu size={14} style={{ marginRight: '6px' }}/> GenAI Architect</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title gradient-text" 
            style={{ 
              textAlign: 'left', 
              margin: '0 0 1.5rem', 
              fontSize: '3.5rem',
              maxWidth: '600px'
            }}
          >
            {portfolioConfig.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.15rem', 
              marginBottom: '2.5rem', 
              maxWidth: '550px' 
            }}
          >
            {portfolioConfig.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" style={{
              background: 'var(--text-main)',
              color: 'var(--bg-main)',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Code2 size={18} /> View Architecture
            </a>
            <a href="#about" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--glass-border)',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}>
              Read Narrative
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flexShrink: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}
          className="hero-graphics"
        >
          <img 
            src={portfolioConfig.hero.githubAvatarUrl} 
            alt="Vijai Venkatesan - Senior AI Engineer"  
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow), 0 0 50px rgba(0, 242, 254, 0.15)',
              background: 'var(--glass-bg)'
            }}
            onError={(e) => {
              // Fallback block if GitHub avatar blocks hotlinking
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238b92a5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
            }}
          />
          
          <AgenticTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
