import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


function TimerMain(props) {

    const timersEls = props.timersEls
    //   console.log(timersEls);

    let className = "TimerContainer";
    if (props.inDarkMode) {
        className = "TimerContainer"
    } else {
        className += '_light'
    }

    return (
        <div className={className}>

            <div className='containerHead'>
                <div>
                    <p>Title : </p>
                    <p className='timersub'>{props.timers.title} </p>
                </div>
                <div>
                    <p>Stoppage Time : </p>
                    <p className='timersub'>{props.timers.dateTime} </p>
                </div>
            </div>

            <div className='containerBody'>
            <section className="days" >
                <p className="timer_text"> {timersEls.daysEl} </p>
                <span className="timer_words">DAYS</span>
            </section>
            <section className="hours">
                <p className="timer_text">: {timersEls.hoursEl}</p>
                <span className="timer_words">HOURS</span>
            </section>
            <section className="minutes">
                <p className="timer_text">: {timersEls.minutesEl}</p>
                <span className="timer_words">MINS</span>
            </section>
            <section className="seconds">
                <p className="timer_text">: {timersEls.secondsEl}</p>
                <span className="timer_words">SECS</span>
            </section>
            </div>

            <div className='containerEnd'>
                <button className='trashCan' onClick={props.deleteClick} >
                    <FontAwesomeIcon  icon={faTrashCan}/>
                </button>
                <button className='editPen' onClick={props.editClick}>
                    <FontAwesomeIcon  icon={faPenToSquare} />
                </button>
            </div>
        
        </div>
    )
    
}

export default TimerMain

// class TimerMain extends Component {
    

   


//   render() {
//       

        
//   }
// }

// export default TimerMain