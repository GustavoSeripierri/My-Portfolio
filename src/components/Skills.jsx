import React, { useState } from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaPalette, 
  FaCogs, 
  FaTools, 
  FaLightbulb
} from 'react-icons/fa';
import { 
  MdDataUsage, 
  MdPsychology, 
  MdInsights, 
  MdTrendingUp 
} from 'react-icons/md';
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAnaconda } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";




function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skillsData = {
    frontend: [
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' }
    ],
    backend: [
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' }
    ],
    tools: [
      { name: 'Git/GitHub', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Anaconda', icon: <SiAnaconda />, color: '#44A833' },
      { name: 'VS Code', icon: <BiLogoVisualStudio />, color: '#007ACC' },
      { name: 'Azure Devops', icon: <VscAzureDevops />, color: '#007ACC' }
    ],
    interests: [
      { name: 'Data Science', icon: <MdDataUsage />, color: '#FF6B6B' },
      { name: 'Machine Learning', icon: <MdPsychology />, color: '#4ECDC4' },
      { name: 'IA', icon: <MdInsights />, color: '#45B7D1' },
      { name: 'Estatística', icon: <MdTrendingUp />, color: '#96CEB4' }
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: <FaPalette /> },
    { key: 'backend', label: 'Backend', icon: <FaCogs /> },
    { key: 'tools', label: 'Ferramentas', icon: <FaTools /> },
    { key: 'interests', label: 'Interesses', icon: <FaLightbulb /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Minhas Habilidades & Tecnologias</h2>
          <p className="skills-subtitle">
            💻 Desenvolvedor apaixonado por tecnologia, inovação e aprendizado contínuo
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-grid">            {skillsData[activeCategory].map((skill, index) => (
              <div key={index} className="skill-card" style={{'--skill-color': skill.color}}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                
                <div className="skill-description">
                  <p>Tecnologia que utilizo em meus projetos</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Tecnologias</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Anos Estudando</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projetos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Aprendendo</span>
          </div>        </div>
      </div>
    </section>
  );
}

export default Skills;