import React from 'react'
import logo from './swatch_logo.png'

export default function Header({reloadColors}) {

    const handleClick = (event) => {
        reloadColors()
    }

    return (
        <div className="header">
            <img src={logo} alt="logo" id="logo" ></img>
            <button className="random-button" onClick={handleClick}>Randomize</button>
        </div>
    )

}