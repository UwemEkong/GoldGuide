import React, { useState, useRef } from 'react';
import IconCard from '../components/IconCard'
import { resourceTypes } from './resourceTypes';


const Resources = () => {
    
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
            <h3>What resources are you looking for?</h3>
            <h5 className="helper-text">(click all that apply)</h5>
            <div className="row d-flex justify-content-center">
                {resourceTypes.map((type) => {
                    return(
                        <IconCard 
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
}

export default Resources;