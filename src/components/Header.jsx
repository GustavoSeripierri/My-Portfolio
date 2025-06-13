import React from 'react';
import './Header.css';
import GustavoImage from '../assets/Gustavo.jpeg';
import CVFile from '../assets/CV_GustavoSeripierri.pdf';
import { FaReact, FaRocket, FaLaptopCode, FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { HiHand } from 'react-icons/hi';

function Header() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'CV_GustavoSeripierri.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">Gustavo</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact" className="nav-cta">Contato</a></li>
        </ul>
      </nav>
      
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">            <div className="greeting">
              <HiHand className="wave" />
              <span className="greeting-text">Olá, eu sou</span>
            </div>
            <h1 className="main-title">
              <span className="name">Gustavo</span>
              <span className="role">Desenvolvedor/Programador</span>
            </h1>
            <p className="hero-subtitle">
              Entusiasta da tecnologia e gosto de ir além da sala de aula, aplicando meus conhecimentos em
              projetos práticos de desenvolvimento web com ferramentas como React.js, HTML e CSS.
              Além de gostar da área de Ciência de Dados.
            </p>
            <div className="hero-actions">              <button className="btn-primary">
                <span>Ver Projetos</span>
                <FaArrowRight className="arrow" />
              </button>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                <span>Baixar CV</span>
                <FaDownload className="download" />
              </button>
            </div>            <div className="social-links">
              <a href="#" className="social-link">
                <FaGithub className="social-icon" />
                GitHub
              </a>
              <a href="#" className="social-link">
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
              <a href="#" className="social-link">
                <FaEnvelope className="social-icon" />
                Email
              </a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="image-container">
              <div className="image-backdrop"></div>
              <img src={GustavoImage} alt="Gustavo" className="profile-img" />
              <div className="floating-element element-1"><FaReact/></div>
              <div className="floating-element element-2"><FaRocket/></div>
              <div className="floating-element element-3"><FaLaptopCode/></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>
    </header>
  );
}

export default Header;

