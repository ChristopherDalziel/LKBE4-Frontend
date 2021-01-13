import axios from 'axios'
import React, { useState } from 'react'
import "./css/GameForm.css"

const GameForm = () => {
    const [gameData, setGameData] = useState({ name: '', releaseYear: 0, rating: '', developer: "" })
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
                console.log(res.data)
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("response.data: ", error.response.data);
                    console.log("status: ", error.response.status);
                    console.log("headers: ", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log("request error: ", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error: ", error.message);
                }
                console.log("error config: ", error.config);
            });
    }

    return (
        <form onSubmit={onSubmit}>
            <label id="name" htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Game title" onChange={handleInputChange} />
            <br />
            <label htmlFor="releaseYear">Year: </label>
            <input type="number" name="releaseYear" placeholder="Release year" onChange={handleInputChange} />
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