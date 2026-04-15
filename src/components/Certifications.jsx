import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, FileBadge } from 'lucide-react';

const certifications = [
  "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents (Udemy)",
  "AI Engineer Agentic Track: The Complete Agent & MCP Course (Udemy)",
  "MCP Masterclass: Complete Guide to MCP in Python (Udemy)",
  "IBM Certified: Machine Learning with R, SQL, Deep Learning Fundamentals",
  "Cloud Learning: AWS DevOps, Azure DevOps, Docker (Datamatics)",
  "Data Science Certification Programme (Panasonic CareerEx & 360DigiTMG)"
];

const awards = [
  "2x Spot Individual Award Winner (Datamatics, Jul 2024 & Jun 2023)",
  "2x L&D Trainer Felicitation - Certificate of Appreciation (Datamatics, May 2024 & 2025)"
];

const Certifications = () => {
  return (
    <section className="section-container" style={{ paddingBottom: '8rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
        
        {/* Certifications Card */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--accent-purple)' }}><FileBadge size={28}/></div>
            <h3 style={{ fontSize: '1.5rem' }}>Licenses & Certifications</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </motion.div>

        <div>
          {/* Awards Card */}
          <motion.div
            className="glass-card"
            style={{ marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><Award size={28}/></div>
              <h3 style={{ fontSize: '1.5rem' }}>Honors & Awards</h3>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
              {awards.map((award, i) => (
                <li key={i}>{award}</li>
              ))}
            </ul>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--text-main)' }}><GraduationCap size={28}/></div>
              <h3 style={{ fontSize: '1.5rem' }}>Education</h3>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>B.Tech in Biotechnology</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.2rem' }}>Shri Andal Alagar College of Engineering, Anna University</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
