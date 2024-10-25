// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from "react";
import Webix from "./Webix";


function getForm(save){
  return {
    view:"form", width:400, elements:[
      { view:"text", name:"name", label:"Name", placeholder:"Type your full name here"},
      { view:"text", name:"email", label:"Email"},
      { view:"slider", name:"age", label:"Age", value:"25"},
      { cols:[
        {}, { view:"button", value:"Save", click:function(){
          if (save)
            save(this.getFormView().getValues());
        }}
      ]}
    ]
  };
}

const FormView = ({ data, save }) => (
  <div>
    <Webix ui={getForm(save)} data={data}/>
  </div>
)
export default FormView;
