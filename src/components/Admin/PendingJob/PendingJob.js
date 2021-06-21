import React, { useEffect, useState } from 'react';
import JobShow from '../../Job/JobShow/JobShow';
import AdminSidebar from '../../shared/AdminSidebar/AdminSidebar';
import PendingJobShow from '../PendingJobShow/PendingJobShow';

const PendingJob = () => {
    const [pendingJob, setPendingJob] = useState([]);
    useEffect(() => {
        fetch(' https://rocky-basin-25437.herokuapp.com/ /pending_job_show')
            .then(res => res.json())
            .then(data => {
                setPendingJob(data.reverse());
            })
    }, [])
    console.log(pendingJob);


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
                        pendingJob.map((job, index) => <PendingJobShow job={job} index={index}></PendingJobShow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PendingJob;