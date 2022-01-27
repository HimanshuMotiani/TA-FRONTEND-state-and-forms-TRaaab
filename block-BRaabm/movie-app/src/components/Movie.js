import data from '../data.json'
import React from 'react'
import Modal from './Modal'
class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            active:null
        }
    }

    handleClick = (index)=> {
     this.setState({
         active:index
     })
    }
    close = ()=>{
      this.setState({
          active:null
      })
    }
    isActive = ()=>{
        if (this.state.active || this.state.active === 0) return true;
    else return false;
    }
    render() {
        return (
            <>
            <div>
                {!this.isActive()?(
                <section className="p-10">
                    <article className="flex flex-wrap">
                        {
                            data.map((list,index) => (
                                <div className="flex-20 border border-black-600 my-5 text-center mr-2">
                                    <img className="w-full  h-auto" src={list.Images[0]} />
                                    <h2 className="text-2xl my-3 text-secondary">{list.Title}</h2>
                                    <h3 className="text-2xl text-tertiary">{list.Released}</h3>
                                    <button onClick={()=>{this.handleClick(index)}}>More Info</button>
                                </div>
                            ))
                        }
                    </article>
                </section>
                ):(
                <div className="p-8">
                <div className="border border-red-800 relative p-4">
                <button className="absolute top-0 right-0 mr-1" onClick={this.close}>X</button>
                <Modal key={this.state.active} activeIndex={this.state.active}/>
                </div>
                </div>
                )}
                </div>
            </>
        )
    }
}
export default Movie