import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard'
import { resourceTypes } from './resourceTypes';


const Resources = () => {

    return(
        <div className="container-fluid">
            <h1>What resources are you looking for?</h1>
            <h5 className="helper-text">(click all that apply)</h5>
            <div className="container row col-lg-9 d-flex">
                {resourceTypes.map((type) => {
                    return(<ResourceCard name={type.name} icon={type.icon}></ResourceCard>)
                })}
            </div>
        </div>
    )
}

export default Resources;