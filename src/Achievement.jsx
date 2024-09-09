import React from "react";
// import { Container } from "@mui/material";

// import row from "@mui/material";
import Footer from './Footer';


import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import SportsHandballRoundedIcon from '@mui/icons-material/SportsHandballRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import { Divider } from "@mui/material";

function Achievement(){
    return(
<div className="achievement">
<section id="services" class="services">
  <a id="Achieve1"></a>
        <div class="Container">
          <div class="section-title">
          <h1 className="as-title">Achievement And Certification</h1>
            <p className="as-sub">
            
            </p>
          </div>
          <br/>
          
          

          <div class="row" style={{marginLeft:"-150px"}}>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div class="icon"><ReceiptRoundedIcon /></div>
              <h4 class="title" style={{textAlign:"left"}}> PAPER PRESENTATION</h4>
              <p class="description" style={{textAlign:"left"}}>

                <ul>
                  <li>Own 2nd price in paper presentation in KSR Engineering
                college.</li>
                <li> Own 1st price in paper presentation in Salem
                Government college.</li>
                <li>Own 1st price in paper presentation
                in Bannari Amman college.</li>
                </ul>
               
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon"><SportsHandballRoundedIcon /></div>
              <h4 class="title" style={{textAlign:"left"}}>SPORTS</h4>
              <p class="description" style={{textAlign:"left"}}>

                <ul>
                  <li>District 3rd in Athletics.</li>
                  <li>District 3rd in Batminton.</li>
                </ul>
                
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon"><AccountTreeRoundedIcon /></div>
              <h4 class="title" style={{textAlign:"left"}}>PROJECT</h4>
              <p class="description" style={{textAlign:"left"}}>
                <ul><li>"ARTIFICIAL EYE" Selected as best project in Erode Science Expo.</li></ul>
                
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon"><CableRoundedIcon /></div>
              <h4 class="title" style={{textAlign:"left"}}>PCB DESIGN</h4>
              <p class="description" style={{textAlign:"left"}}>
                <ul>
               <li>Completed training on PCB DESIGN in SUNSHIV ELECTRONICS.</li> 
                </ul>
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="icon"><PsychologyRoundedIcon /> </div>
              <h4 class="title" style={{textAlign:"left"}}>HOME AUTOMATION USING PLC</h4>
              <p class="description" style={{textAlign:"left"}}>
                <ul>
                <li>Completed training on HOME AUTOMATION USING PLC in AXIS GLOBAL</li>
                AUTOMATION.</ul>
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* <div class="icon"><HubRoundedIcon /></div>
              <h4 class="title">
                EMBEDDED SYSTEM DESIGN USING ARDUINO
              </h4>
              <p class="description">
                <ul><li>Completed training on EMBEDDED SYSTEM DESIGN USING ARDUINO in
                PRICOL TECHNOLOGIES.</li></ul>
              </p> */}
            </div>
            
         </div> 
         
       </div>
       
      </section>
      <div className="b-left">
        <div className="b-card bg"></div>
        <div className="b-card">
        <img src={require('./image/coo.jpg')}
            alt=""
            className="a-img"
          />

        </div>
      </div>
      <Footer />
</div>
);
}

export default Achievement;