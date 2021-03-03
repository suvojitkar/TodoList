import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtask, deletetask, changeDevName } from './redux-mgmt/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Listitems from './components/Listitems/Listitems';
import './components/Listitems/Listitems.css';
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';


import logo from './assets/logo.gif';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTask: '',
      isVisible: false,
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
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>

            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                <Image className="profilepic" src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/29356752_1158364047638851_5632027070927208448_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=h6DFU6p6U8oAX8OqKR6&_nc_ht=scontent.fccu11-1.fna&oh=9c3a5ce4c481b2f85dccab1f307ae9d3&oe=6065781E" roundedCircle />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="offset">
              offset
            </div>
          </Navbar.Collapse>
        </Navbar>

        <br /><br />
        <center>
          <h1 className="title projectHeader"> TaskList Tracker</h1>
          <img src={logo} alt="logo" width="80" height="80"></img>
        </center>

        <div id="add-task-bar" className="App">
          <input type="text" id="currentTask" placeholder="Enter a task" value={ this.state.currentTask} onChange={ this.taskInputHandler} autoComplete="off"></input>
          <button onClick={() => { this.props.AddTask(this, this.state.currentTask) }}> Add</button>
          
          <div className="listComponent">
            <Listitems items={this.props}></Listitems>
          </div>
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
    AddTask: (stateRef, task) => {
      stateRef.setState({
        currentTask: ''
      });
      if (task !== "") {
        console.log('User action indicates to dispatch an action to add items:', task);
        dispatch(addtask(task));
      } else {
        alert('Task cannot be empty');
      }
    },
    DeleteTask: (taskId) => {
      console.log('User action indicates to dispatch an action to delete items:', taskId);
      dispatch(deletetask(taskId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)