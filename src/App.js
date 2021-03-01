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
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
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
  }

  deleteItem(key) {
    console.log('Key', key);
    const afterDelObj = this.state.todoItems.filter(item => item.key !== key);
    this.setState({
      todoItems: afterDelObj
    });
  }

  editItem($event, key) {
    const items = this.state.todoItems;
    items.map(item => {
      if (item.key === key) {
        item.text = $event.target.value;
      }
    });

    this.setState({
      todoItems: items
    });

  }

  render() {
    return (
      <div>
        <center><h1 className="projectHeader"> Work Tracker React App </h1></center>
      <div className="App">
       <header>
          <form id="add-task-bar" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter your task" value={this.state.currentTodoItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.todoItems} deleteItem={this.deleteItem} editItem={this.editItem}></ListItems>
        <div class="footer">
          <p>Developed by: @suvojitKar</p>
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
