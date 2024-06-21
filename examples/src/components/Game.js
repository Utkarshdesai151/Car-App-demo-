import React from "react";
import { useState  } from "react";

function game(){
    const [score,setScore] = useState(0);

      const incerement = () =>{
        setScore(score +1)
      }  

      return <div className="list-image-[url(checkmark.png)]">
        <h1>score:{score}</h1>
        <button onClick={setScore}>increment</button>
      </div>
}
export default game;