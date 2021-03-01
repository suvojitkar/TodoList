/*
Action defines which reducer is to be used
*/

// Action Types
const CHANGE_DEV = 'CHANGE_DEV';
const ADD_TASK = 'ADD_TASK';

// Action Creater
const testDevName = (name) => {
    return {
        type: CHANGE_DEV,
        info: 'This action is used to change developer name',
        payload: name
    }
}

export const addtask = (task) => {
    console.log('add task', task);
    return {
        type: ADD_TASK,
        info: 'This action is used to add new task',
        payload: task
    }
}

export const changeDevName = (name) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(resp2 => {
            dispatch({
                type: CHANGE_DEV,
                info: 'This action is  used to change developer name',
                payload: resp2[0].name
            });
        })
    }
}

// export default { addtask, changeDevName }