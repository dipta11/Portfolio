import React from 'react';

const Projects = ({ data }) => {
  return (
    <div className="page-content fade-in">
      <h2 className="page-title gradient-text">My Projects</h2>
      <div className="projects-grid">
        {data.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <h3>{project.name}</h3>
            <div className="project-tools">{project.tools}</div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
