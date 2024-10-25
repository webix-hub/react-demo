// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from "react";
import * as webix from "webix/webix.js";
import "webix/webix.css";

class Webix extends Component {
  constructor(props) {
    super(props);
    this.uiContainer = React.createRef();
  }

  render() {
    return (
      <div ref={this.uiContainer}></div>
    );
  }

  setWebixData(data){
    const ui = this.ui;
    if (ui.setValues)
      ui.setValues(data);
    else if (ui.parse)
      ui.parse(data)
    else if (ui.setValue)
      ui.setValue(data);
  }

  componentWillUnmount(){
    if (this.ui) {
      this.ui.destructor();
      this.ui = null;
    }
  }

  componentDidUpdate(){
    if (this.props.data)
      this.setWebixData(this.props.data);
    if (this.props.select)
      this.select(this.props.select);
  }

  componentDidMount(){
    const container = this.uiContainer.current;
    webix.ready(() => {
      this.ui = webix.ui(
        this.props.ui,
        container,
      );
      this.componentDidUpdate();
    })
  }

}

export default Webix;
