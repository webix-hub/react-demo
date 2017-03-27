import React from 'react';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from './Home';
import FilmsView from './FilmsView';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>React + Webix</h2>
      </div>
      <div className='content-box'>
        <div className='menu'>
          <ul>
            <li><NavLink to="/" exact   activeClassName='active'>Home</NavLink></li>
            <li><NavLink to="/webix"    activeClassName='active'>Webix Component</NavLink></li>
            <li><NavLink to="/custom"   activeClassName='active'>Custom Component</NavLink></li>
            <li><NavLink to="/data"     activeClassName='active'>Sync Data</NavLink></li>
            <li><NavLink to="/config"   activeClassName='active'>Sync Config</NavLink></li>
          </ul>
        </div>
        <div className='content'>
          <Route exact path="/" component={Home} />
          <Route path="/custom" component={FilmsView} />
        </div>
      </div>
      <div className='footer'>
        <p><a href='http://webix.com'>http://webix.com</a></p>
      </div>
    </div>
  </Router>
)

export default App;
