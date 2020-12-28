import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Api from './Api';
import GameList from "./GameList"


class App extends Component {

  componentDidMount() {
    const apiUrl = 'http://localhost:6060/games';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }

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