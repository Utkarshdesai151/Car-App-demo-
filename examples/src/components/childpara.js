import React from "react";

const ChildComponent = (props) => {
    const handleClick = () => {
        const message = "Hello from Child";
        props.onButtonClick(message);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default ChildComponent;
