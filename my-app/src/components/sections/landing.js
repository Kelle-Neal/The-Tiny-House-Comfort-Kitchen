import React from 'react'
import logo from '../../img/logoWhite.png';
import Parent from './parent'
// import useWindowDimensions from '../helper';

function LandingPage() {
  // const { width: windowWidth } = useWindowDimensions()

	return (
    <>
      <Parent>
        <div>
          <img src={logo} alt="logo"
          style={{
            position: 'center',
            height: 800,
            width: 800,
            padding: 50,
          }}></img>
        </div>
      </Parent>
    </>  
	);
}


export default LandingPage;