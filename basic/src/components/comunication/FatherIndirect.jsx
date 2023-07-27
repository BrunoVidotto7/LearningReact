import React, { useState } from "react";
import SonIndirect from "./SonIndirect";

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)


    function giveInformation(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{name}</span>
            <span><strong> {age}</strong></span>
            <span> {nerd ? ' True' : 'False'}</span>
            <div>Father</div>
            <SonIndirect whenClick={giveInformation}></SonIndirect>
        </div>
    )
}