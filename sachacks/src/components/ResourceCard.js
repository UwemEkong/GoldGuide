import React, { useState } from 'react';

const ResourceCard = ({ name, icon, value, onSelect, forwardRef }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        console.log(isSelected)
        isSelected ? setIsSelected(false) : setIsSelected(true);
        onSelect(value)
    }

    return(
        <div className={isSelected ? "card-focused card" : "card"} id={value} onClick={handleClick}>
            <img className="card-img" src={icon} alt={`${name}-icon`}/>
            <span className="card-title">{name}</span>
        </div>
    )
}

export default ResourceCard;