import React from 'react'
import "./css/GameList.css"
import Game from "./Game"

const GameList = ({ props }) => {

    const { games, status } = props

    if (status === 'loading') {
        return <div>Loading</div>
    } else if (status === 'rejected') {
        throw console.log(status)
    } else if (status === 'resolved' && games.length === 0) {
        return <div>There are no games to display</div>
    } else if (status === 'resolved') {
        return <Game games={games} />
    }

}

export default GameList