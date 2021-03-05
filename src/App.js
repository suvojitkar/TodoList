import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Authprofile } from './redux-mgmt/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './components/Navigationbar/Navigationbar.scss';
import './components/Project/Project.scss';
import './components/Login/Login.scss';
import './components/Taskentry/Taskentry.scss';
import './components/Profile/Profile.scss';
import './components/Footer/Footer.scss';

import AppNavigationbar from './components/Navigationbar/Navigationbar';
import AppTitle from './components/Project/Project';
import AppLogin from './components/Login/Login';
import AppTaskentry from './components/Taskentry/Taskentry';
import AppProfile from './components/Profile/Profile';
import AppFooter from './components/Footer/Footer';

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
        return <React.Fragment>
                  <Route path="/" exact component={AppTaskentry} />
                  <Route path="/profile" exact><AppProfile userInfo={this.props.userInfo}/></Route>
                </React.Fragment>
          
      } else {
        return <AppLogin />
      }
    }
    return (
      <Router>
          <React.Fragment>
            <AppNavigationbar />
            <AppTitle title={this.props.title}/>
            {bodyContent()}
            <AppFooter developer={ this.props.developer }/>
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems,
    userInfo: state.Profile,
    developer: state.developer,
    title: state.projectTitle
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