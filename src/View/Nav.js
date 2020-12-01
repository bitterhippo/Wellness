import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <a href='/'>
        <img src="WellnessLogo.png" />
      </a>
      <ul className="nav-links">
        <Link to="/concerns">
          <li>Health Concerns</li>
        </Link>
        <Link to="/service">
          <li>Our Services</li>
        </Link>
        <Link to="/difference">
          <li>Book Appointment</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
