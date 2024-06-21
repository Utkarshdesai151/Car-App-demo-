import React from "react";
const ChildComponent = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{props.message}</p>
            <button onClick={props.onButtonClick}>Click Me</button>
        </div>
    );
}
export default ChildComponent;
