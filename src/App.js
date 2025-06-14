import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
