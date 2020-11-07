import React, { Component } from 'react';
import '../App.css';

function CarouselBox(props) {
  console.log(props.props.image)

  return (
    <div id="CarouselBox">
      <img src={props.props.image} />
      <p className="legend">{props.props.text}</p>
    </div>
  )
}

export default CarouselBox;