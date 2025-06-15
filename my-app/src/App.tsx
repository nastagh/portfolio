import React from 'react';
import './App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Separator from './components/Separator';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
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
