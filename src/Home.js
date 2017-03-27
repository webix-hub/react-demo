// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
         <p>There are 4 main techniques, when you are working with React and Webix combo.</p>

         <ul>
            <li>Creating UI through Webix component</li>
            <li>Wrapping Webix UI in a custom component</li>
            <li>Sync data of Webix componet with app's state</li>
            <li>Sync configuration of Webix component with app's state</li>
         </ul>


         <p>All above will work if you need to add a few Webix components to React based app. 
                  If you are plan to create an app, with heavy usage of Webix components, check <a>Webix Jet</a> first. </p>
      </div>
    );
  }
}

export default Home;
