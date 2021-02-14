import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/Nav.css"

const Nav = () => {
    return (
        <>
            <Link className="navButton" to="/">Home</Link>
        </>
    )
}

export default Nav