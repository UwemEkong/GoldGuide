import React, { useState, useRef } from "react";
import ResourceCard from '../components/ResourceCard'
import {familyStatus} from './FamilyStatus'

const SelfOrFamily = (props) =>{

    const [selected, setSelected] = useState([])


    const updateSelected = (val) => {
        let i = selected.indexOf(val)
        // if val is alread in the array, remove it
        if(i > -1){
            setSelected((selected) => selected.filter(s => s !== val))
        } 
        // else add it to the array of selected values
        else {
            setSelected((selected) => [...selected, val])
        }
    }
    return(
        <div className="pt-5 px-5 step-container">
        <h3>Who do you need resources for?</h3>
        <div className="row d-flex justify-content-center">
        {familyStatus.map((type) => {
        return ( <ResourceCard
        name={type.name} 
        icon={type.icon} 
        value={type.value} 
        key={type.value} 
        onSelect={updateSelected}/>  
        )
    })}
    </div>
 </div>
 )
  
};

export default SelfOrFamily;