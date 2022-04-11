import React from "react";

class ThirdStep extends React.Component {

    constructor(props) {
        super()

    }
    render() {
        let { gender } = this.props.state;
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
                            <div className="bg-box rounded-md px-4 py-2 mr-2 text-slate-700">
                                2
                            </div>
                            <span className="mr-16 text-blue-900">Message</span>
                            <div className="bg-primary  rounded-md px-4 py-2 mr-2 text-slate-700">
                                3
                            </div>
                            <span className="text-blue-900">Checkbox</span>
                        </div>
                        <hr className="my-5 w-10/12" />

                        <h4 className="text-gray-300 mt-8"> Step3/3</h4>
                        <h3 className="text-blue-900 text-4xl font-bold mb-8 mt-2">Checkbox</h3>
                        <div className="flex">
                            <label htmlFor="male" className={'border-2 px-28 py-12 mr-16 rounded text-6xl border-red-200'}>
                                🙍🏻‍♂️
                             </label>
                            <input type="radio" onChange={this.props.handleChange} name="gender" id="male" className="hidden"/>
                            <label
                                htmlFor="female"
                                className={'border-2 px-28 py-12 mr-16 rounded text-6xl border-red-200'}>
                                👩‍💼
                            </label>
                            <input type="radio" onChange={this.props.handleChange}  name="gender" id="female" className="hidden"/>
                        </div>
                        <hr className="my-8 w-10/12" />
                        <div className="text-right mr-20">
                            <button className="mr-10 text-xl" onClick={this.props.handleBack}>
                                Back
                        </button>
                            <button
                                className="bg-primary mt-8 text-white text-xs px-8 py-4 rounded-lg" onClick={this.props.handleSubmit}>
                                Submit
                        </button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default ThirdStep;