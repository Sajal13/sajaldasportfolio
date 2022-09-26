import React from 'react';

import projectList from './ProjectImages';
import "../css/project.css";

function Project() {
  return (
    <>
    <section className='project section bd_grid' id='projects'>
        <div className='circle project_circleOne'></div>
        <div className='circle project_circleTwo'></div>

        <h2 className='section_title'>
            Project<br />
            <span>What have i done till now</span>
        </h2>
        <div className='projectContainer bd_grid'>
            {
                projectList && projectList.map((element)=>(
                    <div className='projectImage' key={element.id}>
                        <img src={element.sources} alt='project photos' />
                        <p>{element.title}</p>
                        <a href={element.links} className='button'>GitHub</a>
                    </div>
                ))
            }
        </div>
    </section>
</>
  )
}

export default Project
