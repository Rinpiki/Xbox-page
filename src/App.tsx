<<<<<<< HEAD
import './App.css';
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import SectionControl from './components/SectionControl';
import SectionImg from './components/SectionImg';
import Perguntas from './components/Perguntas';
=======
import Header from '~/components/Header'
import Section from '~/components/Section'
import SectionControl from '~/components/SectionControl'
import SectionImg from '~/components/SectionImg'
import Perguntas from '~/components/Perguntas'
import '~/styles/App.css'
>>>>>>> dbdc0166ffc982043b1ea6d2b1737df0aa183b54

function App() {
  return (
    <>
      <Header />
      <Section />
      <SectionControl />
      <SectionImg />
      <Perguntas />
    </>
  )
}

export default App
