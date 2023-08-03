import React, { Component } from "react";
import './index.css'

class Clock extends Component {


    constructor(props){
    super(props)
    this.state={date:new Date()}
    }

    componentDidMount(){
        this.timerId=setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        console.log("jdasdnk");
        clearInterval(this.timerId);
        
    }
  


    tick =()=>{
        this.setState({date:new Date()})
    }



    render() {
        const {date}=this.state
        return (
            <div>
                <h1 className="clock">Clock</h1>
                <p className="time">{date.toLocaleTimeString()}</p>
            </div>

        )
    }

}

export default Clock