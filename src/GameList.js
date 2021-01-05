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

    if (status === 'loading') {
        return <div>loading</div>
    } else if (status === 'rejected') {
        throw console.log(status)
    } else if (status === 'resolved') {
        return <ul>
            {games.map(item => (
                <li className="game-li" key={item._id}>
                    <p className="game-title">{item.name}</p>
                    <p>Developer: {item.developer}</p>
                    <p>Rating: {item.rating}</p>
                </li>
            ))}
        </ul>
    }
}

export default GameList