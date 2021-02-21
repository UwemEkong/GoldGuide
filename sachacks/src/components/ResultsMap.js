import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config()
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const ResultsMap =({markers})=> {
    const center = {
      lat: 59.95,
      lng: 30.33
    }
    const zoom = 8
 
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyATuX5DSGFrvGclwvrvlZHsAzZ4DaoVSwM" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}
 
export default ResultsMap;