import firebaseApp from '../config/firebaseconfig';
import firebase from 'firebase';

/*
Action defines which reducer is to be used
*/

// Action Types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const AUTH_USER = 'AUTH_USER';
const USER_LOGOUT = 'USER_LOGOUT';


export const addtask = (task) => {
    console.log('Lets make a action object for adding the task:', task);
    return {
        type: ADD_TASK,
        info: 'This action is used to add new task',
        payload: task,
        createdAt: new Date().getTime()
    }
}

export const deletetask = (taskId) => {
    console.log('Lets make a action object for deleting the task:', taskId);
    return {
        type: DELETE_TASK,
        info: 'This action is used to Delete task',
        payload: taskId
    }
}

export const Authuser = () => {
    return (dispatch) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then((result) => {
            let profileObj = {
                'name': result.user.displayName,
                'email': result.user.email,
                'img': result.user.photoURL
            }
            dispatch({
                type: AUTH_USER,
                info: 'This action is used to auth user',
                Profile: profileObj
            });
        }).catch((error) => {
            alert(error.message);
        });
    }
}

export const Authprofile = (profileObj) => {
    return {
        type: AUTH_USER,
        info: 'This action is used to auth user',
        Profile: profileObj
    }
}

export const userLogout = () => {
    return (dispatch) => {
        firebaseApp.auth().signOut().then(() => {
            dispatch({
                type: USER_LOGOUT,
                info: 'This action is used to logout an user',
                Profile: ''
            });
        }, (error) => {
            console.log("An error happened during logout", error);
        });
    }
}