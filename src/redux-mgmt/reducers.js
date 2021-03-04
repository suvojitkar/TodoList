import initialState from './appState';

/*
App do not change the store data directly
Reducer function is used to change store data
*/

// App Reducers
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const AUTH_USER = 'AUTH_USER';
const USER_LOGOUT = 'USER_LOGOUT';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log('Let the reducer deal with global state based on action type:', ADD_TASK);
            return {
                ...state,
                todoItems: state.todoItems.concat({ text: action.payload, key: action.createdAt})
            }
        case DELETE_TASK:
            console.log('Let the reducer deal with global state based on action type:', DELETE_TASK);
            let afterDeleteItems = state.todoItems.filter(tasks => tasks.key !== action.payload);
            return {
                ...state,
                todoItems: afterDeleteItems
            }
        case AUTH_USER:
            console.log('Let the reducer deal with global state based on action type:', AUTH_USER);
            return {
                ...state,
                Profile: action.Profile
            }
        case USER_LOGOUT:
            console.log('Let the reducer deal with global state based on action type:', USER_LOGOUT);
            return {
                ...state,
                Profile: action.Profile
            }
        default: return state
    }
}

export default reducer;
