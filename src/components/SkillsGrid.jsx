import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Database, Server, Component, Cloud } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const iconMap = {
  Brain: <Brain size={24} className="text-accent" />,
  Bot: <Bot size={24} className="text-accent" />,
  Database: <Database size={24} className="text-accent" />,
  Server: <Server size={24} className="text-accent" />,
  Component: <Component size={24} className="text-accent" />,
  Cloud: <Cloud size={24} className="text-accent" />
};

const SkillsGrid = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Key Technical Arsenal</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {portfolioConfig.skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '0.8rem', borderRadius: '12px', display: 'flex' }}>
                  {iconMap[skillGroup.iconName]}
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{skillGroup.categoryName}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsGrid;
