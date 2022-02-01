import React from 'react'
class RegisterForm extends React.Component {

    constructor(props) {
        super()
        this.state = {
            address: "",
            pin: "",
            city: "",
            country: "",
            address1:"",
            show: false
        }
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    handleCheckbox = (event) => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <>
                <div className="bg-blue-200 h-screen">
                    <div className="max-w-screen-xl">
                        <h1 className="text-center text-6xl">Controlled Components</h1>
                        <div className="container flex">
                            <section className="flex-45">
                                <div className="p-8 border-4 border-red-300">
                                    <h2 className="text-4xl text-green-500 mb-3">Shipping Address</h2>
                                    <form onSubmit={this.handleSubmit} className="text-2xl">
                                        <div className="mb-4">
                                            <label htmlFor="address" className="block text-3xl">Address</label>
                                            <input type="text" className="w-11/12" name="address" onChange={this.handleInput} id="address" value={this.state.address} placeholder="Enter Address" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="pin" className="block text-3xl">Postal Code</label>
                                            <input type="number" className="w-11/12" name="pin" onChange={this.handleInput} value={this.state.pin} placeholder="Enter Pin" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="city" className="block text-3xl">City</label>
                                            <input type="text" className="w-11/12" name="city" onChange={this.handleInput} value={this.state.city} placeholder="Enter City" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="country" className="block text-3xl">Country</label>
                                            <input type="text" className="w-11/12" name="country" onChange={this.handleInput} value={this.state.country} placeholder="Enter Country" />
                                        </div>
                                    </form>
                                </div>
                            </section>
                            <section className="flex-45">
                                <div className="p-8 border-4 border-red-300">
                                    <h2 className="text-4xl text-green-500 mb-3">Billing Address</h2>
                                    <input type="checkbox" onChange={this.handleCheckbox} /><span className="text-green-500">Same as billing address</span>
                                    <form onSubmit={this.handleSubmit} className="text-2xl">
                                        <div className="mb-4">
                                            <label htmlFor="address" className="block text-3xl">Address</label>
                                            <input type="text" className="w-11/12" name="address" onChange={this.handleInput} id="address" value={this.state.show?this.state.address:""} placeholder="Enter Address" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="pin" className="block text-3xl">Postal Code</label>
                                            <input type="number" className="w-11/12" name="pin" onChange={this.handleInput} value={this.state.show?this.state.pin:""} placeholder="Enter Pin" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="city" className="block text-3xl">City</label>
                                            <input type="text" className="w-11/12" name="city" onChange={this.handleInput} value={this.state.show?this.state.city:""} placeholder="Enter City" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="country" className="block text-3xl">Country</label>
                                            <input type="text" className="w-11/12" name="country" onChange={this.handleInput} value={this.state.show?this.state.country:""} placeholder="Enter Country" />
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RegisterForm;