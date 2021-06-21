import React, { useEffect, useState } from 'react';
import CandidatorShow from '../CandidatorShow/CandidatorShow';

const Candidator = () => {
    const [profiler, setProfiler] = useState([])
    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/all_candidator_collection')
            .then(res => res.json())
            .then(data => {
                setProfiler(data.reverse());
            })
    })


    return (
        <div>
              {
                  profiler.map(profile=><CandidatorShow profile={profile}></CandidatorShow>)
              }
        </div>
    );
};

export default Candidator;