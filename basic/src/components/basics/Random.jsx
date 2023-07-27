import React from "react";

export default (props) => {
    const{ min,  max} = props;

    const ramdomNumber = getRndNumber(min, max);

    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <div>
            <h2>Ramdom number</h2>
            <p>
                Min number is <strong>{min}</strong>
            </p>
            <p>
                Max number is <strong>{max}</strong>
            </p>
            <p>
                Ramdom number is <strong>{ramdomNumber}</strong>
            </p>
        </div>
    )
}