import React from 'react';
import {FaCheck} from 'react-icons/fa'

import '../css/alert.css'

function Alert() {
  return (
    <div className='alert' id='alert'>
        <div className='alertIcon'><FaCheck /></div>
        <p className='alertText'>Message sent successfully</p> 
    </div>
  )
}

export default Alert
