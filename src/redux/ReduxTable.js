// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import { connect } from 'react-redux';
import TableView from '../TableView';

import {selectUser} from "./store";


const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select: (id) => {
      dispatch(selectUser(id))
    }
  }
}



const ReduxForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableView);

export default ReduxForm;