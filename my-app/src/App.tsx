import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Separator from './components/Separator';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },[]);

  return (
    <div className="App">
      <Header />
      <Intro />
      <Separator />
      <About/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
