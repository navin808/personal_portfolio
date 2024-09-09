import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Typography} from "@mui/material";
// import EditLocationIcon from '@mui/icons-material/EditLocation';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import CallIcon from '@mui/icons-material/Call';
import Form from "./Con2";

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

function Contact(){
    return(
<div className="contact">

<section id='Contact' >
    <a id="contact1"></a>
{/* <center> <div class="text"><br/><br/><br/><br/><br/><br/>
          <Typography variant='h4'>   Contact</Typography>
         </div></center> */}
         <h1 className="ad-title">CONTACT</h1>
         
  <div>
    <Container>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.389999420178!2d77.42778202624713!3d11.454824419812798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d97aa5c5915%3A0x255ab43b25c6212b!2sKuthirai%20Vandi%20Theru%2C%20Gobichettipalayam%2C%20Tamil%20Nadu%20638476!5e0!3m2!1sen!2sin!4v1657074096984!5m2!1sen!2sin" width="1200" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Container>
    
    </div>       
    


 <Grid container>
   <Grid sm={6} style={{paddingLeft:"20vh",marginTop:"5vh"}} >
     
  
     <Typography paragraph style={{width:"65%"}}>
     <div class="address">
             
              <h4> <FmdGoodIcon color='#fff' style={{width:"50px" , backgroundColor:"#DEE2FC",borderRadius:"100px",marginRight:"10px"}}/>Location:</h4>
              <p>31, Chellappa Nagar, Gobichettiplayam</p>
            </div>

            <div class="email">
              
              <h4><EmailIcon color='#fff' style={{width:"50px" ,backgroundColor:"#DEE2FC",borderRadius:"100px",marginRight:"10px"}}/>Email:</h4>
              <p>navinmanikandna303@gmail.com</p>
            </div>

            <div class="phone">

              <h4><WifiCalling3Icon color='#fff' style={{width:"50px" ,backgroundColor:"#DEE2FC",borderRadius:"100px",marginRight:"10px"}}/>Call:</h4>
              <p>+91 88382 32739 <br/> +91 77086 22339</p>
            </div>

          
   </Typography>
     </Grid>



     <Grid sm={3} style={{marginRight:"0vh",marginTop:"-2vh", marginBottom:"5vh"}}>


     <Form/>
      
     
     </Grid></Grid>


</section>
</div>
    );
}

export default Contact;