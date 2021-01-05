import axios from 'axios'
import React, { useState } from 'react'
import "./css/GameForm.css"

const GameForm = () => {
    const url = 'http://localhost:6060/games'
    const config = {

        mode: 'no-cors',

        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Content-Type": "application/json"
        }
    }
    const handleInputChange = e => {
        const { name, value, year, rating, developer } = e.target
        setGameData({ ...gameData, [name]: value, [year]: value, [rating]: value, [developer]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // const { name, year, rating, developer } = gameData

        // if (!name || !year || !rating || !developer) return

        console.log(gameData)

        setGameData(gameData)

        axios
            .post(url, gameData, config)
            .then((res) => {
                console.log(res)
            }).catch((error) => console.log(error))

    }

    const [gameData, setGameData] = useState({ name: '', year: 0, rating: '', developer: "" })

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
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default GameForm