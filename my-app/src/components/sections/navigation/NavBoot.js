import React from "react";
import 


function NavBoot() {
  return(
    <>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand active" aria-current="page" href="#">The Little House Comfort Kitchen</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Hours & Location</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Breakfast</a></li>
                <li><a class="dropdown-item" href="#">Appetizers</a></li>
                <li><a class="dropdown-item" href="#">Lunch</a></li>
                <li><a class="dropdown-item" href="#">Dinner</a></li>
                <li><a class="dropdown-item" href="#">Drinks</a></li>
                <li><a class="dropdown-item" href="#">Specials</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </>
  );
}      

export default NavBoot;