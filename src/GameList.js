import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./css/GameList.css"
import { Link } from 'react-router-dom'

const GameList = () => {
    const [state, setState] = useState({
        games: [],
        status: 'loading',
        error: null
    });

    const getAll = () => {
        setState({ status: 'loading' })
        axios
            .get(process.env.REACT_APP_URL)
            .then((res) => {
                setState({ status: 'resolved', games: res.data })
            })
    }

    const deleteById = (id) => {
        axios.delete(process.env.REACT_APP_URL + `/${id}`).then(
            getAll()
        )
    }

    useEffect(() => {
        getAll()
    }, [])

    const { games, status } = state

    if (status === 'loading') {
        return <div>Loading</div>
    } else if (status === 'rejected') {
        throw console.log(status)
    } else if (status === 'resolved' && games.length === 0) {
        return <div>There are no games to display</div>
    } else if (status === 'resolved') {
        return (
            <ul>
                {games.map(item => (
                    <li className="game-li" key={item._id}>
                        <p className="game-title">{item.name}</p>
                        <p>Developer: {item.developer}</p>
                        <p>Rating: {item.rating}</p>
                        <p>Year: {item.releaseYear}</p>
                        <button onClick={() => deleteById(item._id)}>Delete</button>
                        <Link to={item._id}><button>Edit</button></Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default GameList