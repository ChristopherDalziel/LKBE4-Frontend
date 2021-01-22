import React from 'react'
import axios from 'axios'
import GameForm from '../components/GameForm'
// import GameList from '../components/GameList'



function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null }
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null }
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function getAll() {
  fetch(process.env.REACT_APP_URL)
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      // if (response.ok) {
      //   const data = response.data
      // }
      return data
    })

}


function useAsync(asyncCallback, initialState, dependencies) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  })

  React.useEffect(() => {
    const promise = asyncCallback()
    if (!promise) {
      return
    }
    dispatch({ type: 'pending' })
    promise.then(
      data => {
        dispatch({ type: 'resolved', data })
      },
      error => {
        dispatch({ type: 'rejected', error })
      },
    )
    // too bad the eslint plugin can't statically analyze this :-(
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return state
}

// const GameList = (props) => {


//   const state = useAsync(() => {
//     if (!props) {
//       return
//     }
//     return getAll()

//   }, []);

useAsync(getAll())

console.log('this is state', state)


const { data: games, status, error } = state

console.log('games', games)

// if (status === 'idle') {
//   return 'get the games list'
// } else if (status === 'pending') {
//   return 'pending'
// } else if (status === 'rejected') {
//   throw error
//   // } else if (status === 'resolved') {
//   //   return <GameList games={games} />
//   // }
// }
// throw new Error('This should be impossible')
// }


const Landing = () => {
  return (
    <>
      <GameForm />
      <GameList />
    </>
  )
}

export default Landing;