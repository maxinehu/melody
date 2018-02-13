import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import Home from './Home.js';
import Team from './Team.js';
import Cases from './Cases.js';
import About from './About.js';
import Services from './Services/Index.js';
import Studying from './Services/Studying.js';
import Immigration from './Services/Immigration.js';
import Others from './Services/Others.js';

import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <img src={logo}/>
              <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
              <li className="service_tab"><NavLink to="/services" activeClassName="active">Services</NavLink>
                <ul className="subMenu">
                  <li><NavLink to="/services/studying" activeClassName="submenu_active">Studying abroad</NavLink></li>
                  <li><NavLink to="/services/immigration" activeClassName="submenu_active">Immigration</NavLink></li>
                  <li><NavLink to="/services/others" activeClassName="submenu_active">Others</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/cases" activeClassName="active">Cases</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/home"/>
            )}/>
            <Route path="/home" component={Home} />
            <Route path="/team" component={Team} />
            <Route exact path="/services" component={Services} />
            <Route path="/services/studying" component={Studying} />
            <Route path="/services/immigration" component={Immigration} />
            <Route path="/services/others" component={Others} />
            <Route path="/cases" component={Cases} />
            <Route path="/about" component={About} />
          </Switch>
          <footer className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
