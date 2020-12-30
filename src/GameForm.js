import axios from 'axios'
import React, { useState } from 'react'

const GameForm = () => {
    const url = 'http://localhost:6060/games'
    const handleInputChange = e => {
        const { name, value, year, rating, developer } = e.target
        setGameData({ ...gameData, [name]: value, [year]: value, [rating]: value, [developer]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, year, rating, developer } = gameData

        if (!name || !year || !rating || !developer) return

        setGameData(gameData)

        axios
            .post(url, { gameData })
            .then((res) => {
                console.log(res)
            }).catch((error) => console.log(error))

    }

    const [gameData, setGameData] = useState({ name: '', year: 0, rating: '', developer: "" })

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name: </label>
            <input name="name" placeholder="Game title" onChange={handleInputChange} />
            <br />
            <label htmlFor="year">Year: </label>
            <input name="year" placeholder="Release year" onChange={handleInputChange} />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input name="rating" placeholder="Age rating" onChange={handleInputChange} />
            <br />
            <label htmlFor="developer">Developer: </label>
            <input name="developer" placeholder="Developer" onChange={handleInputChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default GameForm