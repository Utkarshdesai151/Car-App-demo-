import React from "react";
import Childecomponent from "./childcomponent";
function Parentcomponents() {
    const handleClick = () => {
    document.write("Clicked in child");
    }
    return (
        <div>
            <Childecomponent message="Hello from parent" onButtonClick={handleClick} />
        </div>
    );
}
export default Parentcomponents;
