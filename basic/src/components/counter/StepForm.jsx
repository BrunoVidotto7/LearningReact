import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="inputStep">Step: </label>
            <input 
                id="inputStep" 
                type="number" 
                value={props.step} 
                onChange={e => props.setStep(+e.target.value)}
            />
        </div>
    )
}