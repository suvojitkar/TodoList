import initialState from './appState';

/*
App do not change the store data directly
Reducer function is used to change store data
*/

// App Reducer
const CHANGE_DEV = 'CHANGE_DEV';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DEV:
            return {
                ...state,
                Developer: action.payload
            }
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
        default: return state
    }
}

export default reducer;
