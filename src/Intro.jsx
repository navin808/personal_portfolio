import React from "react";
import hello from './image/nav.jpg';


// const Intro = () => {
//   return (

function Intro() {
  return(
    <div className="intro">
    <div className="i">
      <a id="Home"></a>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"></h2>
          <h1 className="i-name">Navin Manikandan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop Websites by creating unique,
            specializing in creating stylish, modern websites, web services and
            intrested in creating Web Applications which is useful for Society.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={hello} alt="" className="i-img" />
      </div>
    </div>
    </div>
  );
}

export default Intro;
