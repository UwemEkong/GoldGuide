import React, {useState} from 'react';
import LoadingBars from '../assets/loading-bars.svg';
import resourceList from '../resources.json';
import ResultCard from '../components/ResultCard';

const Results = () => {

    const [isLoading, setIsLoading] = useState(false)

    const resourcesJSON = resourceList.resourceList

    return(
        <>
        {isLoading ? <div className="loading">
            <div>
            <img className="mx-auto" src={LoadingBars}/> 
            </div>
            <h3>Finding Results for you</h3>
            </div> :         
            <div className="mt-5">
                <h3>Here's what we found:</h3>
                <div className="result-card-container col-lg-4">
                    {resourcesJSON.map((result) => <ResultCard name={result.name} services={result.services}></ResultCard>)}
                </div>
            </div>
        }
        </>

    )
}

export default Results;