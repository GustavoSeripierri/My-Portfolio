import React from 'react';
import './Header.css';
import GustavoImage from '../assets/Gustavo.jpeg';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span className="logo-icon">G</span>
          <span className="logo-text">ustavo</span>
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
          <div className="hero-left">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Olá, eu sou</span>
            </div>
            <h1 className="main-title">
              <span className="name">Gustavo</span>
              <span className="role">Desenvolvedor Front-End</span>
            </h1>
            <p className="hero-subtitle">
              Transformo ideias em experiências digitais incríveis. 
              Especializado em React, JavaScript e tecnologias modernas 
              para criar interfaces que encantam usuários.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                <span>Ver Projetos</span>
                <i className="arrow">→</i>
              </button>
              <button className="btn-secondary">
                <span>Baixar CV</span>
                <i className="download">↓</i>
              </button>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Email</a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="image-container">
              <div className="image-backdrop"></div>
              <img src={GustavoImage} alt="Gustavo" className="profile-img" />
              <div className="floating-element element-1">⚛️</div>
              <div className="floating-element element-2">💻</div>
              <div className="floating-element element-3">🚀</div>
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

