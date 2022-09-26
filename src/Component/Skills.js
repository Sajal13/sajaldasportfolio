import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SkillRender from './SkillRender';
import { 
  frontEnd,
  backEnd,
  Technologies,
  operatingSystem,
  language,
  others 
} from './Skillset';
import '../css/skills.css'

function Skills() {
  return (
    <>
        <section className='skils section bd_grid' id='skills'>
            <div className='circle skill_circleOne'></div>
            <div className='circle skill_circleTwo'></div>

            <h2 className='section_title'>
                My Skills <br />
                <span>What i can offer</span>
            </h2>
            <div className='container bd_grid'>
              <div className='skillContains'>
                <div className='skill_set'>
                  <h2>Front-End Technologies</h2>
                  {
                    frontEnd && frontEnd.map((element)=>(
                        <SkillRender 
                          key={element.id}
                          classNames = {element.classNames}
                          languages ={element.languages}
                          icon={element.icon}
                          values={element.values}  
                        />
                    ))
                  }
                </div>
                <div className='skill_set'>
                  <h2>Tools</h2>
                    {
                      Technologies && Technologies.map((element)=>(
                          <SkillRender 
                            key={element.id}
                            classNames = {element.classNames}
                            languages ={element.languages}
                            icon={element.icon}
                            values={element.values}  
                          />
                      ))
                    }
                </div>
                <div className='skill_set'>
                  <h2>Back-End Technologies
                    & prog-lang.
                  </h2>
                    {
                      backEnd && backEnd.map((element)=>(
                          <SkillRender 
                            key={element.id}
                            classNames = {element.classNames}
                            languages ={element.languages}
                            icon={element.icon}
                            values={element.values}  
                          />
                      ))
                    }
                </div>
                <div className='skill_set'>
                  <h2>Operating system</h2>
                    {
                      operatingSystem && operatingSystem.map((element)=>(
                          <SkillRender 
                            key={element.id}
                            classNames = {element.classNames}
                            languages ={element.languages}
                            icon={element.icon}
                            values={element.values}  
                          />
                      ))
                    }
                </div>
                <div className='skill_set'>
                  <h2>Languages</h2>
                    {
                      language && language.map((element)=>(
                          <SkillRender 
                            key={element.id}
                            classNames = {element.classNames}
                            languages ={element.languages}
                            icon={element.icon}
                            values={element.values}  
                          />
                      ))
                    }
                </div>
                <div className='skill_set'>
                  <h2>Soft Skills</h2>
                    {
                      others && others.map((element)=>(
                          <SkillRender 
                            key={element.id}
                            classNames = {element.classNames}
                            languages ={element.languages}
                            icon={element.icon}
                            values={element.values}  
                          />
                      ))
                    }
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Skills
