import React, { Component } from 'react';
import TimerContainer from './TimerContainer';
import TimerLanding from './TimerLanding';


class TimerList extends Component {

    
    

    render() {
        
        const timersArr = this.props.timersArr;

        const timersArrStr = JSON.stringify(timersArr)
       
        if (timersArrStr === '[]') {
            console.log('empty');

            // ===== conditional rendering landing page if Local Storage is empty(at first use) ===
            return (
                <TimerLanding/>
            )
            
        } else {
            return (
                <div className='TimerList'>
                    {
                        timersArr.map( (timers) => {
                           return <TimerContainer key ={timers.id} timers = {timers} onDeleteClick ={this.props.onDeleteClick} onEditFormSubmit = {this.props.onEditFormSubmit} />
                        })
                    }
                </div>

           )
        }

    }
}

export default TimerList