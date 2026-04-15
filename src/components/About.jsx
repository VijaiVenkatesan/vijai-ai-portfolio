import React from 'react';
import { motion } from 'framer-motion';

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
        
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>
          <p>
            As a Senior AI Engineer with over 7 years of experience in the Applied AI space, I specialize in designing, 
            deploying, and scaling enterprise-grade artificial intelligence systems. My expertise bridges the gap between 
            state-of-the-art research and production-ready engineering, focusing on Generative AI, Large Language Models (LLMs), 
            and highly accurate NLP pipelines.
          </p>
          <p>
            I don't just train models; <strong>I architect end-to-end AI systems.</strong> From developing intelligent 
            document processing pipelines that achieve 93%+ precision, to building multi-agent AI ecosystems that automate 
            complex decision-making, my focus is always on delivering measurable business impact. 
          </p>
          <p>
            My approach combines strong AI/ML fundamentals with rigorous software architecture practices, ensuring high system 
            reliability, minimal latency, and seamless integrations in cloud environments.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
