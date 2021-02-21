import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ResourceMarker from "./ResourceMarker";
import resourceList from '../resources.json';

const resourcesJSON = resourceList.resourceList;

const ResultsMap = withScriptjs(withGoogleMap((props) =>{
  
  const markers= resourcesJSON.map(resource => <ResourceMarker
    key={resource.name}
    location = {{lat: resource.latLng.lat, lng:resource.latLng.lng }}
    services = {resource.services}
  />)

 
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  38.5913776787469, lng: -121.4821333 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default ResultsMap;


