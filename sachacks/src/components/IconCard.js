import React, { useState } from 'react';

const IconCard = ({ name, icon, value, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        console.log(isSelected)
        isSelected ? setIsSelected(false) : setIsSelected(true);
        onSelect(value)
    }

    return(
        <div className={isSelected ? "card-focused card" : "card"} id={value} onClick={handleClick}>
            {icon ? 
            <>
            <img className="card-img" src={icon} alt={`${name}-icon`}/> 
            <span className="card-title">{name}</span>
            </>
            : <span className="card-title mb-0">{name}</span>}
  
        </div>
    )
}

export default IconCard;