import React from 'react';
import './App.css';
import Events, { Contact } from './components/Home.js';
import banner from './assets/img/design1_image1.jpg';
import NavBar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <h1>Il cavalieri Davi</h1>
        <img style={TopBanner} src={banner} alt="cool banner"/>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <h2>Upcoming Events</h2>
            <hr />
            <Events/>
          </Route>
          <Route path="/Schedule">
            <h2>NYSL Game Information</h2>
            <hr />
            <Schedule/>
          </Route>
        </Switch>
        <h3>Contact Information</h3>
        <Contact/>
      </div>
    </Router>
  );
};

const TopBanner = {
  width: '95vw',
  height: '250px',
};

export default App;
