import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard'
import { resourceTypes } from './resourceTypes';


const Resources = () => {

    return(
        <div>
            <h1>What resources do you need?</h1>
            {resourceTypes.map((type) => {
                return(<ResourceCard name={type.name} icon={type.icon}></ResourceCard>)
            })}
        </div>
    )
}

export default Resources;