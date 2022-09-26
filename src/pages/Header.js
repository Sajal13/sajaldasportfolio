import React,{useState,useEffect} from 'react';
import {BiMenuAltRight} from 'react-icons/bi';

import MenuList from '../Component/MenuList';
import "../css/header.css"

function Header() {
    const [toggle,setToggle] = useState(false);

    useEffect(()=>{
        const menu = document.getElementById("menu");
        const allList = menu.querySelectorAll("li");

        function actionToggle(){
            allList.forEach((element)=>(element.classList.remove("active")));
            setToggle(!toggle);
        }
    
        allList.forEach(ele =>(
            ele.addEventListener("click", actionToggle)
        ))
    },[toggle])


    const activeToggle = ()=>{
        setToggle(!toggle)
    }

  return (
    <header>
        <nav className={'nav active bd_grid'}>
            <a href='#home' className='nav_logo'>Sajal Das.</a>

            <ul id='menu' className={toggle? "show":""} >
                {
                    MenuList && MenuList.map((element)=>(
                    <li key={element.id} >
                        <a href={element.hyper_link}>
                            {element.link_name}
                        </a>
                    </li>
                ))
                }
            </ul>

            <i className='toggleMenu' onClick={activeToggle}>
                <BiMenuAltRight />
            </i>
        </nav>
    </header>
  )
}

export default Header
