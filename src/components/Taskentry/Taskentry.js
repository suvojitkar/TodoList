import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addtask, deletetask } from '../../redux-mgmt/actions';
import Listitems from '../Listitems/Listitems';
import '../Listitems/Listitems.scss'

class Taskentry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: ''
        }
        this.taskInputHandler = this.taskInputHandler.bind(this);
    }

    taskInputHandler($event) {
        this.setState({
            currentTask: $event.target.value
        });
    }

    render() {
        return (
            <div id="add-task-bar" className="App">
                 <input type="text" id="currentTask" placeholder="Enter a task" value={this.state.currentTask} onChange={this.taskInputHandler} autoComplete="off"></input>
                <button onClick={() => { this.props.AddTask(this, this.state.currentTask) }}> Add</button>
                <div className="listComponent">
                    <Listitems items={this.props}></Listitems>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todoItems: state.todoItems
})

const mapDispatchToProps = (dispatch) => {
    return {
        AddTask: (_this, latestTask) => {
            _this.setState({
                currentTask: ''
            });
            if (latestTask !== "") {
                console.log('User action indicates to dispatch an action to add items:', latestTask);
                dispatch(addtask(latestTask));
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

export default connect(mapStateToProps, mapDispatchToProps)(Taskentry)
