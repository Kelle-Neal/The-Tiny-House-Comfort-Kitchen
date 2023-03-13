import React from 'react';
import NavHeader from './components/sections/navHeader.js';
import NavMenu from './components/sections/navMenu.js';
import LandingPage from './components/sections/landing.js';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <div className='container' id='app'>
        <NavHeader />
        <NavMenu />
        <LandingPage />
      </div>
    </>  
  );
}

export default App;
