import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </div>
      </ Router>
    );
  }
}

export default App;
