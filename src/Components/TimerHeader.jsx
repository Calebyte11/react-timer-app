import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon } from '@fortawesome/free-solid-svg-icons';
import {faLightbulb } from '@fortawesome/free-solid-svg-icons';

class TimerHeader extends Component {
  
  handleModeChange = (e) => {
    console.log("oya change");
    this.props.modeChangeHandler();
  }

  render() {
    
    const icons = this.props.inDarkMode ? <FontAwesomeIcon icon= {faLightbulb} /> : <FontAwesomeIcon icon= {faMoon} />
    return (
      <div className='header'>
        <h1>Timer</h1>
        <button className='modeMenu' onClick= {this.handleModeChange} >
            {icons}
        </button>
      </div>
    )
  }
}

export default TimerHeader