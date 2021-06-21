import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../shared/AdminSidebar/AdminSidebar';
import CandidateShow from '../CandidateShow/CandidateShow';

const Candidate = () => {
    const [profiler, setProfiler] = useState([])
    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/all_candidator_collection')
            .then(res => res.json())
            .then(data => {
                setProfiler(data.reverse());
            })
    })

    return (
        <div className="row">
            <div className="col-md-2">

                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 ms-2">
                <div className="row row-cols-1 row-cols-md-2 ">
                    {
                        profiler.map(profile => <CandidateShow profile={profile}></CandidateShow>)
                    }
                </div>
            </div>
            

        </div>
    )
}

export default Candidate;