import React, { Component } from 'react'
import './App.css';
import Slider from './components/Slider';
import Dots from './components/Dots';
import data from './components/ImageData';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      slideIndex : 0,
      arrow:"right"
    }
    
  }
  //nextSLide
  nextSlide(){
    this.setState({
      slideIndex: this.state.slideIndex === data.length -1 ?
       0 : this.state.slideIndex + 1 ,
       arrow:"right"
    })
  }
//previousSlide
previousSlide(){
  this.setState({
    slideIndex : this.state.slideIndex === 0 ? data.length -1 : this.state.slideIndex - 1,
    arrow:"left"
  })
}

componentDidMount(){
       this.timer = setInterval(()=> this.autoPlay(),3000)
}

autoPlay(){
  if(this.state.arrow === "left"){
    this.setState({
      slideIndex : this.state.slideIndex === 0 ? data.length -1 : this.state.slideIndex - 1,
      arrow:"left"
                  }) 
  }
  else{
    this.setState({
      slideIndex: this.state.slideIndex === data.length -1 ?
       0 : this.state.slideIndex + 1 ,
       arrow:"right"
    })
  }
}


  render() {
    return (
<div className='App'>
  <h1>Image Slider</h1>
    <div className='Container'>
         <div className='slideShow-Container'>
            <Slider slideIndex={this.state.slideIndex}/>
            <br/>
            <span className='previous' onClick={()=>this.previousSlide()}>&#10094;</span>
            <span className='next' onClick={()=>this.nextSlide()}>&#10095;</span>
         </div>
    
    </div>
    <br/> 
    <Dots slideIndex={this.state.slideIndex}/>
</div>
    )
  }
}
