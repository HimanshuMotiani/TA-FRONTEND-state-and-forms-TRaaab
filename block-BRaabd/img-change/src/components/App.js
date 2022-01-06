import React from "react";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc:""
        }
    }
    render(){
    return (
        <>
        <div>
            <button onClick={()=>this.handleClick("basketball")}>Basketball</button>
            <button onClick={()=>this.handleClick("cricket")}>Cricket</button>
            <button onClick={()=>this.handleClick("laptop")}>Laptop</button>
            <button onClick={()=>this.handleClick("phone")}>Phone</button>
            <button onClick={()=>this.handleClick("pubg")}>Pubg</button>
            <button onClick={()=>this.handleClick("tiger")}>Tiger</button>
        </div>
        <div>
            <img src={'../assets/'+this.state.imgSrc+'.jpg'} alt="img" />
        </div>
        </>
    )
}

handleClick = (val)=>{
    this.setState({
        imgSrc:val
    })
}
}

export default App