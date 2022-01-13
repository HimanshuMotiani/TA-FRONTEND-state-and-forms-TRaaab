import React from 'react'
import Food from './Food'
class Tags extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            type:"All"
        }
    }

    render() {
        let types = ["All", "Breakfast", "Lunch", "Shakes"]
        return (
            <>
                <section>
                    <ul className="text-center mx-2.5 mb-10">
                        {
                            types.map(type => (
                                <li onClick={()=>this.handleClick(type)} className="inline-block mr-7 text-3xl textColor-secondary">{type}</li>
                            ))
                        }
                    </ul>
                </section>
                <Food key={this.state.type} type={this.state.type}/>

            </>
        )
    }
    handleClick = (type)=>{
        this.setState({
            type:type
        })
    }
}

export default Tags;