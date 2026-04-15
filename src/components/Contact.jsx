import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Briefcase, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Connect</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem' }}>
          Interested in discussing highly scalable AI architectures, enterprise automation, or multi-agent LLM systems? 
          I am always open to exploring cutting-edge opportunities.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          
          <a href="mailto:vijaibt1@gmail.com" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><Mail size={24}/></div>
              <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)' }}>Email Me</span>
            </div>
          </a>

          <a href="tel:+918825947952" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><MessageSquare size={24}/></div>
              <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)' }}>+91 8825947952</span>
            </div>
          </a>

          <a href="https://github.com/VijaiVenkatesan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}>
              <div style={{ color: 'var(--text-main)' }}><Code2 size={24}/></div>
              <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)' }}>GitHub Profile</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/vijai-v-2b89841a3/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', cursor: 'pointer' }}>
              <div style={{ color: 'var(--accent-purple)' }}><Briefcase size={24}/></div>
              <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)' }}>LinkedIn Network</span>
            </div>
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
