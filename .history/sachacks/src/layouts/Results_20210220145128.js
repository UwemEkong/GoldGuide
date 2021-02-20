import React, {useState} from 'react';
import LoadingBars from '../assets/loading-bars.svg'

const Results = () => {
    const [isLoading, setIsLoading] = useState(true)
    return(
        <>
        {isLoading ? <div className="d-flex flex-direction-column justify-content-center">
            <div>

            </div>
            <h3>Finding Results for you</h3>
            </div> : <h1>Results</h1>}
        </>
    )
}

export default Results;