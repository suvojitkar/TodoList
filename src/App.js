import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import changeDevName from './redux-mgmt/actions';

function App(props) {
  return (
    <div>
      <div className="projectHeader"> {props.developer} </div>
      <button onClick={() => { props.changeDeveloper("raj")}}> change Dev</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    developer: state.Developer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDeveloper: (name) => {
      console.log('name', name);
      dispatch(changeDevName(name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);