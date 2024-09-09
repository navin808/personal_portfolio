import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import Avatar from '@mui/material/Avatar';
import nav from './image/nav.jpg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CollectionsIcon from '@mui/icons-material/Collections';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ContactsIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import navincv from './navincv.pdf';



const drawerWidth = 260;

export default function Appbar() {
  return (
    <Box sx={{ display: 'flex', backgroundColor:"skyblue" }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
       
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#DEE2FC'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
      
       
        <Avatar
        alt="Navin"
        src={nav}
        sx={{ width: 150, height: 150, marginLeft: "50px", marginTop:"-33px", border: "8px solid #525b88"}}
      />
      

<List>
        
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            
              
                {/* {index % 10 === 5 ? <HomeIcon /> : <InboxIcon /> } */}
              
              <ListItemText primary={text} />
            
          </ListItem>
        ))}

{/* <label class="switch"> */}
            {/* <input type="checkbox" />
            <span class="slider">
              <ibody>
                <div onclick="myFunction()">.</div>
                <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
              </ibody>
              
              </span> */}

            <div class="social-links mt-3">
            {/* <a href="https://www.facebook.com/navin.romeo" class="facebook"
              ><FacebookIcon /></a>
            <a href="https://www.instagram.com/_naviin__" class="instagram"
              ><InstagramIcon /></a>
            <a
              href="https://web.whatsapp.com/"
              class="google-plus"
              ><WhatsAppIcon /></a>
            <a href="https://in.linkedin.com" class="linkedin"
              ><LinkedInIcon /></a> */}
             <div className='icon' style={{display:"flex",marginTop:"20px",marginLeft:"45px"}}>
            <a href='https://www.facebook.com/navin.omeo'><FacebookIcon color='primary' style={{backgroundColor:"#fff",borderRadius:"7px",marginRight:"10px"}}/></a>
            <a href='https://www.instagram.com/accounts/login/?next=/_naviin__/'><InstagramIcon color='warning' style={{backgroundColor:"#fff",borderRadius:"7px",marginRight:"10px"}}/></a>
            <a href='https://web.whatsapp.com/'><WhatsAppIcon color='success' style={{backgroundColor:"#fff",borderRadius:"7px",marginRight:"10px"}}/></a>
            <a href='https://www.linkedin.com/feed/'><LinkedInIcon color='' style={{backgroundColor:"#fff",borderRadius:"7px",marginRight:"10px"}}/></a>
            <a href='https://telegram.org/'><TelegramIcon color='primary' style={{backgroundColor:"#fff",borderRadius:"7px",marginRight:"10px"}}/></a>
              </div>
          </div>
          
        {/* </label> */}



        <List>
              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <HomeIcon /> 
              </ListItemIcon>
              <Link to="/" style={{textDecoration:"none", color:"black" }}> Home </Link>
              {/* <a href="#Home" style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Home</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>
              
              
              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <PersonIcon />  
              </ListItemIcon>
              <Link to="/about" style={{textDecoration:"none", color:"black" }}> About </Link>
              {/* <a href="#About1"style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>About</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>


              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <InboxIcon />  
              </ListItemIcon>
              <Link to="/resume" style={{textDecoration:"none", color:"black" }}> Resume </Link>
              {/* <a href="#Resume" style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Resume</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>


              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <EmojiEventsIcon /> 
              </ListItemIcon>
              <Link to="/achievement" style={{textDecoration:"none", color:"black" }}> Achievement </Link>
              {/* <a href="#Achieve1" style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Achievement</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>
  

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <CollectionsIcon />  
              </ListItemIcon>
              <Link to="/Gallery" style={{textDecoration:"none", color:"black" }}> Gallery </Link>
              {/* <a href="#Gallery1" style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Image Gallery</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <SportsEsportsIcon /> 
              </ListItemIcon>
              <Link to="/hobbies" style={{textDecoration:"none", color:"black" }}> Hobbies </Link>
              {/* <a href='#Hobbies' style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Hobbies</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <ContactsIcon /> 
              </ListItemIcon>
              <Link to="/contact" style={{textDecoration:"none", color:"black" }}> Contact </Link>
              {/* <a href='#contact1' style={{textDecoration:"none", color:"black" }}><ListItemText primary={<Typography>Contact</Typography> } /></a> */}
              </ListItemButton>
              </ListItem>

              <button id="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span> <a href={navincv} style={{textDecoration:"none", color:"#fff" }} download><center> Download CV</center></a>
          </button>




              </List> 
              </List>
      </Drawer>

      
      <div />
      {/* <script>
      function myFunction() {
        const element = document.body;
         element.classList.toggle("dark-mode");
      }
      </script> */}


     
    </Box>

    
  );
}
