import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ourStuff.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import CarouselBox from "../../CarouselBox";

class Facilities extends Component {
  render () {
    return (
    <div>
      <h1 className='our-title'>Our Facilities</h1>
      <div className="carousel">
      <Carousel>
          < CarouselBox props={{image: "https://images.unsplash.com/photo-1524222928538-afb4409a0d70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", text:"Waiting room"}} />
          < CarouselBox props={{image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1490&q=80", text:"examination room"}} />
          < CarouselBox props={{image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1335&q=80", text:"Greetings, citizen"}} />
        </Carousel>
        </div>
    </div>
    )
  }
};

export default Facilities;