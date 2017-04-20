// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';

export const Home = () => (
  <div>
     <p>When you are working with a combination of React and Webix, there are 3 main coding techniques.</p>

     <ul>
        <li>Creating UI via a Webix widget</li>
        <li>Wrapping Webix UI in a custom component</li>
        <li>Using Redux with Webix</li>
     </ul>

     <br/><br/><br/>
     <p>The above listed variants will work fine, if you need to add a few Webix widgets to a React-based app.</p>
     <p>If you are planning to create an app with plenty of Webix widgets, check <a href='https://webix.gitbooks.io/webix-jet/content/chapter1.html'>Webix Jet</a> first. </p>
  </div>
);

export default Home;
