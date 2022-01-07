import React from 'react'
class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQue: null
        }
    }

    render() {
        console.log(this.props)
        return (
            <>
                <button onClick={() => this.handleClick(this.props.index)}>
                    {this.props.question.Q}
                    <span>{this.state.activeQue === this.props.index ? (
                        <i className="fas fa-hand-point-down"></i>
                    ) : (
                        <i className="fas fa-hand-point-up"></i>
                    )}</span>
                </button>

                <div className={this.state.activeQue === this.props.index  ?"accordion-content show":"hide"}>{this.props.question.A}</div>
            </>);
    }
    handleClick = (index) => {
        this.setState({
            activeQue: index
        })
    }
}

export default Accordian