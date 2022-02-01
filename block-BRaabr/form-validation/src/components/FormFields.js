import React from 'react'
class FormFields extends React.Component {

    constructor(props) {
        super()
        this.fileInput = React.createRef()
        this.state = {
            username: "",
            date:"",
            txtarea:""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.username, this.state.date, this.state.txtarea)
        alert(this.fileInput.current.files[0].name);
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <div className="bg-blue-200 h-screen">
                    <section className="max-w-screen-xl my-0 mx-auto">
                        <div>
                            <form onSubmit={this.handleSubmit} className="flex w-1/5 flex-col my-0 mx-auto text-2xl py-8">
                                <div className="mb-4">
                                    <label htmlFor="username" className="block">Text Input</label>
                                    <input type="text" name="username" onChange={this.handleInput} id="username" value={this.state.username} placeholder="Type Something" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="date" className="block">Date Input</label>
                                    <input type="date" name="date" onChange={this.handleInput} value={this.state.date} placeholder="Enter Date" />
                                </div>
                                <div className="mb-4">
                                    <label className="block">File Input</label>
                                    <input type="file" ref={this.fileInput} placeholder="Add File" />
                                </div>
                                <div className="mb-4">
                                    <label className="block">Read Only Input</label>
                                    <input type="text" name="readonly" readOnly={true} placeholder="This can only be copied" />
                                </div>
                                <div className="mb-4">
                                    <label className="block">Disabled Input</label>
                                    <input type="text" name="disInput" disabled={true} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="txtarea" className="block">Textarea Input</label>
                                    <textarea type="text" name="txtarea" onChange={this.handleInput} value={this.state.txtarea}></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block">Textarea Disabled</label>
                                    <textarea type="text" name="txtarea1" disabled={true}></textarea>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default FormFields;