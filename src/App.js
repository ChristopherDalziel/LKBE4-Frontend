import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameForm from './GameForm';
import GameList from './GameList';

const App = () => {
  const [state, setState] = useState({
    games: [],
    status: 'loading',
    error: null
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL)
      .then((res) => {
        setState({ status: 'resolved', games: res.data })
      })
  }, [])

  return (
    <>
      <GameList props={state} />
      <GameForm />
    </>
  )
}

export default App;