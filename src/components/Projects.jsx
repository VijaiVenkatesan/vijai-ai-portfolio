import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, LayoutDashboard } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Production AI Systems I've Built</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
              {project.title}
            </h3>
            
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', flexGrow: 1, marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.8rem' }}><strong>Problem:</strong> {project.problem}</p>
              <p><strong>Overview:</strong> {project.abstract}</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
              {project.stack.slice(0, 4).map((item, i) => (
                <span key={i} className="badge">{item}</span>
              ))}
              {project.stack.length > 4 && <span className="badge">+{project.stack.length - 4} more</span>}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <button 
                onClick={() => setSelectedProject(project)}
                style={{
                  background: 'var(--text-main)',
                  color: 'var(--bg-main)',
                  border: 'none',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexGrow: 1,
                  justifyContent: 'center'
                }}
              >
                <LayoutDashboard size={18} /> Architecture & Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

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
              zIndex: 1000,
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
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '3rem',
                background: 'rgba(15, 15, 20, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
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
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <X size={24} />
              </button>

              <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem', paddingRight: '40px' }}>
                {selectedProject.title}
              </h2>
              
              {/* Action Buttons inside Modal */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" style={{
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    color: '#fff',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}>
                    <ExternalLink size={18} /> 🚀 Try Live Demo
                  </a>
                )}
                <a href={selectedProject.github} target="_blank" rel="noreferrer" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}>
                  <Code size={18} /> View Source Code
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
                {selectedProject.stack.map((item, i) => (
                  <span key={i} className="badge" style={{ background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.2)', color: 'var(--accent-cyan)' }}>{item}</span>
                ))}
              </div>

              {/* Markdown Render */}
              <div className="markdown-body">
                <ReactMarkdown
                  components={{
                    h2: ({node, ...props}) => <h2 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }} {...props} />,
                    h3: ({node, ...props}) => <h3 style={{ color: 'var(--accent-cyan)', marginTop: '1.5rem', marginBottom: '0.8rem' }} {...props} />,
                    p: ({node, ...props}) => <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1rem', lineHeight: '1.7' }} {...props} />,
                    ul: ({node, ...props}) => <ul style={{ color: 'rgba(255,255,255,0.85)', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} {...props} />,
                    li: ({node, ...props}) => <li {...props} />,
                    blockquote: ({node, ...props}) => <blockquote style={{ borderLeft: '4px solid var(--accent-purple)', paddingLeft: '1rem', margin: '1.5rem 0', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', background: 'rgba(255,255,255,0.02)', padding: '1rem 1rem 1rem 1.5rem', borderRadius: '4px' }} {...props} />,
                    pre: ({node, ...props}) => <pre style={{ background: '#0a0a0f', padding: '1.5rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }} {...props} />,
                    code: ({node, inline, ...props}) => 
                      inline ? 
                      <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2em 0.4em', borderRadius: '3px', fontSize: '0.9em', color: 'var(--accent-cyan)' }} {...props} /> :
                      <code style={{ color: '#00f2fe', fontFamily: 'monospace', fontSize: '0.9rem' }} {...props} />,
                    table: ({node, ...props}) => <table style={{ width: '100%', marginBottom: '1.5rem', borderCollapse: 'collapse' }} {...props} />,
                    th: ({node, ...props}) => <th style={{ textAlign: 'left', padding: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--text-main)' }} {...props} />,
                    td: ({node, ...props}) => <td style={{ padding: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)' }} {...props} />
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
