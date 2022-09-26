import React from 'react'

import '../css/formComponent.css'
function FormComponent({handleChange, labels, ...otherProps}) {
  return (
    <div className='group'>
         <input className='form-input' onChange={handleChange} {...otherProps} />
        {
          labels ?
          (<label 
          className={`${otherProps.value.length ? 'shrink' : ' '} 
          form-input-label`}
          >
            {labels}
          </label>)
          : 
          null
        }
    </div>
  )
}

export default FormComponent
