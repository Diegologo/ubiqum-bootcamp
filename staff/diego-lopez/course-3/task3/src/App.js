import React from 'react';
import './App.css';
import Events, { Contact } from './components/Home.js';
import banner from './assets/img/design1_image1.jpg';
import NavBar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import GameLoc from './components/GameLoc';
import logo from './assets/img/nysl_logo.png';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <h1>Il cavalieri Davi</h1>
        <img className='TopBanner' src={banner} alt="cool banner"/>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <h2>Upcoming Events</h2>
            <hr/>
            <Events/>
          </Route>
          <Route exact path="/Schedule">
            <h2>NYSL Game Information</h2>
            <hr/>
            <Schedule/>
          </Route>
          <Route path="/schedule/:id">
            <h2>Game Location</h2>
            <hr/>
            <GameLoc/>
          </Route>
        </Switch>
        <h3>Contact Information</h3>
        <Contact/>
        <div style={{textAlign:'center'}}>
          <img id="logo" src={logo} alt="logo"/>
        </div>
      </div>
    </Router>
  );
};

export default App;
