import React from 'react'

export default function (props) {

    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>
                {props.subtitulo} {props.numero}
            </h3>
        </div>
    )
}