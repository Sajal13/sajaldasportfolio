import React,{useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

import Home from './Home';
import '../css/mainContainer.css'
import Services from './Services'
import Skills from './Skills'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer';

function MainContainer() {
  useEffect(()=>{
    const sections = document.querySelectorAll('.section');
    ScrollReveal().reveal(sections,{
      delay : 400,
      duration : 500,
      reset :true,
      easing : "ease-in"
    })
  })

  return (
   <>
   <main>
     <Home /> 
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />
   </main>
   </>
  )
}

export default MainContainer
