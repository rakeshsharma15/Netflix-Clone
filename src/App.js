import React, { useState } from 'react';
import './App.css';
import Intro from './comp/intro/Intro';
import Portfolio from './comp/portfolio/Portfolio';
import Testimonials from './comp/testimonials/Testimonials';
import Topbar from './comp/topbar/Topbar';
import Works from './comp/works/Works';
import Contact from './comp/contact/Contact';
import Menu from './comp/Menu/Menu';


const App=()=>{
  const [start,getstart]=useState(false);
  return(
    <div className="app" >
      <Topbar start={start} getstart={getstart}/>
      <Menu start={start} getstart={getstart}/>  
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>      
      <Contact/>
    </div>
    </div>);
}
export default App;