import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Career Progression</h2>
      
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Vertical line connecting nodes */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: '20px',
          bottom: '20px',
          width: '2px',
          background: 'var(--glass-border)',
          zIndex: 0
        }}></div>

        {portfolioConfig.experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ display: 'flex', gap: '1.5rem', zIndex: 1 }}
          >
            {/* Timeline node */}
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--bg-main)',
              border: '2px solid var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Briefcase size={20} className="text-accent" />
            </div>

            <div className="glass-card" style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>{job.role}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16}/> {job.company} — {job.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16}/> {job.duration}</span>
              </div>

              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.85)' }}>
                {job.bullets.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.tech && job.tech.map((t, i) => (
                  <span key={i} className="badge" style={{ background: 'transparent' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
