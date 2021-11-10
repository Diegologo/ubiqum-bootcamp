import React from 'react';
import './App.css';
import Events, { Contact } from './components/Home.js';
import banner from './assets/img/design1_image1.jpg';
import NavBar from './components/Navigation';
import { Router } from 'react-router-dom';
import Schedule from './components/Schedule';

function App() {
  return (
      <div className='container-fluid'>
        <h1>Il cavalieri Davi</h1>
        <img style={TopBanner} src={banner} alt="cool banner"/>
        <h3>Upcoming Events</h3>
        <Events/>
        <h3>Contact Information</h3>
        <Contact/>
        <Schedule/>
      </div>
  );
};

const TopBanner = {
  width: '95vw',
  height: '250px',
};

export default App;
