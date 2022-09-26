import React,{useRef,useEffect} from 'react';
import {TweenMax,gsap} from "gsap";


import HeroSocial from './HeroSocial';
import Programmer from "../img/programmer3.jpg";
import {DiHtml5, DiCss3,DiJavascript1, DiReact, DiLinux} from "react-icons/di";


import '../css/home.css'

function Home() {
    const homeData = useRef();
    const homeTitle = useRef();
    const buttonRef = useRef();
    const anchors = useRef();
    const image = useRef(); 
    const icons = useRef()
    const tl = gsap.timeline({delay:0.3})

    useEffect(()=>{
        

        TweenMax.to(homeData.current,{visibility:'visible'})
        tl.fromTo(homeTitle.current,{
            duration: 0.5,
            opacity:0,
            y:15,
            ease:"back.out(1.7)",
            delay:1.5
        },{
            y:0,
            opacity:1
        }
        )
        .fromTo(buttonRef.current,{
            duration: 0.5,
            opacity: 0,
            y: 20,
            ease:"bounce.out"
        },
        {
            y:0,
            opacity:1
        }
        )
        .fromTo(anchors.current,{
            y:160,
            opacity: 0,
            stagger:0.1,
            duration: 0.8,
            ease:"back.out(1.7)"
        },
        {
            y:0,
            opacity:1
        },
        "Start"
        )
        .fromTo(image.current,
            0.4,
            {
                opacity:0,

            },
            {
                opacity: 1
            }
        )
        
    },[tl])

  return (
    <>
        <section className='home section bd_grid ' id='home' ref={homeData}>

            <div className='homeData'>
                <h1 className='homeTitle' ref={homeTitle}>
                    Hi, I am <br/> <span>Sajal Das.</span><br /><br />
                    A Web Developer
                </h1>
                <a href='#contact' className='button' ref={buttonRef}>
                    Contact Me
                </a>
            </div> 

            <div className='Herosocial' ref={anchors}>
                {
                    HeroSocial && HeroSocial.map((element)=>(
                        <a 
                        href={element.iconLink}
                        key ={element.id}>
                            {
                                element.iconName
                            }
                        </a>
                    ))
                }
            </div>
            <div className='heroImg' ref={image}>
                <img src={Programmer} alt ="Programmer" className='model' />
                <div className='animateIcon' ref={icons}>
                    <i className='htmlIcon'><DiHtml5 /></i>
                    <i className='cssIcon'><DiCss3 /></i>
                    <i className='jsIcon'><DiJavascript1 /></i>
                    <i className='reactIcon'><DiReact /></i>
                    <i className='linuxIcon'><DiLinux /></i>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
