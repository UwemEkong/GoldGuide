import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard'
import { resourceTypes } from './resourceTypes';


const Resources = () => {

    return(
        <div className="pt-5 px-5 step-container">
            <h1>What resources are you looking for?</h1>
            <h5 className="helper-text">(click all that apply)</h5>
            <div className="row d-flex justify-content-center">
                {resourceTypes.map((type) => {
                    return(<ResourceCard name={type.name} icon={type.icon}></ResourceCard>)
                })}
            </div>
        </div>
    )
}

export default Resources;