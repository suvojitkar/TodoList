# Install dependency
npm install

# Run the app
npm start

# Redux-react
1. react component
2. create actions (based on user interaction eg. edit, click)
3. Dispatch the action
4. use reducer to perform action based on dispatched action
5. Reducer connects to dataStore to provide or update the state value

Note:
1. `mapStateToProps` and `mapDispatchToProp` always returns props for a functional component.
2. `mapStateToProps` returns property to display using state
3. `mapDispatchToProp` returns actions to be performed using custom function for dispatching.

# chrome extension
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en

# chrome extension usage
https://github.com/zalmoxisus/redux-devtools-extension