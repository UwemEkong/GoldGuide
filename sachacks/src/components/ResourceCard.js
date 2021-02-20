import React, { useState } from 'react';

const ResourceCard = ({ name, icon }) => {
    return(
        <div>
            <img src={icon} alt={`${name}-icon`}/>
            <h3>{name}</h3>
        </div>
    )
}

export default ResourceCard;