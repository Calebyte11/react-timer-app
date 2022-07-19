import React from 'react';
import TimerForm from './TimerForm';
import TimerMain from './TimerMain';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';


function TimerContainer(props) {

  const timers = props.timers;

  // ............ THE STATES ...............

  const [formopen, setformopen] = useState({
    isFormOpen : false
  })

  const [timingEls, settimingEls] = useState({
    daysEl : '00',
    hoursEl : '00',
    minutesEl : '00',
    secondsEl : '00'
  })

    
  // ======= THE SIDE EFFECTS (useEffect....).......
  useEffect ( (props) => {
    const interval = setInterval( () => countdownTimer(), 1000 );

    return () => {
      clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timingEls] )
  
  //=========== TimerContainer's click handlers (edit click and delete click) =============
  const editClickHandler = (e) => {
    setformopen({
        isFormOpen : true
    })
  };

  const deleteClickHandler = (e) => {
    console.log('DELETE ' + timers.id);
    props.onDeleteClick(timers);
  }


   // ==== functions handling  in the FORM (save and cancel buttons)======
  const saveClick = (updatetimer) => {
    setformopen({
        isFormOpen : false
    })
    console.log('SUBMIT');
    props.onEditFormSubmit(updatetimer);
    console.log(updatetimer);
  };

  const cancelClick = (e) => {
    setformopen({
        isFormOpen : false
    })
    console.log('CANCEL');
  };



   // ============ MAIN TIMING FUNCTION =========
  const countdownTimer = () => {
    
    const timers = props.timers
    const stoppageDate = new Date(timers.dateTime);
    
    if(stoppageDate ===  'null'){
        alert("Invalid Date !!! Please Enter Correct Date!!");
    };

    const currentDate = new Date();
    
    const totalSeconds = (stoppageDate - currentDate) / 1000;
        
    if (totalSeconds < 0) {
        
        console.log('Invalid Date !!! Please Enter Correct Date!!');
                

    } else if(totalSeconds > 0) {
            
      const days = Math.floor(totalSeconds / 3600 / 24 );
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) %60;

      const daysEls = formatTime(days);
      const hoursEls = formatTime(hours);
      const minutesEls = formatTime(minutes);
      const secondsEls = formatTime(seconds);
      
      settimingEls({
        daysEl : daysEls,
        hoursEl : hoursEls,
        minutesEl : minutesEls,
        secondsEl : secondsEls
      });

    };
      
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };


  //======================================= RENDERING =================================================================


  if (formopen.isFormOpen === true) {
    return <TimerForm inDarkMode = {props.inDarkMode} createForm = {false} timers = {props.timers} saveClickHandler ={saveClick} cancelClickHandler ={cancelClick}/>

  } else {
      return <TimerMain inDarkMode = {props.inDarkMode} timers ={props.timers} timersEls = {timingEls} deleteClick ={deleteClickHandler} editClick ={editClickHandler}/>
  }


};

export default TimerContainer
