import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./css/GameList.css"

const GameList = () => {
    const url = 'http://localhost:6060/games'
    const [state, setState] = useState({
        games: [],
        status: 'loading',
        error: null
    });
    const { status, games } = state

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setState({ status: 'resolved', games: res.data })
            })
    }, [url])

    const deleteById = (id) => {
        axios.delete(url + `/${id}`).then(console.log(`${id} deleted`))
    }

    if (status === 'loading') {
        return <div>Loading</div>
    } else if (status === 'rejected') {
        throw console.log(status)
    } else if (status === 'resolved' && games.length === 0) {
        return <div>There are no games to display</div>
    } else if (status === 'resolved') {
        return <ul>
            {games.map(item => (
                <li className="game-li" key={item._id}>
                    <p className="game-title">{item.name}</p>
                    <p>Developer: {item.developer}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Year: {item.releaseYear}</p>
                    <button onClick={() => deleteById(item._id)}>Delete</button>
                    <button>Edit</button>
                </li>
            ))}
        </ul>
    }
}

export default GameList