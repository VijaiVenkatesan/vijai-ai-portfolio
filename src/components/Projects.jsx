import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, LayoutDashboard } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { portfolioConfig } from '../data/portfolioConfig';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="systems" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Production AI Systems</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: '2rem' 
        }}>
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>
                  {project.abstract}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.stack.map((tech, i) => (
                  <span key={i} className="badge" style={{ fontSize: '0.8rem' }}>{tech}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="btn" 
                  style={{ 
                    background: 'rgba(0, 242, 254, 0.1)', 
                    color: 'var(--accent-cyan)', 
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  <LayoutDashboard size={18} /> Architecture & Details
                </button>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" title="Github Code" style={{ color: 'var(--text-muted)' }}><Code size={22}/></a>
                  <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo" style={{ color: 'var(--accent-cyan)' }}><ExternalLink size={22}/></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '85vh',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '2.5rem',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{ 
                  position: 'absolute', 
                  right: '1.5rem', 
                  top: '1.5rem', 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-muted)', 
                  cursor: 'pointer' 
                }}
              >
                <X size={28} />
              </button>

              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', paddingRight: '3rem' }}>{selectedProject.title}</h2>
              
              <div className="markdown-content" style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                <ReactMarkdown>{selectedProject.readme}</ReactMarkdown>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem' }}>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--glass-bg)', padding: '0.8rem 1.5rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Code size={20} /> Repository Code
                </a>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--accent-cyan)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ExternalLink size={20} /> Launch Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
