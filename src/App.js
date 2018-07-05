import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Full from './Pages/Full';
import Home from './Pages/Full/Pages/Home';
import About from './Pages/Full/Pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Full>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
          </Switch>
        </Full>
      </Router>
    );
  }
}

export default App;
