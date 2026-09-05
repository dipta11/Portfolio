import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <div className="page-content fade-in">
      <h2 className="page-title gradient-text">Contact Me</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginBottom: '2rem' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-item" target="_blank" rel="noreferrer">
            <Mail size={24} color="var(--accent-color)" />
            <span>{data.email}</span>
          </a>
          <a href={data.linkedin} className="contact-item" target="_blank" rel="noreferrer">
            <span>🔗 LinkedIn Profile</span>
          </a>
          <a href={data.github} className="contact-item" target="_blank" rel="noreferrer">
            <span>💻 GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
