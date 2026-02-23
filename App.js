import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Shamima Akther Bhuiya. All rights reserved.</p>
      </footer>
      {showBtn && (
        <button className="scroll-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </div>
  );
}

export default App;