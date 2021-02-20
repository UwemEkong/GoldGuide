import React, {useState} from 'react';

const Results = () => {
    const [isLoading, setIsLoading] = useState(true)
    return(
        {isLoading ? <div>Loading</div>}
        
    )
}

export default Results;