import initialState from './appState';

/*
App do not change the store data directly
Reducer function is used to change store data
*/

// App Reducer
const CHANGE_DEV = 'CHANGE_DEV';
const ADD_TASK = 'ADD_TASK';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DEV:
            return {
                ...state,  // destructure current state vale
                Developer: action.payload // override only Developer val
            }
        case ADD_TASK:
            console.log('ADD_TASK');
            return {
                ...state,
                todoItems: state.todoItems.concat(action.payload)
            }
        default: return state
    }
}

export default reducer;
