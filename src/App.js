import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Api from './Api';
import GameList from "./GameList"

const api = new Api();

class App extends Component {

  render() {

    return (
      // <Router>
      //   <Switch>
      //     <Route
      //       path='/'
      //       exact={true}
      //       render={(props) => <GameList {...props} api={api} />}
      //     />
      //   </Switch>
      // </Router>
      <div>hello</div>
    )
  }
}

export default App;