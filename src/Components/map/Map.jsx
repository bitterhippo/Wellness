import React from 'react';
import GoogleMapReact from 'google-map-react';
//import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './map.css';

//<Icon icon={locationIcon} className="pin-icon" />

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className='map'>
      <h1>Our Location</h1>
    <div className='google-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;