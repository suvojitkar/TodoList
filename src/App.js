import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { Authprofile } from './redux-mgmt/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './components/Footer/Footer.scss';
import './components/Navigationbar/Navigationbar.scss';
import './components/Login/Login.scss';
import './components/Taskentry/Taskentry.scss';

import Footer from './components/Footer/Footer';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Login from './components/Login/Login';
import Taskentry from './components/Taskentry/Taskentry';

import logo from './assets/logo.gif';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTask: '',
      userInfo: ''
    }
    this.taskInputHandler = this.taskInputHandler.bind(this);
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
        let profileObj = {
          'name': user.displayName,
          'email': user.email,
          'img': user.photoURL
        }
        this.props.addUserProfile(profileObj);
        console.log("User is logged in", user);
      } else {
        console.log("User is logged out");
      }
    });
  }

  render() {
    const bodyContent = () => {
      if (this.props.userInfo) {
        return <Taskentry></Taskentry>
      } else {
        return <Login></Login>
      }
    }
    return (
      <div>
        <Navigationbar></Navigationbar>
        <center>
          <h1 className="title projectHeader"> TaskList Tracker</h1>
          <img src={logo} alt="logo" width="80" height="80"></img>
        </center>
        {bodyContent()}
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems,
    userInfo: state.Profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserProfile: (profileObj) => {
      dispatch(Authprofile(profileObj));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)