import React, { createContext, useReducer } from 'react'
import { initialState, gameReducer } from '../reducer/gameReducer'

const GameContext = createContext(initialState);
const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider }