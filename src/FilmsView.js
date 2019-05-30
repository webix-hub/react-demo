// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as data from './data/data.js';

import * as webix from 'webix/webix.js';
import 'webix/webix.css';

class FilmsView extends Component {
  render() {
    return (
      <div ref="root" style={{height:"100%"}}></div>
    );
  }

  componentDidMount(){
    var tree = {
      view:"tree", id:"tree", gravity: 0.6,
      select:true
    };

    var grid = {
      view:"datatable", id:"grid", autoConfig:true,
      scroll:false,
      select:true
    };

    this.ui = webix.ui({
      cols:[
        tree, 
        { view:"resizer" },
        grid
      ],
      isolate:true,

      container:ReactDOM.findDOMNode(this.refs.root)
    });

    this.ui.$$("tree").parse(data.tree());
    this.ui.$$("grid").parse(data.grid());
  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  shouldComponentUpdate(){
  	// as component is not linked to the external data, there is no need in updates
    return false;
  }

}

export default FilmsView;
