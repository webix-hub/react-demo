import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as data from './data.js';
import 'webix/webix.js';
import 'webix/webix.css';

class FilmsView extends Component {
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
    return false;
  }

}

export default FilmsView;
