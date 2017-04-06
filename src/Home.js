// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';

export const Home = () => (
  <div>
     <p>When you are working with React and Webix combo, there are 4 main coding techniques.</p>

     <ul>
        <li>Creating UI through Webix component</li>
        <li>Wrapping Webix UI in a custom component</li>
        <li>Using Redux with Webix</li>
     </ul>

     <br/><br/><br/>
     <p>Above will work if you need to add a few Webix components to React based app.</p>
     <p>If you are plan to create an app, with heavy usage of Webix components, check <a href='https://webix.gitbooks.io/webix-jet/content/chapter1.html'>Webix Jet</a> first. </p>
  </div>
);

export default Home;
