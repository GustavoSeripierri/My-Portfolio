import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Gustavo</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h2>Desenvolvedor Full Stack</h2>
        <p>Criando soluções digitais inovadoras</p>
        <button className="cta-button">Ver Projetos</button>
      </div>
    </header>
  );
}

export default Header;