import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copiedStates, setCopiedStates] = useState({
    email: false,
    linkedin: false,
    github: false
  });

  const contactInfo = [
    {
      id: 'email',
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'gustavoseripierri@gmail.com',
      copyValue: 'gustavoseripierri@gmail.com'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gustavo-seripierri-da-conceição/',
      copyValue: 'https://linkedin.com/in/gustavo-seripierri-da-conceição/'
    },
    {
      id: 'github',
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/GustavoSeripierri',
      copyValue: 'https://github.com/GustavoSeripierri'
    }
  ];

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você adicionaria a lógica para enviar o email
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos conversar!</h3>
            <p>Estou sempre aberto a novas oportunidades e projetos interessantes.</p>            <div className="contact-methods">
              {contactInfo.map((contact) => (
                <div key={contact.id} className="contact-method">
                  <div className="contact-method-header">
                    <div className="contact-icon-label">
                      <span className="contact-icon">{contact.icon}</span>
                      <strong>{contact.label}:</strong>
                    </div>
                    <button 
                      className="copy-btn"
                      onClick={() => handleCopy(contact.id, contact.copyValue)}
                      title={`Copiar ${contact.label}`}
                    >
                      {copiedStates[contact.id] ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                  <span className="contact-value">{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;