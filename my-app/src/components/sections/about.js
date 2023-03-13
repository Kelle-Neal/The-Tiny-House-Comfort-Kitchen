import React from 'react'
import AboutUsPic from '../../img/aboutUs.png';

function AboutUs() {
  return (
    <>
      <div id="aboutUs">
        <img
          alt="logo over a table of food"
          src={ AboutUsPic }
          // width="auto"
          className= 'img-responsive'
          // position= 'center'
          width= '100%'
        />  
      </div>
    </>
  );    
}

export default AboutUs;