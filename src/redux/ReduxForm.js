// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import { connect } from 'react-redux';
import FormView from '../FormView';

import {setUserInfo} from "./store";


const mapStateToProps = (state) => {
  return {
    data: state.data[state.selected]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (values) => {
      dispatch(setUserInfo(values))
    }
  }
}



const ReduxForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView);

export default ReduxForm;