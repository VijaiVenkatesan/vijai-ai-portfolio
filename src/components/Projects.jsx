import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, LayoutDashboard } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { portfolioConfig } from '../data/portfolioConfig';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <div style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>
                  {project.abstract}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                {project.stack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="badge" style={{ fontSize: '0.8rem' }}>{tech}</span>
                ))}
                {project.stack.length > 4 && <span className="badge">+{project.stack.length - 4} more</span>}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'var(--text-main)',
                    color: 'var(--bg-main)',
                    border: 'none',
                    padding: '0.7rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexGrow: 1,
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
                  }}
                  className="btn-glow"
                >
                  <LayoutDashboard size={18} /> Architecture & Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Architecture Modal */}
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
              background: 'rgba(5, 5, 7, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-container"
              style={{
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                background: 'rgba(15, 15, 20, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'background 0.2s',
                  zIndex: 10
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <X size={24} />
              </button>

              <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', paddingRight: '40px' }}>
                {selectedProject.title}
              </h2>
              
              {/* Action Buttons inside Modal */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" style={{
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  color: '#fff',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}>
                  <ExternalLink size={20} /> Try Live Demo
                </a>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}>
                  <Code size={20} /> View Source Code
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
                {selectedProject.stack.map((item, i) => (
                  <span key={i} className="badge" style={{ background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.2)', color: 'var(--accent-cyan)' }}>{item}</span>
                ))}
              </div>

              {/* Markdown Render with Exact Original Styles */}
              <div className="markdown-body">
                <ReactMarkdown
                  components={{
                    h2: ({node, ...props}) => <h2 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1.8rem' }} {...props} />,
                    h3: ({node, ...props}) => <h3 style={{ color: 'var(--accent-cyan)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.4rem' }} {...props} />,
                    p: ({node, ...props}) => <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.2rem', lineHeight: '1.8', fontSize: '1.05rem' }} {...props} />,
                    ul: ({node, ...props}) => <ul style={{ color: 'rgba(255,255,255,0.85)', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} {...props} />,
                    li: ({node, ...props}) => <li style={{ fontSize: '1.05rem' }} {...props} />,
                    blockquote: ({node, ...props}) => <blockquote style={{ borderLeft: '4px solid var(--accent-purple)', paddingLeft: '1.5rem', margin: '2rem 0', color: '#fff', fontStyle: 'italic', background: 'rgba(255,255,255,0.03)', padding: '1.2rem 1.2rem 1.2rem 1.5rem', borderRadius: '8px' }} {...props} />,
                    pre: ({node, ...props}) => <pre style={{ background: '#0a0a0f', padding: '1.5rem', borderRadius: '12px', overflowX: 'auto', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.4)', fontFamily: 'Fira Code, monospace', fontSize: '0.9rem' }} {...props} />,
                    code: ({node, inline, ...props}) => 
                      inline ? 
                      <code style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--accent-cyan)', fontSize: '0.95em' }} {...props} /> :
                      <code style={{ color: '#00f2fe', fontFamily: 'inherit' }} {...props} />,
                    table: ({node, ...props}) => <div style={{ overflowX: 'auto', marginBottom: '2rem' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }} {...props} /></div>,
                    th: ({node, ...props}) => <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--text-main)', background: 'rgba(255,255,255,0.02)' }} {...props} />,
                    td: ({node, ...props}) => <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)' }} {...props} />,
                    strong: ({node, ...props}) => <strong style={{ color: '#fff', fontWeight: '700' }} {...props} />
                  }}
                >
                  {selectedProject.readme}
                </ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
