// create your App component here
import React, { useState, useEffect } from 'react';

function App(){
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then ((res) => res.json())
        .then ((data) => {
            setData(data);
            setLoaded(true);
        });
    }, [])
    
    
    return (
        <div>
            {loaded ? <img src={data.message} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}

export default App;