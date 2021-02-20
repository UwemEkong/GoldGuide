import React, { useState } from 'react';

const ResourceCard = ({ name, icon }) => {
    return(
        <div className="card col col-lg-3">
            <img className="card-img" src={icon} alt={`${name}-icon`}/>
            <h5 className="h5">{name}</h5>
        </div>
    )
}

export default ResourceCard;