import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="page-content fade-in">
      <h2 className="page-title gradient-text">My Skills</h2>
      <div className="glass-card">
        <div className="skills-grid">
          {data.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
