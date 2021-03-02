/*
Action defines which reducer is to be used
*/

// Action Types
const CHANGE_DEV = 'CHANGE_DEV';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Action Creater
const testDevName = (name) => {
    return {
        type: CHANGE_DEV,
        info: 'This action is used to change developer name',
        payload: name
    }
}

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