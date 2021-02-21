import React, {useState} from 'react';
import housing from '../assets/building-map.svg';

const ResultCard = ({ name, services, onSelect, latLng }) => {
   
    const [isSelected, setIsSelected] = useState(false)
    
    const handleClick = () => {
        console.log(latLng)
        isSelected ? setIsSelected(false) : setIsSelected(true);
        onSelect(latLng)
    }

    return(
        <div className="card card-wide col-lg-12" onClick={handleClick}>
            <span className="card-title">{name}</span>
            {services.map((service) => 
               
                <span className={`badge badge-${service}`}>{service}</span>
            )}
        </div>
    )
}

export default ResultCard;