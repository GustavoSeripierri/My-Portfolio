import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce React',
      description: 'Loja virtual completa com carrinho de compras e pagamento',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Painel administrativo com gráficos e relatórios',
      technologies: ['React', 'Chart.js', 'Firebase'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'App Mobile React Native',
      description: 'Aplicativo móvel para gestão de tarefas',
      technologies: ['React Native', 'Expo', 'AsyncStorage'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;