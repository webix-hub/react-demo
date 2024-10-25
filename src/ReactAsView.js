// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from "react";
import { createRoot } from "react-dom/client";
import Webix from "./Webix";
import FormView from "./FormView";

import * as webix from "webix/webix.js";

webix.protoUI({
  name:"react",
  defaults:{
    borderless:true,
  },
  $init:function(){
    this.$ready.push(function(){
      const root = createRoot(this.$view);
      root.render(this.config.app);
    });
  }
}, webix.ui.view)


function getForm(){
  const subApp = <FormView></FormView>;

  return {
    view:"form", width:500, elements:[
      { view:"text", name:"Company", label:"Name", placeholder:"Type your full name here"},
      { type:"header", template:"Owner", css:"webix_dark" },
      {
        view:"react", height: 220, app:subApp
      },
      { view:"label", label:"The above form is a separate React App inside of Webix UI" }
    ]
  };
}

const ReactAsView = ({ data, save }) => (
  <div>
    <Webix ui={getForm()} data={data}/>
  </div>
)

export default ReactAsView;
