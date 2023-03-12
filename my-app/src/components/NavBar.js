import React from 'react';


function NavBar() {
  return (
    <div id="mainNavigation">
      
      <nav role="navigation">
        <div className="py-3 text-center border-bottom">
          {/* <img src="/logoWhite.png" alt="Restaurant Logo" className='img-thumbnail' /> */}
        </div>
      </nav>
      
      <div className="navbar-expand-md">
        
        <div className="navbar-dark text-center my-2">
          <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
          </button>
        </div>
        
        <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hours & Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Appetizers</a></li>
                <li><a className="dropdown-item" href="#">Breakfast</a></li>
                <li><a className="dropdown-item" href="#">Lunch</a></li>
                <li><a className="dropdown-item" href="#">Dinner</a></li>
                <li><a className="dropdown-item" href="#">Drinks</a></li>
                <li><a className="dropdown-item" href="#">Special</a></li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 

export default NavBar