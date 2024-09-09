import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from './Footer';

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import fit from './image/fit.jpg';
import picc from './image/picc.jpg';
import fo from './image/fo.jpg';
import music from './image/music.jpg';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Hobbies() {
  return (
    <div className="hobbies">
    <section id="services"style={{paddingTop:"-50vh",backgroundColor:"#fff", paddingBottom:"-50vh", marginBottom:"-50px" , marginTop:"-50px" , marginLeft:"260px"}}>
      <a id='Hobbies'></a>
      <div class="service-top" >
      <h1 className="ae-title">HOBBIES</h1>
      <p className="ao-sub">
      "A hobby a day keeps the doldrums away" <br />
"Happy is a man who can make a living by his hobby"
        </p>
      </div>
      <br/><br/><br/><br/>
      <div className="service-bottom">
    <Box sx={{ flexGrow: 1 }}>
  

      <Grid container spacing={2}>
        <Grid item xs={3}>
       <center> <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
         <h1>FITNESS</h1>
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>Some are from sports people, some entrepreneurs, world leaders and famous thinkers, but in each of these quotes is something to inspire you.<br></br><br/><b> <i>“To keep the body in good health is a duty"</i></b>
</p>
<Stack direction="row" spacing={2}>
     
      <Avatar
        alt="NAvin"
        src={fit}
        sx={{ width: 100, height: 100, marginLeft: 10 }}
      />
    </Stack></Typography>
       
      </CardContent>
     
    </Card></center>
        </Grid>
        <Grid item xs={3}>
        <center><Card sx={{ minWwidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <h1> TRAVEL</h1>
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <p> Internet of things describes physical objects with sensors, software, and other technologies that connect and exchange data with other devices and systems over the Internet.<br/><br/><b><i>“To travel is to live”</i></b></p>
       <Stack direction="row" spacing={2}>
     
     <Avatar
       alt="navin"
       src={picc}
       sx={{ width: 100, height: 100, marginLeft: 10 }}
     />
   </Stack>
        </Typography>
        
      </CardContent>
    
    </Card></center>
        </Grid>
        <Grid item xs={3}>
        <center><Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <h1> EXPLORE</h1>
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <p> “You're braver than you believe, and stronger than you seem, and smarter than you think.” It does not matter how slowly you go where ever you wish to go.<br/> <br/><b><i> “Oh the places you'll go.”</i></b></p>
       <Stack direction="row" spacing={2}>
     
     <Avatar
       alt="navin"
       src={fo}
       sx={{ width: 100, height: 100, marginLeft: 10 }}
     />
   </Stack>
        </Typography>
        
      </CardContent>
      
    </Card></center>
        </Grid>
        <Grid item xs={3}>
        <center><Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <h1> MUSIC</h1>
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <p> “Music is the universal language of mankind.” “Where words fail, music speaks.” “Life is like a beautiful melody, only the lyrics messed up.”<br/><br/><b> <i>“Music is the language of the spirit.</i></b></p>
       <Stack direction="row" spacing={2}>
       
     <Avatar
       alt="navin"
       src={music}
       sx={{ width: 100, height: 100, marginLeft: 10, paddingBottom:"-520px" }}
     />
   </Stack>
        </Typography>
        
      </CardContent>
      
    </Card></center>
        </Grid>
      </Grid>
<br/>
<br/>
<br/>
<br/><br/><br/><br/>

    </Box>
    </div>
    </section>
    <Footer />
    </div>
  );
}