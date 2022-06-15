import React , { useState}from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid} from 'uuid';

function TimerForm(props) {

  //===== THE FORM STATES=======
  const [userinputs, setuserinputs] = useState({
    title : props.timers.title || '',
    dateTime : props.timers.dateTime || '',
    id : props.timers.id || uuid()
  });

  // ========== INPUTS TAGS ARRS RENDERING ========
  const inputs = [
    {
      id : 1,
      type : 'text',
      label : 'Title :',
      placeholder : 'Enter the title...',
      name : 'title',
      autoFocus : true
    },
    {
      id : 2,
      type : 'datetime-local',
      label : 'Date & Time :',
      placeholder : '',
      name : 'dateTime',
      autoFocus : false
    }
  ];
  
  
  // ======= HANDLERS FOR USER INPUTS IN THE FORM =========
  const handleChange = (e) => {
    setuserinputs({
      ...userinputs, [e.target.name] : e.target.value
    })
    
    // console.log(userinputs);
  };

  //========== AND SUBMIT HANDLER =========
  const submitHandler = (e) => {

    props.saveClickHandler({
      title : userinputs.title,
      dateTime : userinputs.dateTime,
      id : userinputs.id
    })
  };

  //==== changes on the create or update button ======
  const submitBtn = props.createForm ?  <>
                                          <span>Create</span>
                                          <FontAwesomeIcon className='icons' icon={faFolderPlus }/>
                                        </>
                                        : 
                                        <>
                                          <span>Update</span>
                                          <FontAwesomeIcon className='icons' icon={faFolderOpen }/>
                                        </>


  // ======== RENDERING  OF JSX ============
  return (
    <div>
        <form className='timerForm' >
            {inputs.map( (input) => {
              return(
                <React.Fragment key={input.id}>
                  <label>{input.label}</label>
                  <input {...input} value ={userinputs[input.name]} onChange={handleChange} autoFocus={input.autoFocus} />
                </React.Fragment>
              )
              })
            }

            <div className='formButtons'>
              <button className='cancelBtn' onClick ={props.cancelClickHandler}>
                <>  
                  <span>Cancel</span>
                  <FontAwesomeIcon className='icons' icon={faX} />
                </>
              </button>
              <button className='saveBtn' onClick ={submitHandler} >
                {
                  submitBtn
            
                }
              </button>
            </div>

        </form>
    </div>
  )
}





export default TimerForm

