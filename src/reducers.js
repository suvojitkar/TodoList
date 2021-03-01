

// // Action creaters
// function addTask() {
//     return {
//         type: ADD_TASK,
//         info: 'This action is  used to add a task'
//     }
// }

// function editTask() {
//     return {
//         type: EDIT_TASK,
//         info: 'This action is  used to edit a task'
//     }
// }

// function deleteTask() {
//     return {
//         type: DELETE_TASK,
//         info: 'This action is  used to delete a task'
//     }
// }

// App state
const initialState = {
    todoItems: [],
    currentTodoItem: {
        text: '',
        key: ''
    },
    Developer: 'suvojit'
}

const CHANGE_DEV = 'CHANGE_DEV';
// Reducer function 
const reducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        // case ADD_TASK:
        //     const newItem = this.state.currentTodoItem;
        //     if (newItem.text !== "") {
        //         const newList = [...this.state.todoItems, { ...newItem }];
        //         return {
        //             todoItems: newList,
        //             currentTodoItem: {
        //                 text: '',
        //                 key: ''
        //             }
        //         }
        //     }
        case CHANGE_DEV:
            return {
                Developer: action.payload
            }
        default: return state
    }
}

export default reducer;
