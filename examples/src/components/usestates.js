import React, { useState } from "react";

function Game() {
    const [score, setScore] = useState(0); 
    

    const incrementScore = () => {
        setScore(score + 1); 
    };
    
    const decrementScore = () => {
        setScore(score - 1); 
    };
    return (
        <div>
            <h1>Score: {score}</h1>
            <button onClick={incrementScore}>Increase Score</button>
            <button onClick={decrementScore}>decrease Score</button>
        </div>
    );
}
export default Game;
