import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Aboutt";
import Achievement from "./Achievement";
import Appbar from "./Appbar";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Resume from "./Resume";
import Intro from "./Intro";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Appbar />
       
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/skillside" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;

















// import React from 'react';
// import './App.css';
// // import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  
// // import Intro from './Intro';
// // import Resume from './Resume';
// // import Achievement from './Achievement';
// // import Contact from './Contact';
// // import Hobbies from './Hobbies';
// // import Aboutt from './Aboutt';
// // import { AppBar } from '@mui/material';

// function App() {
//   return (
//     <div className="App">
//   {/* <Router>
//     <AppBar /> 
//     <Routes>
      
//       <Route path="/" element={<Aboutt />} />  
//       <Route path="/about1" element={<Intro />} />  
//       <Route path="/resume" element={<Resume />} />
//       <Route path="/achievement" element={<Achievement />} />  
//       <Route path="/hobbies" element={<Hobbies />} />  
//       <Route path="/gallery" element={<Gallery />} />  
//       <Route path="/contact" element={<Contact />} />  
  
//     </Routes> 
//   </Router>   */}

      
 
//     </div>
//   );
// }

// export default App;
