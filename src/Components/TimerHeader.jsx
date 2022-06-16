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
    let className = 'header'
    if(this.props.inDarkMode){
      className = 'header'
    } else {
      className +='_dark'
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

  // {
  //   padding: 0 0.7rem;
  //   margin-top: 0px;
  //   position: fixed;
  //   top: 0px;
  //   left: 0px;
  //   right: 0px;
  //   z-index: 99999;
  //   background-color: #171b1f;
  //   backdrop-filter: blur(100px);
  //   text-align: center;
  //   font-size: 13px;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-content: center;
  //   align-items: center;
  //   border-radius: 8px;
  //   border: 1px solid #a1a2a3;
  //   height: 50px;
  // }
  
}

export default TimerHeader