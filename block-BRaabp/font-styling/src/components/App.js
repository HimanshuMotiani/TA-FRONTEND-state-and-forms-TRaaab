import React from "react"
import data from "../data.json";
class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            message: "Lorem test with fonts",
            fontSize: 24
        }
    }
    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleRange = (event) => {
        this.setState({
            fontSize: event.target.value
        })
    }
    render() {
        let fonts = [
            'Azeret Mono',
            'Glory',
            'Lato',
            'Montserrat',
            'Noto Sans',
            'Noto SansJP',
            'Open Sans',
            'Poppins',
            'Roboto',
            'Urbanist',
        ];
        return (
            <>
                <section className="max-w-screen-xl m-auto">
                    <div className="border border-blue-600 p-6 rounded-3xl text-3xl">
                        <div className="inline-block w-4/5">
                            <label>Custom <i className="fas fa-caret-down"></i></label>
                            <input className="w-3/5 focus:outline-none" onChange={this.handleChange} type="text" placeholder="Type Something" value={this.state.message} />
                        </div>
                        <div className="inline-block text-3xl">
                            <label>50 <i className="fas fa-caret-down"></i></label>
                            <input
                                onChange={this.handleRange}
                                className="rounded-l-xl p-2"
                                type="range"
                                value="16"
                            />
                        </div>
                    </div>
                    <ul className="flex justify-between flex-wrap px-20">
                        {fonts.map((font) => (
                            <li className="border-2 border-grey-200 rounded-xl p-4 mb-4" key={font}>
                                <h3 className="text-lg" style={{ fontFamily: 'Open Sans' }}>{font}</h3>
                                <h2 className="break-all mt-4" style={{ fontFamily: font,fontSize:this.state.fontSize+"px" }}>
                                    {this.state.message ? this.state.message : ''}
                                </h2>
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
}
export default App