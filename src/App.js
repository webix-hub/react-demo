import React from "react";
import { HashRouter as Router, Routes, Route, NavLink} from "react-router-dom";

import Home from "./Home";
import FilmsView from "./FilmsView";
import FormView from "./FormView";
import ReactAsView from "./ReactAsView";
import ReduxAppView from "./redux/ReduxAppView";

import logo from "./assets/logo.svg";
import "./assets/App.css";

const App = () => (
  <Router>
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>React + Webix</h2>
      </div>
      <div className="content-box">
        <div className="menu">
          <ul>
            <li><NavLink to="/" end    className={({ isActive }) => (isActive ? "active" : null)}>Home</NavLink></li>
            <li><NavLink to="/webix"   className={({ isActive }) => (isActive ? "active" : null)}>Webix Component</NavLink></li>
            <li><NavLink to="/custom"  className={({ isActive }) => (isActive ? "active" : null)}>Custom Component</NavLink></li>
            <li><NavLink to="/data"    className={({ isActive }) => (isActive ? "active" : null)}>Redux + Webix</NavLink></li>
            <li><NavLink to="/view"    className={({ isActive }) => (isActive ? "active" : null)}>React as Webix view</NavLink></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webix" element={<FormView />} />
            <Route path="/custom" element={<FilmsView />} />
            <Route path="/data" element={<ReduxAppView />} />
            <Route path="/view" element={<ReactAsView />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <p>Get more info at <a target="blank" href="https://webix.com/">https://webix.com/</a></p>
      </div>
    </div>
  </Router>
)

export default App;
