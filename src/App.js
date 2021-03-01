import React from 'react';
import './App.css';
import ListItems from './components/ListItem/ListItem';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag'

const endPointUrl = 'http://localhost:9000/graphql';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

async function loadTeams(currentTeam) {
  const query = gql `{
    ${currentTeam} {
      id,
      name
    }
  }`
  const { data } = await client.query({ query });
  return data;
}

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
    this.change = this.change.bind(this);
    this.changeMember = this.changeMember.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.loadTeamDetails();
  }

  changeMember() {
    console.log("member:",document.getElementById("teammember").value);
  }

  loadTeamDetails(currentTeam ='copmon_members') {
    loadTeams(currentTeam).then(resp => {
      console.log('resp', resp);
      let selectStart = `<select name="teammember" id="teammember" onChange=${this.changeMember}>`;
      let selectEnd = `</select>`;
      let options = '';
      for (let memberDesc = 0; memberDesc < resp[currentTeam].length; memberDesc++) {
        options = options + `<option value="${resp[currentTeam][memberDesc]['name']}"> ${resp[currentTeam][memberDesc]['name']} </option>`;
      }
      console.log(selectStart + options + selectEnd);
      document.getElementById("membersDiv").innerHTML = selectStart + options + selectEnd;
    });
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

  change() {
    let currentTeam = document.getElementById("team").value;
    this.loadTeamDetails(currentTeam);
  }

  render() {
    return (
      <div>
        <center><h1 className="projectHeader"> Work Tracker React App </h1></center>
        <div className="App">
          <header>
            <form id="add-task-bar" onSubmit={this.addItem}>
              <label id="teamheader">Team:</label>
              <select name="team" id="team" onChange={this.change}>
                <option value="copmon_members">COP Monitoring</option>
                <option value="gwmon"> Gateway Monitoring </option>
                <option value="im_member"> Install Manager</option>
                <option value="report"> Reporting </option>
                <option value="AE"> Alerts and Events </option>
              </select>

              <div id="membersDiv"></div>

             <input type="text" placeholder="Enter your task" value={this.state.currentTodoItem.text} onChange={this.handleInput}></input>
             <button type="submit">Add</button>
            </form>
          </header>
          <ListItems items={this.state.todoItems} deleteItem={this.deleteItem} editItem={this.editItem}></ListItems>
          <div className="footer">
          <p>Developed by: @suvojitKar</p>
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
