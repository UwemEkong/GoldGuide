import React, { useState } from 'react';
import LoadingBars from '../assets/loading-bars.svg';
import resourceList from '../resources.json';
import ResultCard from '../components/ResultCard';
import ResultsMap from '../components/ResultsMap';

const Results = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [center, setCenter] = useState({lat:  38.5913776787469, lng: -121.4821333})
    const handleMapCenter = (val) =>{
        setCenter(val)
    }
    const resourcesJSON = resourceList.resourceList

    return (
        <>
            {isLoading ? <div className="loading">
                <div>
                    <img className="mx-auto" src={LoadingBars} />
                </div>
                <h3>Finding Results for you</h3>
            </div> :
                <div className="mt-5">
                    <h3>Here's what we found:</h3>
                    <div className="d-flex align-items-center">
                        <div className="container result-card-container col-lg-4">
                            {resourcesJSON.map((result) => 
                            <ResultCard 
                            name={result.name} 
                            services={result.services} 
                            latLng={result.latLng} 
                            onSelect={handleMapCenter}/>)}
                        </div>
                        <ResultsMap
                            center={center}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyATuX5DSGFrvGclwvrvlZHsAzZ4DaoVSwM&v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `75vh`, width: `50%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            }
        </>

    )
}

export default Results;