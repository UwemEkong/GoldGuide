import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ResourceMarker from "./ResourceMarker";
import resourceList from '../resources.json';

const resourcesJSON = resourceList.resourceList;

const ResultsMap = withScriptjs(withGoogleMap((props) =>{
  
  const markers= resourcesJSON.map(resource => <ResourceMarker
    key={resource.name}
    location = {{lat: resource.latLng.lat, lng:resource.latLng.lng }}
  />)

 
  return (
      <GoogleMap
        defaultZoom={12}
        center={ { lat:  38.5913776787469, lng: -121.4821333 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default ResultsMap;



/*import GoogleMapReact from 'google-map-react';

require('dotenv').config()
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const ResultsMap =({markers})=> {
  console.log(markers)
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
 
export default ResultsMap;*/