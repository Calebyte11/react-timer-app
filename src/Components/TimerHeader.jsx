import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class TimerHeader extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Timer</h1>
        <button className='hamburgMenu'>
        <FontAwesomeIcon icon= {faBars} />
        </button>
      </div>
    )
  }
}

export default TimerHeader