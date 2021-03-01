import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { addtask } from './redux-mgmt/actions';
import { changeDevName } from './redux-mgmt/actions';

function App(props) {


  return (
    <div>
      {/* <div className="projectHeader"> {props.developer} </div>
      <button onClick={() => { props.changeDeveloper("raj") }}> change Dev</button> */}
      
      {/* Todo  */}
      <br></br>
        <input type="text" id="currentTask" placeholder="Enter a task"></input>
      <button onClick={() => { props.AddTask(document.getElementById('currentTask').value) }}> Add</button>
      <div className="projectHeader">
        {
          props.todoItems.map((item, key) => {
            return <span style={{ whiteSpace: 'pre' }} key={key}>{item + '\n'}</span>
            // return item;
          })
        }
      </div>

      {/* Todo ends */}
    </div>
  );
}

// Get state Data as props
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    // prop variable
    todoItems: state.todoItems,
    developer: state.Developer
  }
}

// dispatchable function for a functional component
// call dispatch to update datastore
const mapDispatchToProps = (dispatch) => {
  return {
    // prop function
    changeDeveloper: (name) => {
      dispatch(changeDevName(name));
    },
    AddTask: (task) => {
      dispatch(addtask(task));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);