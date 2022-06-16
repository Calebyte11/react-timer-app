import React , { useState } from 'react';
import TimerHeader from './TimerHeader';
import TimerFormToogle from './TimerFormToogle';
import TimerList from './TimerList';
import TimerForm from './TimerForm';


  

function TimerDashboard() {

  //======= ALL THE STATES ============
  const timerState = {
    title : '',
    dateTime : '',
    id : ''
  }

  const [toogledAdd, setToogledAdd] = useState({
      isAddFormOn : false
  });

  const [darkMode, setDarkMode] = useState(true)

  //========= DASHBOARD HANDLERS FOR FORMS AND TIMERS (creating,updating and deleting = CRUD) ==========
  const handleCreateFormSubmit = (timer) => {
      console.log('CREATE NEW TIMER!!!');

      addTimerLocalstorage(timer);

  };

  const handleEditFormSubmit = (updatetimer) => {
      console.log('UPDATE TIMER!!!');

      updateTimerLocalStorage(updatetimer);
      stateReturn();
  };

  const deleteClickHandler = (removedtimer, e) => {
    console.log('DELETE TIMER with id = ' + removedtimer.id);
    deleteTimerLocalStorage(removedtimer);
     
    stateReturn();
  };


  // =============== TOOGLE ACTIVITIES ============

    // == darkMode toogler ===
  const handleModeChange = (e) => {
    setDarkMode(!darkMode)
    console.log(darkMode);
  };

  const toogledAddHandler = (e) => {
    setToogledAdd({
      isAddFormOn : true
    });
    console.log('TOOGLED!!!');
  };
  const stateReturn = () => {
    setToogledAdd({
      isAddFormOn : false
    });
  };

  // ====== TOOGLE ADD FORM HANDLERS (functions handling save and cancel buttons ) ======
  const saveClick = (timer) => {
    stateReturn();
    //  e.preventDafaul
    console.log('SAVED');
    console.log(timer);

    handleCreateFormSubmit (timer);
  };

  const cancelClick = (e) => {

    stateReturn();
    console.log('CANCELED');
  };


  //=========== MY LOCAL STORAGE FOR CREATING,UPDATING AND DELETING ( C R U D )=========
  const  getTimerLocalStorage = () => {
    const timers = JSON.parse(localStorage.getItem('timers'));

    return timers === null ? [] : timers;
  };

  //===== creating and adding to local storage =======
  const addTimerLocalstorage = (timer) => {

    const timers = getTimerLocalStorage();

    localStorage.setItem('timers' ,JSON.stringify([...timers,timer]) );
  };

  //======= updating in local storage ========
  const updateTimerLocalStorage = (updatetimer) => {

    const timers = getTimerLocalStorage();

    localStorage.setItem('timers' , JSON.stringify(

      timers.map( (timer) => {

          if (timer.id === updatetimer.id) {

            return Object.assign({} , timer, updatetimer);
            
          } else {
            return timer
          }
      })
    ))
  };

  //======== deleting timer from local storage ===========
  const deleteTimerLocalStorage = (removedtimer) => {
    const timers = getTimerLocalStorage();

    localStorage.setItem('timers', JSON.stringify( timers.filter((timer) => timer.id !== removedtimer.id) ))
  }

  // ======== ARRAY OF TIMERS TO BE PASSED TO THE CHILD(timersList)=========
  let timersArr = getTimerLocalStorage();
  console.log(timersArr);

 

  //============== RENDERING JSX ( conditionally rendering the components to dashboard ) ============
  
  let className = 'dashboard';
  if(darkMode === false){
    className += '_dark'
  }
  
  if (toogledAdd.isAddFormOn) {
    
    return (
      <div className={className} >
        <TimerHeader inDarkMode = {darkMode} modeChangeHandler = {handleModeChange}/>
        <div className='toogledForm'>
          <TimerForm createForm ={true} timers = {timerState} saveClickHandler ={saveClick} cancelClickHandler ={cancelClick} />
        </div>
      </div>
    )
  } else {
    
    return ( 
      <div className={className} >
        <TimerHeader inDarkMode = {darkMode} modeChangeHandler = {handleModeChange} />
        <TimerList inDarkMode = {darkMode} timersArr = {timersArr} onDeleteClick = {deleteClickHandler} onEditFormSubmit = {handleEditFormSubmit} />
        <TimerFormToogle inDarkMode = {darkMode} toogledAdd= {toogledAddHandler}/>
      </div>
    )  
  }

  
};


export default TimerDashboard
