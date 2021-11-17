import React from 'react';
import './App.css';
import Events, { Contact } from './components/Home.js';
import banner from './assets/img/design1_image1.jpg';
import NavBar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import GameLoc, {Test} from './components/GameLoc';
import logo from './assets/img/nysl_logo.png';
import ChatRoom from './components/Chat';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <h1>Il cavalieri Davi</h1>
        <img className='TopBanner' src={banner} alt="cool banner"/>
        <NavBar/>
        <div style={{textAlign:'center'}}>
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <Switch>
          <Route exact path="/">
            <Events/>
          </Route>
          <Route exact path="/Schedule">
            <Test/>
            <Schedule/>
          </Route>
          <Route exact path="/Chat">
          <ChatRoom/>
          </Route>
          <Route path="/schedule/:id">
            <GameLoc/>
          </Route>
        </Switch>
        <Contact/>
      </div>
    </Router>
  );
};

export default App;
