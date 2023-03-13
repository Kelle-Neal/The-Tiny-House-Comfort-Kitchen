import React from 'react'
import EventsPic from '../../img/events.png';

function Events() {
  return (
    <>
      <div id="events">
        <img
          alt="logo over a table of food"
          src={ EventsPic }
          // width="auto"
          className= 'img-responsive'
          // position= 'center'
          width= '100%'
        />  
      </div>
    </>
  );    
}

export default Events;