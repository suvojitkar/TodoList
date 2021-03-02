import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtask, deletetask, changeDevName } from './redux-mgmt/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Listitems from './components/Listitems/Listitems';
import './components/Listitems/Listitems.css';
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';

import logo from './assets/logo.gif';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTask: ''
    }
    this.taskInputHandler = this.taskInputHandler.bind(this);
  } 

  taskInputHandler($event) {
    this.setState({
      currentTask: $event.target.value
    });
  }

  render() {
    return (
      <div>
        <br/>
        <center>
          <h1 className="projectHeader"> TaskList </h1>
          <img src={logo} alt="logo" width="100" height="100"></img>
        </center>

        <div id="add-task-bar" className="App">
          <input type="text" id="currentTask" placeholder="Enter a task" value={ this.state.currentTask} onChange={ this.taskInputHandler} autoComplete="off"></input>
          <button onClick={() => { this.props.AddTask(this.state.currentTask) }}> Add</button>
          <Listitems items={this.props}></Listitems>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

// create props from global state variable
const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems,
    developer: state.Developer
  }
}

// create props for actions
const mapDispatchToProps = (dispatch) => {
  return {
    changeDeveloper: (name) => {
      dispatch(changeDevName(name));
    },
    AddTask: (task) => {
      console.log('User action indicates to dispatch an action to add items:', task);
      dispatch(addtask(task));
    },
    DeleteTask: (taskId) => {
      console.log('User action indicates to dispatch an action to delete items:', taskId);
      dispatch(deletetask(taskId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)