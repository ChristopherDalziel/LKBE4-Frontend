import axios from 'axios'
import React, { useState } from 'react'
import "./css/GameForm.css"

const GameForm = (props = "") => {
    const [gameData, setGameData] = useState(props.gameData ? props.gameData : { name: "", releaseYear: 0, rating: '', developer: "" })

    const handleInputChange = e => {
        const { name, value } = e.target
        console.log('handle input change', gameData)
        setGameData(props.gameData ? { ...props.gameData, [name]: value } : { ...gameData, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()
        axios
            .post(process.env.REACT_APP_URL, gameData)
            .catch(function (error) {
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
        window.location.reload()
    }

    const onUpdate = e => {
        e.preventDefault()
        axios
            .put(process.env.REACT_APP_URL, gameData)
            .catch(function (error) {
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
            });
        window.location.replace('/')
    }

    return (
        <form onSubmit={props.gameData ? onUpdate : onSubmit}>
            {props.gameData ?
                <><label id="_id" htmlFor="_id">ID: </label> <br />
                    <input type="text" name="_id" value={props.gameData._id} onChange={handleInputChange} /> </>
                : ''}
            <br />
            <label id="name" htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Game title" onChange={handleInputChange} defaultValue={props.gameData ? props.gameData.name : ''} />
            <br />
            <label htmlFor="releaseYear">Year: </label>
            <input type="number" name="releaseYear" placeholder="Release year" onChange={handleInputChange} defaultValue={props.gameData ? props.gameData.releaseYear : ''} />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input type="text" name="rating" placeholder="Age rating" onChange={handleInputChange} defaultValue={props.gameData ? props.gameData.rating : ''} />
            <br />
            <label htmlFor="developer">Developer: </label>
            <input type="text" name="developer" placeholder="Developer" onChange={handleInputChange} defaultValue={props.gameData ? props.gameData.developer : ''} />
            <br />
            <input type="submit" value="Click Me"></input>
        </form>
    )
}

export default GameForm