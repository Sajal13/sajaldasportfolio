import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';


function SkillRender({classNames,languages,icon, values}) {
  return (
    <>
      <div className={classNames}>
        <i className='icon'>{icon}</i>
        <span>{languages}</span>
        <Progress 
        className='progressBar'
        color='info'
        value={values}
        />
      </div>
    </>
  )
}

export default SkillRender
