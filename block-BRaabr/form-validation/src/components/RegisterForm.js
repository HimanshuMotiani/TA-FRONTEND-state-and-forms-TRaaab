import React from 'react'
class RegisterForm extends React.Component {

    constructor(props) {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.username, this.state.email, this.state.password,this.state.confirmPassword)

    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length < 3 ? "Enter username more than 3 characters" : "";
                break;
            case "email":
                errors.email = this.validateEmail(value) ?"": "Enter valid email";
                break;
            case "password":
                errors.password = value.length < 6 ? "Enter password more than 6 characters" : "";
                break;
            case "confirmPassword":
                errors.confirmPassword = value !== this.state.password ? "Enter same password" : "";
                break;
        }
        this.setState({
            [name]: value
        })
    }
    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    render() {
        let { username, email, password, confirmPassword } = this.state.errors;
        return (
            <>
                <div className="bg-blue-200 h-screen">
                    <section className="max-w-screen-xl my-0 mx-auto">
                        <div>
                            <form onSubmit={this.handleSubmit} className="flex w-1/5 flex-col my-0 mx-auto text-2xl py-8">
                                <div className="mb-4">
                                    <label htmlFor="username" className="block">Text Input</label>
                                    <input className={username?"error":""} type="text" name="username" onChange={this.handleInput} id="username" value={this.state.username} placeholder="Type Something" />
                                </div>
                                <span>{username}</span>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block">Email Input</label>
                                    <input type="email" className={email ?"error":""} name="email" onChange={this.handleInput} value={this.state.email} placeholder="Enter Email" />
                                </div>
                                <span>{email}</span>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block">Password</label>
                                    <input type="text" className={password?"error":""} name="password" onChange={this.handleInput} placeholder="Enter Password" />
                                </div>
                                <span>{password}</span>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                                    <input type="text" className={confirmPassword?"error":""} name="confirmPassword" onChange={this.handleInput} placeholder="Enter Confirm Password" />
                                </div>
                                <span>{confirmPassword}</span>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default RegisterForm;