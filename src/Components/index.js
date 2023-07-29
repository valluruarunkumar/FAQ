import React from "react";
import { useState } from "react";
import './index.css'

const RandomNumber = () => {

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 101);
        setRandomNumber(randomNumber);
        
    }

    return (
        <div className="random-number-container">
            <h1>Random Number</h1>
            <p>Generate a random number in the range of 0 to 100</p>
            <button onClick={generateRandomNumber}>Generate</button>
            <p className="random-number">{randomNumber}</p>
        </div>
    )
}

export default RandomNumber