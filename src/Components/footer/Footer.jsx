import React from 'react';
import styles from './Footer.css';

function Footer() {
  return(
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* column 1 */}
          <img className='wellness-leaf' src='https://i.imgur.com/gSy0t8C.png' />
          <div className='column1'>
            <ul>
              <li className='first'>About</li>
              <li>Our Story</li>
              <li>Our Staff</li>
              <li>Our Facilities</li>
              <li>Our Providers</li>
              <li>Our Location</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className='column2'>
            <ul>
              <li className='first'>Health Concerns</li>
              <li>Neck Pain</li>
              <li>Shoulder Injury</li>
              <li>Back Pain</li>
              <li>Achilles Heel</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className='column3'>
            <ul>
              <li className='first'>Services</li>
              <li>Register Massage Therapy</li>
              <li>Accupuncture</li>
              <li>Orthotics</li>
              <li>Nutrition</li>
            </ul>
          </div>
          <div className='column4'>
            <ul>
              <li>905-303-0337</li>
              <li>INFO@PROEVOLUTIONWELLNESS.CA</li>
              <li>3905 Major MacKenzie Drive West Unit 116, Vaughan, ON L4H 4J9</li>
              <li>Follow us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;