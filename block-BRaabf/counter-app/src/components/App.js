import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            counterNew: 0,
            step: null,
            max: null
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <div>
                    <h2>STEPS</h2>
                    <button className={this.isActive(5)} onClick={() => this.handleStep(5)}>5</button>
                    <button className={this.isActive(10)} onClick={() => this.handleStep(10)}>10</button>
                    <button className={this.isActive(15)} onClick={() => this.handleStep(15)}>15</button>
                </div>
                <div>
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>

                <hr></hr>

                <h1>{this.state.counterNew}</h1>
                <div>
                    <h2>STEPS</h2>
                    <button className={this.isActive(5)} onClick={() => this.handleStep(5)}>5</button>
                    <button className={this.isActive(10)} onClick={() => this.handleStep(10)}>10</button>
                    <button className={this.isActive(15)} onClick={() => this.handleStep(15)}>15</button>

                    <h2>MAX VALUE</h2>
                    <button className={this.isActiveMax(15)} onClick={() => this.handleMax(15)}>15</button>
                    <button className={this.isActiveMax(100)} onClick={() => this.handleMax(100)}>100</button>
                    <button className={this.isActiveMax(200)} onClick={() => this.handleMax(200)}>200</button>
                </div>
                <div>
                    <button onClick={this.handleInc}>Increment</button>
                    <button onClick={this.handleDec}>Decrement</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </>
        )
    }
    isActive = (value) => {
        return value == this.state.step ? 'active' : 'default'
    }
    isActiveMax = (value) => {
        return value == this.state.max ? 'active' : 'default'
    }
    handleStep = (val) => {
        this.setState({
            step: val
        })
    }
    handleIncrement = () => {
        if (this.state.step == null) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
        else {
            this.setState({
                counter: this.state.counter + this.state.step
            })
        }
    }
    handleDecrement = () => {
        if (this.state.step == null) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
        else {
            this.setState({
                counter: this.state.counter - this.state.step
            })
        }
    }
    handleReset = () => {
        this.setState({
            counter: 0,
            step: null
        })
    }

    handleMax = (val) => {
        this.setState({
            max: val
        })
    }
    handleInc = () => {
        if (this.state.step == null) {
            this.setState({
                counterNew: this.state.counterNew + 1
            })
        }
        else {
            this.setState({
                counterNew: ((this.state.counterNew + this.state.step) < this.state.max) ? (this.state.counterNew + this.state.step) : this.state.counterNew
            })
        }
    }
    handleDec = () => {
        if (this.state.step == null) {
            this.setState({
                counterNew: this.state.counterNew - 1
            })
        }
        else {
            this.setState({
                counterNew: this.state.counterNew - this.state.step
            })
        }
    }
    handleReset = () => {
        this.setState({
            counter: 0,
            counterNew: 0,
            step: null,
            max: null
        })
    }
}


export default App;