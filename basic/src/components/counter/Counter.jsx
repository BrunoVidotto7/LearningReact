import "./Counter.css"
import React, {Component} from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

export default class Counter extends Component {

    state = {
       number: this.props.initialNumber || 0,
       step: this.props.initialStep || 5,
    };

    inc = () => { //arrow function make this point to current object
        this.setState({
            number: this.state.number + this.state.step,
        });
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number}></Display>
                <StepForm 
                    step={this.state.step}
                    setStep={this.setStep}
                    />
                <Buttons 
                    setInc={this.inc}
                    setDec={this.dec}/>
                </div>
        );
    }
}