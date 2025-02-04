import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import EducationExperience from './components/EducationExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// Add Font Awesome Icons globally
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab)

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <EducationExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
