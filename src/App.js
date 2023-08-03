import React from 'react';
import { Component } from 'react';
import Clock from './Components/Clock'


class ClockApp extends Component {
    state={showClock:false}

    onToggle=()=>{
        this.setState(prevState=>{
            const {showClock}=prevState
            return{
                showClock:!showClock,
            }
        })
    }

    render() {
        const {showClock}=this.state
        return (
            <div className='container'>
                <div>
                    <button className="show-button" onClick={this.onToggle}>
                       {showClock? "Hide Clock" :'Show Clock'}
                        </button>
                    <div className="clock"></div>
                </div>
                {showClock && <Clock/>}
            </div>
           
        );
    }
};

export default ClockApp;
