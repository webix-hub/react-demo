// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import ReactDOM from 'react-dom';
import Webix from './Webix';
import FormView from './FormView';

window.webix.protoUI({
  name:"react",
  defaults:{
    borderless:true
  },
  $init:function(config){
    this.$ready.push(function(){    
      ReactDOM.render(
        this.config.app,
        this.$view
      );
    });
  }
}, window.webix.ui.view)


function getForm(){
  var subApp = <FormView></FormView>;

  return {
    view:"form", width:500, elements:[
      { view:"text", name:"Company", label:"Name", placeholder:"Type your full name here"},
      { type:"header", template:"Owner" },
      {
        view:"react", height: 220, app:subApp
      },
      { view:"label", label:"the above form is a separate React App inside of Webix UI" }
    ]
  };
}

const ReactAsView = ({ data, save }) => (
  <div>
    <Webix ui={getForm()} data={data}/>
  </div>
)
export default ReactAsView;
