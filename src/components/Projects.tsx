import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Projects.scss';

const projectList = [
  {
    title: "Portfolio Website",
    description: "Built a personal portfolio website with React, showcasing projects and skills.",
    tech: ["React", "JavaScript", "CSS", "Git"],
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Data Analysis of Personal Health Metrics",
    description: "Analyzed personal health data",
    tech: ["Python", "Matplotlib", "Pandas"],
    link: "https://github.com/jaiibatra/data-analysis"
  },
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex-chips">
              {project.tech.map((techItem, i) => (
                <Chip key={i} className="chip" label={techItem} />
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
