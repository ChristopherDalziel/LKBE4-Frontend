import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Game = ({ props }) => {

    const deleteById = (id) => {
        axios.delete(process.env.REACT_APP_URL + `/${id}`).then((res) => console.log(res))
    }

    return (
        <ul>
            {props.map(item => (
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

export default Game