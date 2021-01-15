import React from 'react'
import axios from 'axios'

const Game = ({ games }) => {

    const deleteById = (id) => {
        axios.delete(process.env.REACT_APP_URL + `/${id}`)
    }

    return (
        <ul>
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
    )

}

export default Game