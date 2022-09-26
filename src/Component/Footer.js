import React from 'react';

import HeroSocial from "./HeroSocial"
import '../css/footer.css';

function Footer() {
  return (
    <>
      <footer>
            <div className='footerSocial'>
                {
                    HeroSocial && HeroSocial.map((element)=>(
                        <a 
                        href={element.iconLink} 
                        key={element.id}
                        >
                            {element.iconName}
                        </a>
                    ))
                }
            </div>
            <p className='copyRight'>
                &#169; Sajal Das's portfolio: all rights reserved
            </p>
      </footer>
    </>
  )
}

export default Footer
