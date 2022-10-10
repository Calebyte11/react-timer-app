import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function TimerLanding(props) {

    let className = 'TimerContainer';
    if(props.inDarkMode === false){
      className += '_light'
    }
    
  return (
    <div className= 'TimerLanding'>

        <div className={className}>
            <div className='containerHead'>
                <div>
                    <p>Title : </p>
                    <p className='timersub'> </p>
                </div>
                <div>
                    <p>Stoppage Time : </p>
                    <p className='timersub'></p>
                </div>
            </div>

            <div className='containerBody'>
            <section className="days" >
                <p className="timer_text">00</p>
                <span className="timer_words">DAYS</span>
            </section>
            <section className="hours">
                <p className="timer_text">: 00</p>
                <span className="timer_words">HOURS</span>
            </section>
            <section className="minutes">
                <p className="timer_text">: 00</p>
                <span className="timer_words">MINS</span>
            </section>
            <section className="seconds">
                <p className="timer_text">: 00</p>
                <span className="timer_words">SECS</span>
            </section>
            </div>

            <div className='containerEnd'>
                <button className='trashCan'>
                    <FontAwesomeIcon  icon={faTrashCan}/>
                </button>
                <button className='editPen'>
                    <FontAwesomeIcon  icon={faPenToSquare} />
                </button>
            </div>
        </div>
   
    </div>
  )
}

export default TimerLanding