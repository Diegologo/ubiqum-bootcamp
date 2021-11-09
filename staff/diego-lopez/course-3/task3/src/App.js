import React from 'react';
import './App.css';
import Events, {Contact} from './components/Home.js';
import banner from './assets/img/design1_image1.jpg'

function App() {
  return (
    <ul>
      <h1>Northside Young Soccer League</h1>
      <img src={banner} alt="cool banner"/>
      <h3>Upcoming Events</h3>
      <Events/>
      <h3>Contact Information</h3>
      <Contact/>
    </ul>
  );
};

export default App;
