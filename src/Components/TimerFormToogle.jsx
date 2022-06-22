import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
function TimerFormToogle(props) {


  const handleAddClick = (e) => {
    props.toogledAdd();
    
    console.log('add timer form');
    // console.log(openState);
    // setOpenState({
    //   isFormOpen : true
    // });
    
  };

 

  let className = "TimerBtn";
  if (props.inDarkMode) {
      className = "TimerBtn"
  } else {
      className += '_light'
  }
    return (
      <div className='toogle' >
        <button className={className} onClick={handleAddClick}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
    )
  // }

}
export default TimerFormToogle