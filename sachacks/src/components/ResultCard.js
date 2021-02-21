import React from 'react';
import housing from '../assets/building-map.svg';

const ResultCard = ({ name, services }) => {
   
    
    // const handleClick = () => {
    //     console.log(isSelected)
    //     isSelected ? setIsSelected(false) : setIsSelected(true);
    //     onSelect(value)
    // }

    return(
        <div className="card card-wide col-lg-12">
            <span className="card-title">{name}</span>
            {services.map((service) => 
               
                <span className={`badge badge-${service}`}>{service}</span>
            )}
        </div>
    )
}

export default ResultCard;