import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const expData = [
  {
    role: "Associate Consultant - AI/ML",
    company: "Datamatics (TruAI Division)",
    location: "Pondicherry",
    period: "04/2022 - Present",
    points: [
      "Leading end-to-end production ownership of Ingram Micro and BelleTire TruAI automation systems, ensuring reliability, scalability, and business continuity.",
      "Achieved 90% extraction accuracy for Ingram Micro and 93.40% accuracy for BelleTire invoice processing automation.",
      "Optimized system performance to achieve an average processing latency of 10–11 seconds per page (end-to-end).",
      "Designing and deploying AI services via Django REST APIs for seamless integration on Azure and GCP Virtual Machines.",
      "Independently managing multiple live production pipelines with continuous model evaluation and prompt optimization."
    ],
    tech: ["Python", "Django REST", "Gemini 2.5 Flash", "Azure VMs", "GCP VMs", "Prompt Engineering"]
  },
  {
    role: "Data Science Intern",
    company: "Innodatatics",
    location: "Hyderabad",
    period: "10/2021 - 04/2022",
    points: [
      "Developed and deployed a machine learning-based recommendation engine using collaborative and content-based filtering, achieving 85% accuracy.",
      "Optimized Named Entity Recognition (NER) processes for medical journals, significantly reducing data analysis time."
    ],
    tech: ["Python", "Scikit-Learn", "TensorFlow", "NLP (Spacy, med7)", "Pandas", "Streamlit"]
  },
  {
    role: "Associate (Medical Summarizer)",
    company: "Aosta Software Technologies India",
    location: "Chennai",
    period: "06/2021 - 08/2021",
    points: [
      "Summarized medical records for legal experts using AI/ML and NLP techniques, ensuring analytical clarity.",
      "Leveraged Cognitive Science principles to improve the contextual relevance of complex legal summaries."
    ],
    tech: ["Python", "SQL", "NLP Context Analysis"]
  },
  {
    role: "Medical Record Analyst",
    company: "Rapid Care Transcription Pvt Ltd",
    location: "Pondicherry",
    period: "04/2018 - 05/2021",
    points: [
      "Supported US healthcare providers and legal investigations through detailed data analysis and visualization.",
      "Analyzed comprehensive medical records for accuracy, completeness, and compliance with strict regulatory standards."
    ],
    tech: ["SQL", "Data Visualization", "Healthcare Analytics"]
  }
];

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

        {expData.map((job, idx) => (
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16}/> {job.period}</span>
              </div>

              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.85)' }}>
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.tech.map((t, i) => (
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
