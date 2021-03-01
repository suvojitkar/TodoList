import React from 'react';
import './App.css';
import ListItems from './components/ListItem/ListItem';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      currentTodoItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput($event) {
    this.setState({
      currentTodoItem: {
        text: $event.target.value,
        key: Date.now()
      }
    });
  }

  addItem($event) {
    $event.preventDefault();
    const newItem = this.state.currentTodoItem;
    if (newItem.text !== "") {
      const newList = [...this.state.todoItems, { ...newItem } ];
      this.setState({
        todoItems: newList,
        currentTodoItem: {
          text: '',
          key: ''
        }
      });
    }
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="App">
       <header>
          <form id="add-task-bar" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter your task" value={this.state.currentTodoItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.todoItems}></ListItems>
      </div>
    );
  }
  
}

export default App;
