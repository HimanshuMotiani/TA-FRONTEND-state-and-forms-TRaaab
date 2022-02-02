import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

class App extends React.Component {

    constructor(props) {
        super()
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            address: "",
            message: "",
            choice: "",
            gender: ""
        }
    }

    getStep = () => {
        let active = this.state.step;
        switch (active) {
            case 1:
                return (
                    <FirstStep 
                    changeStep={this.onChangeStep} 
                    state={this.state} 
                    handleChange={this.handleChange}  />
                )
            case 2:
                return (
                    <SecondStep 
                    changeStep={this.onChangeStep} 
                    handleBack={this.handleBack} 
                    state={this.state} 
                    handleChange={this.handleChange} />
                )
            case 3:
                return (
                    <ThirdStep 
                    changeStep={this.onChangeStep} 
                    handleSubmit={this.handleSubmit} 
                    handleBack={this.handleBack} 
                    state={this.state} 
                    handleChange={this.handleChange}/>
                )

        }
    }
    onChangeStep = (event) => {
        event.preventDefault();
            this.setState({
                step: this.state.step + 1
            })
    }
    handleBack = (event) => {
        event.preventDefault();
        this.setState({
            step: this.state.step - 1
        })
}
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("hii")
        console.log(`${this.state.firstName}--${this.state.lastName}--${this.state.dob}--${this.state.mail}--${this.state.address}--${this.state.message}--${this.state.choice}--${this.state.gender}`);
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
          [name]: value,
        });
    };

    render() {
        return (
            <>
                <div>{this.getStep()}</div>
            </>
        )
    }

}

export default App;