import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import CarouselBox from "../Components/CarouselBox";

class Concerns extends Component {
  render () {
    return (
    <div>
      <div id="carousel">
      <Carousel>
          < CarouselBox props={{image: "NeckPain.png", text:"Carrying a heavy backpack or purse on one shoulder. Emotional stress can cause the neck muscles to tighten up and ache in response to stress, anxiety, or depression. Sports injury due to strain from a sudden or unusual neck movement or caused by a collision"}} />
          < CarouselBox props={{image: "ShoulderPain.png", text:"Rotator Cuff Injury. Tendonitis. Frozen Shoulder. Osteoarthritis. Bursitis"}} />
          < CarouselBox props={{image: "BackPain.png", text:"Muscle aches. Shooting or stabbing pain with movement, lifting, or coughing. Sciatica or pain that radiates down your leg, with or without tingling and numbness"}} />
          < CarouselBox props={{image: "HipPain.png", text:"Bursa Inflammation (Hip Bursitis). Sacroiliac joint disorders (SI joint).Tendinitis/Overuse Injuries"}} />
          < CarouselBox props={{image: "KneePain.png", text:"Swelling and stiffness. Weakness. Popping or grinding noises. Inability to fully straighten or bend the knee. Locking of the knee"}} />
          < CarouselBox props={{image: "AnklePain.png", text:"Ankle Sprain. Tendonitis. Osteoarthritis (OA). Plantar Fasciitis.Stress Fracture"}} />
        </Carousel>
        </div>
    </div>
    )
  }
};

export default Concerns;
