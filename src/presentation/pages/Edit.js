import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GameForm from '../components/GameForm'

const Edit = (props) => {
    const [gameData, setGameData] = useState('')

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