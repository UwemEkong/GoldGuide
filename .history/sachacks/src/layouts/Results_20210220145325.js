import React, {useState} from 'react';
import LoadingBars from '../assets/loading-bars.svg'

const Results = () => {
    const [isLoading, setIsLoading] = useState(true)
    return(
        <>
        {isLoading ? <div className="d-flex flex-direction-column my-auto mx-auto">
            <div>
            <img className="mx-auto" src={LoadingBars}/> 
            </div>
            <h3>Finding Results for you</h3>
            </div> : <h1>Results</h1>}
        </>
    )
}

export default Results;