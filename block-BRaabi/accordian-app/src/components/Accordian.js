import React from 'react'
class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQue: null
        }
    }

    render() {
        let questions = [
            {
              Q: 'Who is it for?',
              A:
                'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
            },
            {
              Q: 'Does AltCampus help me get a job?',
              A:
                'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
            },
            {
              Q: 'How does the entire process work?',
              A: 'You can read about it here - How it works.',
            },
            {
              Q: 'Is this course self-paced or batched?',
              A:
                'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
            },
          ];

        return (
            <>
            {questions.map((item,index)=>(
                <article>
                <button onClick={() => this.handleClick(index)}>
                    {item.Q}
                    <span>{this.state.activeQue === index ? 
                        <i className="fas fa-hand-point-down"></i>
                     : 
                        <i className="fas fa-hand-point-up"></i>
                    }</span>
                </button>
   
                <div className={this.state.activeQue === index  ?"accordion-content show":"hide"}>{item.A}</div>
                </article>
            ))}
        </>);
    }
    handleClick = (index) => {
        if(this.state.activeQue === index){
            this.setState({
                activeQue: null
            })
        }
        else{
        this.setState({
            activeQue: index
        })
    }
    }
}
export default Accordian