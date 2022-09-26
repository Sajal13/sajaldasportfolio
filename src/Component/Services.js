import React from 'react';

import Boxes from './Boxes';
import Developer from '../img/developer.png'
import '../css/services.css';

function Services() {
    const texts = [
        {
            id: 1,
            boxImage: Developer,
            boxName: 'Design',
            boxText: `I always provide the responsive design for the website
            with updated technology. To learn more about
            web development desing click the "learn more" button.`
        },
        {
            id: 2,
            boxImage: Developer,
            boxName: "UI/UX",
            boxText:` I always prefer developing a website that has
            the most interection with the users. I wold love to have some 
            feedback from my users so that they can show some interest 
            in my website.`
        },
        {
            id : 3,
            boxImage : Developer,
            boxName : 'Front-End Development',
            boxText: ` I build a front end websites using Reactjs. Maintain the global state using react-redux and
            have SPA funtionality with react-router. Which can be then used with the back end.`
        },
        {
            id : 4,
            boxImage : Developer,
            boxName : 'Data entry',
            boxText: `I also provide services for data entry jobs through Microsoft Office. I can make documents through
            microsoft Word and slide through Microsoft Powerpoint.`
        },
        {
            id : 5,
            boxImage : Developer,
            boxName : 'Documentation',
            boxText: `I can make a well-documented website. Which can increase ther user's interaction and is 
            beneficial for understanding the website.`
        }

]
  return (
    <>
        <section className='services section bd_grid' id='services'>
            <div className='circle service_circleOne'></div>
            <div className='circle service_circleTwo'></div>

            <h2 className='section_title'>
                Services<br />
                <span>What do i offer</span>
            </h2>
            <div className='serviceContainer bd_grid'>
                <div className='serviceImage'>
                    {
                    texts.map((boxElement)=>(
                        <Boxes 
                        key={boxElement.id}
                        boxImage ={boxElement.boxImage}
                        boxName ={boxElement.boxName}
                        boxText = {boxElement.boxText}  
                        />
                    ))
                }
                </div>
            </div>
        </section>
    </>
  )
}

export default Services
