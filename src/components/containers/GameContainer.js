import React, { useState } from 'react'
import axios from 'axios'
import GameForm from "../GameForm"

const GameContainer = () => {
    const [gameData, setGameData] = useState({})

    // const [gameData, setGameData] = useState(props.gameData ? props.gameData : { name: "", releaseYear: 0, rating: '', developer: "" })

    const handleChange = e => {
        setGameData({ ...gameData, [e.target.name]: e.target.value })
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

    // const onUpdate = e => {
    //     e.preventDefault()
    //     axios
    //         .put(process.env.REACT_APP_URL, gameData)
    //         .catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log("response.data: ", error.response.data);
    //                 console.log("status: ", error.response.status);
    //                 console.log("headers: ", error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //                 // http.ClientRequest in node.js
    //                 console.log("request error: ", error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log("Error: ", error.message);
    //             }
    //         });
    //     window.location.replace('/')
    // }

    return (
        <GameForm onGameSubmit={onSubmit} onGameChange={handleChange} />
    )
}

export default GameContainer