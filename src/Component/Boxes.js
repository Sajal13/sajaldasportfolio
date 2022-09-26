import React from 'react'

function Boxes({boxImage, boxName,boxText }){
  return (
    <div className="service_Box">
        <img src={boxImage} alt={boxName}/>
         <h2>{boxName}</h2>
          <p>{boxText}</p>
    </div>
  )
}

export default Boxes;