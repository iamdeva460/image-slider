import data from './ImageData';
import React from 'react';
import './Dots.css';



function Dots(props) {
const Dots= data.map((data,index)=>{

return <span key={index} className={index === props.slideIndex ? "dot active"
    : "dot"
}>  </span>
})

  return (
    <div className='dots-container'>
   {Dots}
    </div>
  )
}

export default Dots