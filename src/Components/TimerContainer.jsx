import React from 'react';
import TimerForm from './TimerForm';
import TimerMain from './TimerMain';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function TimerContainer(props) {
  
    const [formopen, setformopen] = useState({
      isFormOpen : false
    })

    const [timingEls, settimingEls] = useState({
      daysEl : '00',
      hoursEl : '00',
      minutesEl : '00',
      secondsEl : '00'
    })

    
  const timers = props.timers;
    
  
  
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



    //==== changing to the update button ======
  const submitText = <div>
                        <span>Update</span>
                        <FontAwesomeIcon className='icons' icon={faFolderOpen }/>
                      </div>

   // ============ MAIN TIMING FUNCTION =========
  const countdownTimer = (timers) => {
        
    const stoppageDate = new Date(timers.dateTime);
    
    if(stoppageDate ===  'null'){
        console.log("Invalid Date !!! Please Enter Correct Date!!");
    }

    //========== TIMER IN INTERVALS ================
    setInterval(() => {
        
        const currentDate = new Date();
        
        const totalSeconds = (stoppageDate - currentDate) / 1000;
        
        
        renderTimer(totalSeconds)
    }, 1000);

    function renderTimer (totalSeconds) {

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
          
          // console.log(daysEls, hoursEls, minutesEls, secondsEls);
          settimingEls({
              daysEl : daysEls,
              hoursEl : hoursEls,
              minutesEl : minutesEls,
              secondsEl : secondsEls
          })

      };
        
    };

  };
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  countdownTimer(timers);



  //======================================= RENDERING =================================================================

                
  // =========== RENDERING CONDITIONALLY ==========
  if (formopen.isFormOpen === true) {
    return <TimerForm timers ={props.timers} saveClickHandler ={saveClick} cancelClickHandler ={cancelClick} submitText ={submitText} />

  } else {
      return (
        <div>
          <TimerMain timers ={props.timers} timersEls = {timingEls} deleteClick ={deleteClickHandler} editClick ={editClickHandler}/>
        </div>
      )
  }


}

export default TimerContainer
