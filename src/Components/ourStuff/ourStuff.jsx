import React from 'react';
import OurStory from './ourStory/ourStory';
import OurStaff from './ourStaff/ourStaff';
import OurProviders from './ourProviders/ourProviders';
import Facilities from './ourFacilities/ourFacilities';


function OurStuff() {
  return(
    <div>
      <OurStory />
      <OurStaff />
      <Facilities />
      <OurProviders />
    </div>
  )
}

export default OurStuff;