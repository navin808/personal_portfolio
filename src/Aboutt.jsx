// import { Divider } from '@mui/material';
import React from 'react';
// import pro from './image/pro.jpg';
import ab1 from './image/ab1.jpg';
import Skills from './Skills';
import Footer from './Footer';

// const Aboutt = () => {
//   return (
  function About() {
    return (
      <div className="about">
       <div className="a" id="About1">
     
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src={require('./image/pro.jpg')}
            alt=""
            className="a-img"
          />

        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={ab1} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Navin's Information</h4>
            <p className="a-award-desc">
            <div class="col-lg-6">
            <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>21 March 2000</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Degree:   </strong> <span>B.E</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:  </strong> <span>+91 88382 - 32739</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>City:  </strong> <span>Coimbatore, TamilNadu</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:  </strong>
                      <span>22</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Stream:  </strong>
                      <span>Electronics And Communication</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>E-mail:  </strong>
                      <span>navinmanikandan303@gmail.com</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Nationality:  </strong> <span>Indian</span>
                    </li>
                  </ul>
                  
                  </div>
            </p>
          </div>
        </div>
      </div>
    </div>  
    <Skills />
    <Footer />
    </div>
    
  );
};
export default About;
