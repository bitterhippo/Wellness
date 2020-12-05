import React, { useState } from "react";
import styles from "./Concern.css";

const Concerns = () => {
  const [title, setTitle] = useState("Neck Pain");

  const [text, setText] = useState("big neck pain");

  const [image, setImage] = useState(
    "https://orthosportandspine.com/wp-content/uploads/2019/06/neck.jpg"
  );

  const setDefinition = (title, text, image) => {
    setTitle(title);
    setText(text);
    setImage(image);
  };

  return (
    <div>
      <h1 className="our-title">{title}</h1>
      <div className="concerns">
        <div className="buttons">
          <div>
            <button
              onClick={() =>
                setDefinition(
                  'Neck Pain',
                  "big neck pain",
                  "https://orthosportandspine.com/wp-content/uploads/2019/06/neck.jpg"
                )
              }
              className="ConcernButton"
            >
              Neck Pain
            </button>
          </div>
          <div>
            <button 
              onClick={() =>
                setDefinition(
                  'Shoulder Pain',
                  "big shoulder pain",
                  "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/shoulder/shoulder-problem-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=0EA53365A7C73A93D52DDFA1A91B63850444C90D"
                )
              }            
            className="ConcernButton">Shoulder Pain</button>
          </div>
          <div>
            <button 
              onClick={() =>
                setDefinition(
                  'Back Pain',
                  "big back pain",
                  "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/back-pain-and-spine-conditions/lower-back-pain-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=D790A02BDED58F47D9D89BA9B15A85D468BBA072"
                )
              }  
            className="ConcernButton">Back Pain</button>
          </div>
          <div>
            <button 
              onClick={() =>
                setDefinition(
                  'Hip & Pelvic Pain',
                  "big hip pain",
                  "https://www.nmortho.com/wp-content/uploads/2018/07/8-Causes-of-Hip-Pain-2.jpg"
                )
              }  
            className="ConcernButton">Hip & Pelvic Pain</button>
          </div>
          <div>
            <button 
              onClick={() =>
                setDefinition(
                  'Knee Pain',
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, delectus? Maxime quia fugit perspiciatis hic labore similique explicabo quam, deleniti ea autem placeat. Voluptas fugit animi delectus, nulla enim aliquid?",
                  "https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/orthopedics/knee-pain-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=99167111ABEDCC7276C74B2354888ED0AC25E13F"
                )
              } 
            className="ConcernButton">Knee Pain</button>
          </div>
          <div>
            <button 
              onClick={() =>
                setDefinition(
                  'Foot & Ankle  Pain',
                  "big feet pain",
                  "https://grelotphysicaltherapy.com/wp-content/uploads/2019/06/foot-ankle-pain-0617-1280x500.jpg"
                )
              } 
            className="ConcernButton">Foot & Ankle Pain</button>
          </div>
        </div>
        <img id="definition-image" src={image} />
        <p id="definition-text">{text}</p>
      </div>
    </div>
  );
};

export default Concerns;