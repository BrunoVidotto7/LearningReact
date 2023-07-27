import "./Mega.css";
import React, { Component } from "react";

export default class Mega extends Component {

    state = {
        size: this.props.initialSize || 10,
        randomArray: this.props.initialArray || [],
    };

    generateNumbers = () => {

        // Create an empty array to store the random numbers
        let array = [];

        // Generate random numbers until the array reaches the desired size
        while (array.length < this.state.size) {
            // Generate a random number
            let randomNumber = Math.floor(Math.random() * 100) + 1;

            // Check if the number is already in the array
            if (!array.includes(randomNumber)) {
            // Add the number to the array if it's unique
            array.push(randomNumber);
            }
        }

        // Sort the array in ascending order
        array.sort((a, b) => a - b);

        this.setState({
            randomArray: array.join(','),
        })
    
    }

    setSize = (newSize) => {
        this.setState({
            size: newSize,
        })
    }

    render () {
        return (
            <div className="Mega">
                <h3><strong>MegaSena numbers</strong></h3>
                <div>
                    <label htmlFor="inputStep">How much numbers will be generated? </label>
                    <input 
                        id="inputSize" 
                        type="number" 
                        value={this.state.size}
                        onChange={e => this.setSize(+e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={e => this.generateNumbers()}>Generate</button>
                </div>
                <div>
                    <h4>Result</h4>
                    <p>{this.state.randomArray}</p>
                </div>
            </div>
        )   
    }

}