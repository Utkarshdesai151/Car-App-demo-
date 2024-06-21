import React, { useState } from "react";
import Game from "./components/usestates"; 

function App() {
    const [isVisible, setIsVisible] = useState(true); // Corrected typo

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };  
    
    return (
        <div>
            <button onClick={toggleVisibility}>Toggle Visibility</button> 
            {isVisible && <div><Game/></div>}
        </div>
    );
}

export default App;
