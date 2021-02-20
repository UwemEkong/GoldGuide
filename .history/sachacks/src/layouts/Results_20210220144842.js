import React, {useState} from 'react';
import LoadingBars from ''

const Results = () => {
    const [isLoading, setIsLoading] = useState(true)
    return(
        <>
        {isLoading ? <div>Loading</div> : <h1>Results</h1>}
        </>
    )
}

export default Results;