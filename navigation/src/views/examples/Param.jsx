import React from "react";

import { useParams } from "react-router-dom";

const Param = props => {
    const { id } = useParams()

    return (
        <div className="About">
            <h1>Param</h1>
            <h2>Value: {id}!</h2>
        </div>
    )
}

export default Param