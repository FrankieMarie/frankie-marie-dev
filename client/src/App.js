import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

// COMPONENTS
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router >
          <div className="App">
            <Switch>
              <Route exact path='/' component={Main} />
            </Switch>
          </div>
        </ Router>
      </Provider>
    );
  }
}

export default App;
