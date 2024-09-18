// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from "react";
import * as data from "./data/data.js";

import * as webix from "webix/webix.js";
import "webix/webix.css";

class FilmsView extends Component {
  constructor(props) {
    super(props);
    this.uiContainer = React.createRef();
  }

  render() {
    return (
      <div ref={this.uiContainer} style={{height:"100%"}}></div>
    );
  }

  componentDidMount(){
    const container = this.uiContainer.current;

    const tree = {
      view:"tree",
      id:"tree",
      gravity: 0.6,
      select:true
    };

    const grid = {
      view:"datatable",
      id:"grid",
      autoConfig:true,
      scroll:false,
      select:true
    };

    webix.ready(() => {
      this.ui = webix.ui({
        cols:[
          tree,
          { view:"resizer" },
          grid
        ],
        isolate:true,
        container,
      });

      this.ui.$$("tree").parse(data.tree());
      this.ui.$$("grid").parse(data.grid());
    })
  }

  componentWillUnmount(){
    if (this.ui) {
      this.ui.destructor();
      this.ui = null;
    }
  }

  shouldComponentUpdate(){
  	// as component is not linked to the external data, there is no need in updates
    return false;
  }
}

export default FilmsView;
