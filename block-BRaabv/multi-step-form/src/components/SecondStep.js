import React from "react";

class SecondStep extends React.Component {

    constructor(props) {
        super()

    }
    render() {
        let {message,choice} = this.props.state
        return (
            <>
                <section className="flex">
                    <div className="flex-33">
                        <img src="/images/test.jpeg" />
                    </div>
                    <form className="flex-65 ml-20 my-10 max-w-3xl">
                        <div className="flex items-center">
                            <div className="bg-box rounded-md px-4 py-2 mr-2 text-slate-700">
                                1
                            </div>
                            <span className="mr-16 text-blue-900">Sign Up</span>
                            <div className="bg-primary rounded-md px-4 py-2 mr-2 text-slate-700">
                                2
                            </div>
                            <span className="mr-16 text-blue-900">Message</span>
                            <div className="bg-box rounded-md px-4 py-2 mr-2 text-slate-700">
                                3
                            </div>
                            <span className="text-blue-900">Checkbox</span>
                        </div>
                        <hr className="my-5 w-10/12" />

                        <h4 className="text-gray-300 mt-8"> Step2/3</h4>
                        <h3 className="text-blue-900 text-4xl font-bold mb-8 mt-2">Message</h3>
                        <div>
                            <label htmlFor="message" className="block text-xs">Message</label>
                            <textarea className="border w-10/12 border-gray-300 text-2xl py-2 px-4 rounded-lg mt-1" type="text" name="message" rows="6" onChange={this.props.handleChange} value={message}></textarea>
                        </div>
                        <div className="my-5">
                            <input className="mr-4 default:ring-2" value="one" type="checkbox" name="choice" onChange={this.props.handleChange} /><span className="mr-10">The number one Choice</span>
                            <input className="mr-4" type="checkbox" value="two" name="choice" onChange={this.props.handleChange} /><span>The number two Choice</span>
                        </div>
                        <hr className="my-8 w-10/12" />

                        <div className="text-right mr-20">
                            <button className="mr-10 text-xl" onClick={this.props.handleBack} >
                                Back
                        </button>
                            <button
                                className="bg-primary mt-8 text-white text-xs px-8 py-4 rounded-lg" onClick={this.props.changeStep}>
                                Next Step
                        </button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default SecondStep;