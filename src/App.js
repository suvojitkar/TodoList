import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <header>
          <form id="add-task-bar">
            <input type="text" placeholder="Enter your task"></input>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
   }
}

export default App;
