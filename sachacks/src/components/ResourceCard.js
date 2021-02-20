import React from 'react';

const ResourceCard = ({ name, icon, value, onSelect }) => {
    

    return(
        <div className="card" onClick={() => onSelect(value)}>
            <img className="card-img" src={icon} alt={`${name}-icon`}/>
            <h5 className="h5">{name}</h5>
        </div>
    )
}

export default ResourceCard;