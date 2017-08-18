import React from 'react';
import map from 'lodash/map';
import PROJECTS from '../../assets/projects';

const Projects = () => (
  <div className="projects">
    {map(PROJECTS, (project) => (
      <div className="project">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url}>
          <img src={project.image} alt={project.title} />
        </a>
        {project.github && (
          <a href={project.github}>GitHub</a>
        )}
        <p>Tech Stack:</p>
        <ul>
          {map(project.techStack, (tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <hr />
      </div>
    ))}
  </div>
);

export default Projects;
