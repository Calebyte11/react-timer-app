import React, { Component } from 'react';

import {BsBrightnessHighFill} from 'react-icons/bs'
import {BsFillMoonStarsFill} from 'react-icons/bs'

class TimerHeader extends Component {
  
  handleModeChange = (e) => {
    console.log("oya change");
    this.props.modeChangeHandler();
  }

  render() {
    
    const icons = this.props.inDarkMode ? < BsBrightnessHighFill /> : <BsFillMoonStarsFill />
    let className = 'header'
    if(this.props.inDarkMode){
      className = 'header'
    } else {
      className +='_light'
    }
    return (
      <div className={className}>
        <h1>Timer</h1>
        <button className='modeMenu' onClick= {this.handleModeChange} >
            {icons}
        </button>
      </div>
    )
  }

  
}

export default TimerHeader