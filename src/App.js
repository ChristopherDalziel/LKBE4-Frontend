import React, { useEffect, useState } from 'react';
import axios from 'axios';

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