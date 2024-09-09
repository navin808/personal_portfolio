import React from 'react';
import './App.css';
// import AppBar  from '@mui/material/AppBar';
// import Toolbar  from '@mui/material/Toolbar';
// import Typography from '@mui/material/Button';
// import {NavLink} from 'react-router-dom';
import './Gallery.css';
import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import Footer from './Footer';

import p1 from './image/p1.jpg';
import p2 from './image/p2.jpg';
import p3 from './image/p3.jpg';
import p4 from './image/p4.jpg';
import p5 from './image/p5.jpg';
import p6 from './image/p6.jpg';
import p7 from './image/p7.jpg';
import p8 from './image/p8.jpg';
import p9 from './image/p9.jpg';


export default function Gallery(){
    return(
      
        <div class="Gallery">
          <a id="Gallery1"></a>
           
          <center>
          <h1 className="ad-title">GALLERY</h1>
          <p className="ag-sub">“I'm not high maintenance, you're just low effort.” “Whatever is good for your soul, do that.”<br/> “The way you speak to yourself matters the most.” “You can regret a lot of things but you'll never regret being kind.” </p></center>
          <Divider />
            <Tabs>
      <TabList className="mt--10">
        <Tab>All</Tab>
        <Tab>PHOTOSHOOT</Tab>
        <Tab>BIKE</Tab>
        <Tab>PHOTOGRAPHY</Tab>
      </TabList>

      <Divider/>
      <div class="img">
      <TabPanel>
        <br/>
      
      <Grid container spacing={-30}>
  <Grid item xs={4}>
  <img src={p1} alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p2}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p3}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p4}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p5}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p6}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p7}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p8}alt="pic" width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={p9}alt="pic" width='250px' />
  </Grid>
</Grid>
</TabPanel>



      <br/>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={p1}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p2}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p3}alt="pic" width='250px' />
        </Grid>
        </Grid>
      </TabPanel>


      <br/>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={p4}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p5}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p6}alt="pic" width='250px' />
        </Grid>
        </Grid>
      </TabPanel>


      <br/>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={p7}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p8}alt="pic" width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={p9}alt="pic" width='250px' />
        </Grid>
        </Grid>
      </TabPanel>
      </div>
    </Tabs>
    <Footer/>
    

    </div>       
    );
}

