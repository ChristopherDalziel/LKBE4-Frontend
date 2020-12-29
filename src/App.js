import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Api from './Api';
// import GameList from "./GameList"


// class App extends Component {

//   componentDidMount() {
//     const apiUrl = 'http://localhost:6060/games';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }

//   render() {

//     return (
//       // <Router>
//       //   <Switch>
//       //     <Route
//       //       path='/'
//       //       exact={true}
//       //       render={(props) => <GameList {...props} api={api} />}
//       //     />
//       //   </Switch>
//       // </Router>
//       <div>hello</div>
//     )
//   }
// }

// export default App;

const App = () => {
  const [state, setState] = useState({
    games: [],
    status: 'loading',
    error: null
  });
  const [url] = useState('http://localhost:6060/games')
  const { status, games } = state

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setState({ status: 'resolved', games: res.data })
      })
  }, [url])


  if (status === 'loading') {
    return <div>loading</div>
  } else if (status === 'rejected') {
    throw console.log(status)
  } else if (status === 'resolved') {
    return <ul>
      {games.map(item => (
        <li>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  }
}

export default App;