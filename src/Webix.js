// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'webix/webix.js';
import 'webix/webix.css';

class WebixView extends Component {
  render() {
    return (
      <div ref="root"></div>
    );
  }

  componentDidMount(){
    let height = (this.props.height || "-1")*1;

    var tree = {
      view:"tree", id:"tree", gravity: 0.25,
      select:true
    };

    var grid = {
      view:"datatable", id:"grid", autoConfig:true,
      select:true
    };

    let fm = window.webix.ui({
      cols:[
        tree, 
        { view:"resizer" },
        grid
      ],
      isolate:true,
      height,
      container:ReactDOM.findDOMNode(this.refs.root)
    });

    fm.$$("tree").parse(data.tree);
    fm.$$("grid").parse(data.grid);
  }

  shouldComponentUpdate(){
  	// as component is not linked to the external data, there is no need in updates
    return false;
  }

}

export default FilmsView;
