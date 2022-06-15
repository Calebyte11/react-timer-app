import React , { useState}from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons';
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
      required: true,
    },
    {
      id : 2,
      type : 'datetime-local',
      label : 'Date & Time :',
      placeholder : ' ',
      name : 'dateTime',
      required: true,
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
    // console.log(userinputs);

    props.saveClickHandler({
      title : userinputs.title,
      dateTime : userinputs.dateTime,
      id : userinputs.id
    })
  };

  //==== changes on the create or update button ======
  const submitText = props.submitText;

  return (
    <div>
        <form className='timerForm' >
            {inputs.map( (input) => {
              return(
                <div key={input.id}>
                  <label>{input.label}</label>
                  <input key={input.id} {...input} value ={userinputs[input.name]} onChange={handleChange}/>
                </div>
              )
              })
            }
            <div className='formButtons'>
              <button className='cancelBtn' onClick ={props.cancelClickHandler}>
                <div>  
                  <span>Cancel</span>
                  <FontAwesomeIcon className='icons' icon={faX} />
                </div>
              </button>
              <button className='saveBtn' onClick ={submitHandler} >
                {submitText}
              </button>
            </div>

        </form>
    </div>
  )
}





export default TimerForm

