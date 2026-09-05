import React from 'react';

const About = ({ data }) => {
  const excludeKeys = ['Contact']; // We handle contact separately if needed, or inline

  return (
    <div className="page-content fade-in">
      <h2 className="page-title gradient-text">About Me</h2>
      <div className="glass-card">
        <div className="info-grid">
          {Object.entries(data).map(([key, value]) => {
            if (excludeKeys.includes(key)) return null;
            
            return (
              <React.Fragment key={key}>
                <div className="info-label">{key}</div>
                <div className="info-value">{value}</div>
              </React.Fragment>
            );
          })}
          
          <div className="info-label">Email</div>
          <div className="info-value">{data.Contact?.Email}</div>
          
          <div className="info-label">Phone</div>
          <div className="info-value">{data.Contact?.Phone}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
