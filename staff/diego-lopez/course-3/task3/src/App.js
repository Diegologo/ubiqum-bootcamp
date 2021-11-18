import React from 'react';
import './App.css';
import Events, { Contact } from './components/Home.js';
import banner from './assets/img/design1_image1.jpg';
import NavBar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import GameLoc from './components/GameLoc';
import logo from './assets/img/nysl_logo.png';
import ChatRoom from './components/Chat';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <h1>Il cavalieri Davi</h1>
        <div style={{textAlign:'center'}}>
          <img className='TopBanner' src={banner} alt="cool banner"/>
        </div>
        <NavBar/>
        <div style={{textAlign:'center'}}>
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <Switch>
          <Route exact path="/">
            <Events/>
            <Contact/>
          </Route>
          <Route exact path="/schedule">
            <Schedule/>
            <Contact/>
          </Route>
          <Route exact path="/schedule/:id">
            <GameLoc/>
            <Contact/>
          </Route>
          <Route path="/schedule/:id/game:id">
          <ChatRoom/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
