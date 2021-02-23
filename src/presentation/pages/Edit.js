import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GameForm from '../components/GameForm'

const Edit = (props) => {
    const [gameData, setGameData] = useState('')

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

    const id = props.match.params.id

    function getById(id) {
        axios.get(process.env.REACT_APP_URL + `/${id}`).then((res) => setGameData(res.data))
    }

    useEffect(() => {
        getById(id)
    }, [id])

    return (
        <>
            <h1>Edit</h1> <h2>{gameData.name}</h2>
            <GameForm gameData={gameData} />
        </>
    )
}

export default Edit