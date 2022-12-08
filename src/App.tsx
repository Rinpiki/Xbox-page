import './App.css';
import './index.css';
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import SectionControl from './components/SectionControl';
import SectionImg from './components/SectionImg';
import Perguntas from './components/Perguntas';

function App() {
  return (
    <>
      <Header />
      <Section />
      <SectionControl />
      <SectionImg />
      <Perguntas />
    </>
  );
}

export default App;
