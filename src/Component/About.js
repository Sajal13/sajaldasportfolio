import React from 'react';

import MyPDF from "../assets/sajal_das.pdf"
import AboutPhoto from "../img/about.jpg"
import "../css/about.css"

function About() {
  return (
    <>
        <section className='about section bd_grid' id='about'>
            <div className='circle about_circleOne'></div>

            <h2 className='section_title'>
                About Me <br />
                <span>Who am I?</span>
            </h2>
            <div className='aboutContainer bd_grid'>
                <div className='aboutImage'>
                    <img src= {AboutPhoto} alt={'page author'} />
                    <div className='about_text_section'>
                        <p>
                            I am a Front-End Web Developer with knowledge of
                            React, React-router, React-redux, React-bootstrap
                            and Firebase. I like to play with my code and make 
                            some magnificent web applications with new technologies.
            
                            I have mentioned my previous work below. If you like it 
                            don't hesitate to contact me.

                            Besides, if you want to know more about me, here is my CV.
                            You can download it by clicking the button.
                        </p>
                        <a href={MyPDF} className='button' download = {"sajal_das_cv.pdf"}>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
