// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { userInfo } from './store';


import ReduxTable from "./ReduxTable";
import ReduxForm from "./ReduxForm";


let store = createStore(userInfo);

const ReduxDataView = () => (
  <Provider store={store}>
  	<div>
  		<p>Change data in the form and click the Save button</p>
    	<ReduxForm />
    	<p>Select any line, to load the related data into the form</p>
    	<ReduxTable />
    </div>
  </Provider>
)

export default ReduxDataView;
