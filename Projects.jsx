import React from 'react';

const PROJECTS = [
  {
    title: 'Nirapod Poth',
    desc: 'A web app developed to enhance safety for women who frequently travel for work, education, or personal reasons. Users can explore Sylhet locations and victims can report harassment to help others stay safe.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Shamima066/NirapodPoth_Project',
  },
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio built with React.js featuring smooth navigation, typing effects, and responsive design.',
    technologies: ['React.js', 'CSS'],
    github: 'https://github.com/Shamima066/NirapodPoth_Project',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <br />
            <div>
              {project.technologies.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>
            <br />
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
