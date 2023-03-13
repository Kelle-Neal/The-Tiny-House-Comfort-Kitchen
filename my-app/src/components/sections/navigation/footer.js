import React from 'react';
import LocNav from '../../../img/locationHours.png';


function Footer() {
  return(
    <>
      <div id='LocNav'>
        <img
          alt="hours and location"
          src={ LocNav }
          // width="auto"
          className= 'img-responsive'
          // position= 'center'
          width= '100%'
        />  
      </div>
    </>
  );
}
export default Footer;