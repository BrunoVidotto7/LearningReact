import React from "react";

export default props => {

    const min = 50
    const max = 70
    const generateAge = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <div>Son</div>
            <button onClick={e => props.whenClick('John', generateAge, false)}>
                Give information
                </button>
        </div>
    )
}