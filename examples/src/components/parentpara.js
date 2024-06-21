import React from "react";
import ChildComponent from "./childcomponent";

function Parentpara() {
    const handleChildClick = (message) => {
        document.write(`Message from child: ${message}`);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onButtonClick={handleChildClick} />
        </div>
    );
}

export default Parentpara;
