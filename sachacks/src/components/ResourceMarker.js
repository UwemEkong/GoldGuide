import React from "react";
import {Marker} from "react-google-maps";

import locationicon from '../assets/location.svg';
import housing from '../assets/building-map.svg';
import education from '../assets/brain-map.svg';
import food from '../assets/food-map.svg';
import medicine from '../assets/medicine-map.svg';


const ResourceMarker = (props) =>{

    var iconType = "";

    if (props.services.includes("nutrition")) {
        iconType = food;
    } else if (props.services.includes("housing")) {
        iconType = housing;
    } else if (props.services.includes("education")) {
        iconType = education;
    } else if (props.services.includes("healthcare")) {
        iconType = medicine
    } 
return(<Marker
    position={props.location}
    value = {props.value}
    icon = {iconType}
    >
    </Marker>
);
};

export default ResourceMarker;