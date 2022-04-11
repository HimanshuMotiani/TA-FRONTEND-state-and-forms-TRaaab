import React from "react";

class FirstStep extends React.Component {

    constructor(props) {
        super()

    }
    render() {
        let { firstName, lastName, dob, email, address } = this.props.state;
        return (
            <>
                <section className="flex">
                    <div className="flex-33">
                        <img src="/images/test.jpeg" />
                    </div>
                    <form className="flex-65 ml-20 my-10 max-w-3xl">
                        <div className="flex items-center">
                            <div className="bg-primary rounded-md px-4 py-2 mr-2 text-white">
                                1
                            </div>
                            <span className="mr-16 text-blue-900">Sign Up</span>
                            <div className="bg-box rounded-md px-4 py-2 mr-2 text-slate-700">
                                2
                            </div>
                            <span className="mr-16 text-blue-900">Message</span>
                            <div className="bg-box rounded-md px-4 py-2 mr-2 text-slate-700">
                                3
                            </div>
                            <span className="text-blue-900">Checkbox</span>
                        </div>
                        <hr className="my-5 w-10/12" />

                        <h4 className="text-gray-300"> Step1/3</h4>
                        <h3 className="text-blue-900 text-4xl font-bold">Sign UP</h3>
                        <div className="flex my-4">
                            <div className="flex-48">
                                <label htmlFor="firstName" className="block text-xs">First Name</label>
                                <input className="border border-gray-300 text-2xl py-2 px-4 rounded-lg mt-1" type="text" name="firstName" onChange={this.props.handleChange} value={firstName} />
                            </div>
                            <div className="flex-48">
                                <label htmlFor="lastName" className="block text-xs">Last Name</label>
                                <input className="border border-gray-300 text-2xl py-2 px-4 rounded-lg mt-1" type="text" name="lastName" onChange={this.props.handleChange} value={lastName} />
                            </div>
                        </div>
                        <div className="flex my-4">
                            <div className="flex-48">
                                <label htmlFor="dob" className="block text-xs">Date of Birth</label>
                                <input className="border border-gray-300 text-2xl py-3 px-5 rounded-lg mt-1" type="date" name="dob" onChange={this.props.handleChange} value={dob} />
                            </div>
                            <div className="flex-48">
                                <label htmlFor="email" className="block text-xs">Email</label>
                                <input className="border border-gray-300 text-2xl py-2 px-4 rounded-lg mt-1" type="email" name="email" onChange={this.props.handleChange} value={email}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-xs">Address</label>
                            <input className="border w-10/12 border-gray-300 text-2xl py-2 px-4 rounded-lg mt-1" type="text" name="address" onChange={this.props.handleChange} value={address}/>
                        </div>
                        <hr className="my-8 w-10/12" />

                        <div className="text-right mr-20">
                            <button className="bg-primary mt-8 text-white text-xs px-8 py-4 rounded-lg" onClick={this.props.changeStep}>
                                Next Step
                            </button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default FirstStep;