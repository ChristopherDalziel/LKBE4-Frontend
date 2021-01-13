import axios from 'axios'
import React, { useState } from 'react'
import "./css/GameForm.css"

const GameForm = () => {
    const [gameData, setGameData] = useState({ name: '', year: 0, rating: '', developer: "" })
    const url = 'http://localhost:6060/games'

    const handleInputChange = e => {
        const { name, value } = e.target

        setGameData({ ...gameData, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()
        axios
            .post(url, gameData)
            .then((res) => {
                console.log(res)
            }).catch((error) => console.log(error))
    }

    return (
        <form onSubmit={onSubmit}>
            <label id="name" htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Game title" onChange={handleInputChange} />
            <br />
            <label htmlFor="year">Year: </label>
            <input type="number" name="year" placeholder="Release year" onChange={handleInputChange} />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input type="text" name="rating" placeholder="Age rating" onChange={handleInputChange} />
            <br />
            <label htmlFor="developer">Developer: </label>
            <input type="text" name="developer" placeholder="Developer" onChange={handleInputChange} />
            <br />
            <input type="submit" value="Click Me"></input>
        </form>
    )
}

export default GameForm