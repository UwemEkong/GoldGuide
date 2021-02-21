import React from "react";
import {Marker} from "react-google-maps";
import locationicon from '../assets/location.svg';

const ResourceMarker = (props) =>{
return(<Marker
    position={props.location}
    icon={locationicon}
    >
    </Marker>
);
};

export default ResourceMarker;