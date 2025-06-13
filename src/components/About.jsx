import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre Mim</h2>        <div className="about-content">
          <div className="about-text">
            <p>
              Olá! Sou Gustavo, um desenvolvedor apaixonado por criar experiências 
              digitais incríveis. Com experiência em tecnologias modernas como React, 
              JavaScript e Node.js, estou sempre buscando novos desafios.
            </p>
            <p>
              Acredito que a tecnologia pode transformar ideias em soluções reais 
              que impactam positivamente a vida das pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;