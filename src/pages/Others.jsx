import React from 'react';

const Others = ({ data }) => {
  return (
    <div className="page-content fade-in">
      <h2 className="page-title gradient-text">Other Researches & Activities</h2>
      <div className="glass-card">
        {data.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>Nothing here yet! I am keeping this section for my future researches and activities.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {data.map((item, index) => (
              <div key={index} className="project-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Others;
