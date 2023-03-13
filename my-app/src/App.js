import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavMenu from './components/sections/navigation/navMenu.js';
import LandingPage from './components/sections/landing.js';
import AboutUs from './components/sections/about.js';
import Events from './components/sections/events.js';
import Breakfast from './components/sections/menu/breakfast.js';
import Appetizers from './components/sections/menu/appetizers.js';
import Lunch from './components/sections/menu/lunch.js';
import Dinner from './components/sections/menu/dinner.js';
import Drinks from './components/sections/menu/drinks.js';
import Footer from './components/sections/navigation/footer.js';



function App() {
  return (
    <>
      <div className='container-fluid fixed-top pt-5' id="navBars">
          <NavMenu />
      </div>
      <div className='container-fluid'>  
        <LandingPage />
        <AboutUs />
        <Events />
        <Footer />
        <Breakfast />
        <Appetizers />
        <Lunch />
        <Dinner />
        <Drinks />
      </div>
    </>  
  );
}

export default App;
