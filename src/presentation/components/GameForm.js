import React from 'react'
import "../../css/GameForm.css"

const GameForm = ({ onGameChange, onGameSubmit }) => {
    // console.log('Game Form Props =>', props)
    return (
        <form onSubmit={onGameSubmit}>
            {/* {props.gameData ?
                <>
                    <label id="_id" htmlFor="_id">ID: </label> <br />
                    <input type="text" name="_id" value={props.gameData._id} />
                </>
                : ''} */}
            <br />
            <label id="name" htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Game title" onChange={onGameChange} />
            <br />
            <label htmlFor="releaseYear">Year: </label>
            <input type="number" name="releaseYear" placeholder="Release year" onChange={onGameChange} />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input type="text" name="rating" placeholder="Age rating" onChange={onGameChange} />
            <br />
            <label htmlFor="developer">Developer: </label>
            <input type="text" name="developer" placeholder="Developer" onChange={onGameChange} />
            <br />
            <input type="submit" value="Click Me"></input>
        </form>
    )
}

export default GameForm