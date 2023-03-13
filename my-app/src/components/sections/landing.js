import React from 'react'
import LandingPic from '../../img/landingPage.png';

function LandingPage() {
  return (
    <>
      <div id='home'>
        <img
          alt="logo over a table of food"
          src={ LandingPic }
          // width="auto"
          className= 'img-responsive'
          // position= 'center'
          width= '100%'
        />  
      </div>
    </>
  );    
}

export default LandingPage;