import React from 'react';
import data from './ImageData';
import './Slider.css';

function Slider(props) {
const slide = data.map((d,index)=>{
    return <div key={index} className={index === props.slideIndex ? "mySlides Fade" : "mySlidesNone"}>
               <img src={d.src} alt={d.caption}/>
                   <div className='text'>
                          {d.caption}
                   </div>
            </div>
})

  return slide
}

export default Slider