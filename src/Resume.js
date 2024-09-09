import React from "react";
import { Grid } from "@mui/material";
import {Container} from "@mui/material";
import './Resume.css';
import Footer from './Footer';

function Resume() {
    return(
      <div className="resume">
<section id='Resume'>
  <a id="Resume"></a>
  
          <Container fixed>
               
          <h1 className="ac-title">RESUME</h1>
                <p className="ac-sub">
              To be loyal in my work where I engaged with and be unique in the
              circumstance surrounded me.
            </p>
                
            <Grid container spacing={-1}>
  <Grid item xs={7} style={{textAlign:"left"}}>
    <h3>SSLC</h3>
        <h5>2013 - 2015</h5>
        <p>
                  <em
                    >Shree Gurukulam Matriculation Higher Secondary School.</em
                  >
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  ipsum accusantium error unde amet neque molestias officiis
                  quis assumenda numquam!
                </p>
                <li>With an aggregate of 86%</li>
             
              
  </Grid>
  <Grid item xs={5} style={{textAlign:"left"}}>
    <h3>B.E ELECTRONICS AND COMMUNICATION</h3>
    <h5>2021 - Passed Out</h5>
                <p><em>Nandha Engineering College, Erode. </em></p>
                <ul>
                  <li>Well trained with Hardware as well as software</li>
                  <li>Department Co-ordinator for 3 years</li>
                  <li>Developed many projects related to Embaded system.</li>
                  <li>With an CGPA of 7.86</li>
                </ul>
  </Grid>
  <Grid item xs={7} style={{textAlign:"left"}}>
    <h3>HSC</h3>
        <h5>2015 - 2017</h5>
        <p><em>Amala Matric Higher Secondary School, Salem.</em></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis iste natus laborum porro deserunt nulla obcaecati
                  illo minima quasi voluptas.
                </p>
                <li>With an aggregate of 78%</li>
             
              
  </Grid>
  <Grid item xs={5} style={{textAlign:"left"}}>
  <h3>WEB DEVELOPMENT</h3>
  <h5>Currently pursuving</h5>
  <p><em>SmartCliff Learning Solution</em></p>
                <ul>
                  <li>Front end Development</li>
                  <li>Well Knowned languages are HTML, JavaScript</li>
                  <li>Good with technologies like bootstrap, sematic UI, Material UI</li>
                </ul>
              
  </Grid>
 
</Grid>
</Container>

</section>
<Footer />
</div>

);
}

export default Resume;