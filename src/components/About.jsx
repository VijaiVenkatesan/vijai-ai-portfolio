import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">The Engineering Mindset</h2>
        
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
          {portfolioConfig.about.narrative}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
