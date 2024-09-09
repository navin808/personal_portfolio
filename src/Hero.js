import * as React from 'react';
import './App.css';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import ContactsIcon from '@mui/icons-material/Contacts';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// _______________________ABOUT___________________________________
// // import { Divider, Typography } from "@mui/material";
// // import React from "react";
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
// import './About.css';



<link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet"
    />


    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      borderRadius: "15px",
      paddingLeft: "10px",
      textAlign: 'left',
      color: theme.palette.text.secondary,
    }));


const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <Toolbar /> 
    <div class="navimg" >
      <img src={require('./image/nav.jpg')} alt="Nav Pic"   width="180px"  style={{borderRadius:"150px" , marginLeft:"35px" , marginTop:"1px", border: "8px solid #FFB347"}}  />
      </div>
      
      
      <List>
        
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
          <ListItemText primary={text} />
          </ListItem  >))}

        <List>
              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <HomeIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Home</Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <PersonIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>< a href="#Skills">About</a></Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <ArticleIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Resume</Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <EmojiEventsIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Achievement</Typography> } />
              </ListItemButton>
              </ListItem>
  
              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <PhotoCameraBackIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Image Gallery</Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <FitnessCenterIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Hobbies</Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <ContactsIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography>Contact</Typography> } />
              </ListItemButton>
              </ListItem>
              </List> 
              </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}  >
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor: "8px solid #FFB347"}}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        
      >
        {/* <div class="Nav">
        <img src={require('./image/hello.JPG')} alt="Nav Pic"   style={{ marginLeft:"-20px" , marginTop:"-25px", marginBottom:"-100px" ,  width:"50%" }} />
        </div>
        <Toolbar /> */}

        <div>
          <br />
          <br />

          {/* _______________________ABOUT___________________________________ */}
 
       {/* <React.Fragment>
      <CssBaseline />
      <Container fixed>

      

        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '160vh', marginLeft:'-25px', paddingLeft:'10px'}} >
        <h2> ABOUT  </h2>
       <Divider></Divider>
       <Typography>
       B.E Electronics and Communication Engineer, having the work
              experience of 5 months as Data Analyst in Quintessence Business
              Solutions. Undergone DotNet internship in Shiash infotech Chennai.
              Passonate about developing and designing. I enjoy problem-solving
              and coding. Always strive to bring 100% to the work I do. I have
              worked on technologies like HTML, CSS, Python, JavaScript, JQuery,
              Bootstrap, sematic UI. I am very much intrest about developing
              complex applications that solve real-world problems impacting
              millions of users.
       </Typography>
       <br />


       <Grid container spacing={5} sx={{paddingTop:"7vh"}}>
<Grid xs={5}>
       
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          p:3,
          ml:10,
          width: 400,
          height: 500,
          borderRadius: "20px",
          backgroundColor: "white",
         
        },
      }}
    className="paper" >
      <Paper elevation={20} className="Paper1"><img src={require('./image/pro.jpg')} className="logo" alt="" style={{ marginLeft:"0px" , marginTop:"0px", width:"350px" ,  height:"450px" , borderRadius:"10px"}}/> </Paper>
    </Box>

    </Grid>
    <Grid xs={7}>
    <Box sx={{ flexGrow: 0 }}>
        
        <Grid item xs={11} paddingLeft="10px" >
          <Item><h2>WEB DESIGNER & DEVELOPER</h2>As a web developer iam very much intrested in programming which
                I develops creative Web sites and web applications.<div class="row">
                  <br/>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>21 March 2000</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>B.E</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+91 88382 - 32739</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Coimbatore, TamilNadu</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                      <span>22</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Stream:</strong>
                      <span>Electronics And Communication</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>E-mail:</strong>
                      <span>navinmanikandan303@gmail.com</span>
                    </li>
                    <br/>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Nationality:</strong> <span>Indian</span>
                    </li>
                  </ul>
                </div>
              </div>
              <br/>
          </Item>
        </Grid>

    </Box>
    </Grid>
    </Grid>
    <br/>
    <br/>
    <div class="skillside">
          <section id="Skills" class="skills section-bg">
        <div class="container">
  
          <div class="section-title">
            <h2>SKILLS</h2>
            <Divider />
            <br/>
            
          </div>
  
          <div class="row skills-content">
  
            <div class="col-lg-6" data-aos="fade-up">
 
              <div class="progress">
                <span class="skill">HTML <i class="val">95%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
             
  
              <div class="progress">
                <span class="skill">CSS <i class="val">95%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div class="progress">
                <span class="skill">JavaScript <i class="val">75%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  
              <div class="progress">
                <span class="skill">JQuery <i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div class="progress">
                <span class="skill">Bootstrap <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar5" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div class="progress">
                <span class="skill">Sematic UI <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar6" role="progressbar" aria-valuenow="55" aria-valuemin="56" aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>



          </div>
    </Box>
    
   
         
      </Container>
    </React.Fragment> */}
       
       

       
       </div>
        
    
</Box>







    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;