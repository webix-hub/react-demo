// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import ReduxTable from "./ReduxTable";
import ReduxForm from "./ReduxForm";

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
