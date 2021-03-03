import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtask, deletetask, changeDevName } from './redux-mgmt/actions';
  
import firebaseApp from './config/firebaseconfig';
import firebase from 'firebase';

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
      userInfo: ''
    }
    this.taskInputHandler = this.taskInputHandler.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
  }

  taskInputHandler($event) {
    this.setState({
      ...this.state,
      currentTask: $event.target.value
    });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (!this.state.userInfo) {
          this.setState({
            ...this.state,
            userInfo: user.providerData[0]
          });
        }
        console.log("User is logged in", this.state);
      } else {
        console.log("User is logged out", this.state);
      }
    });
  }
  
  handleGoogleLogout() {
    firebaseApp.auth().signOut().then(() => {
         this.setState({
          ...this.state,
          userInfo: ''
        });
      console.log("Logout out succesful", this.state);
    },(error) => {
      console.log("An error happened during logouot", error);
    });
  }


  handleGoogleLogin(e) {
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then((result) => {
      if (!this.state.userInfo) {
        this.setState({
          ...this.state,
          userInfo: result.additionalUserInfo.profile
        });
      }
      console.log('Google login success', this.state);
    }).catch((error) => {
      let errorMessage = error.message;
      alert("Google sign in error: " + errorMessage);
    });
  }


  render() {
    let navMenuopt;
    if (!this.state.userInfo) {
      console.log("show login");
      navMenuopt = <Button variant="outline-success" onClick={this.handleGoogleLogin}> Login </Button>
    } else {
      console.log("show dropdown");
      navMenuopt = <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                      <Image className="profilepic" src={this.state.userInfo.hasOwnProperty('photoURL') ? this.state.userInfo.photoURL : this.state.userInfo.picture} roundedCircle />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                      <Dropdown.Item onClick={this.handleGoogleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
    }
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">{ }</Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            { navMenuopt }
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