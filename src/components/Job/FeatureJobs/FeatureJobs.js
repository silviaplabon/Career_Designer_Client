import React, { useContext, useEffect, useState } from 'react';
import { SearchContext, UserContext } from '../../../App';
import JobShow from '../JobShow/JobShow';

const FeatureJobs = ({ state }) => {
    const [searchValue, setSearchValue] = useContext(SearchContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [jobList, setJobList] = useState([])
    const [filterJob, setFilterJob] = useState([])
    let value;

    useEffect(() => {
        fetch(' http://localhost:4200/allJobList')
            .then(res => res.json())
            .then(data => {
                setJobList(data.reverse());
            })
    }, [])
    useEffect(() => {
        {
            searchValue[0]?.category &&
                fetch(`http://localhost:4200/filterJobData/${searchValue[0].category}/${searchValue[0].title}/${searchValue[0].location}`)
                    .then(res => res.json())
                    .then(data => {
                        setFilterJob(data);
                    })
        }
    }, [searchValue?.length])
   

    return (
        <>
            <div className="container">
                {
                    state == true &&
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 ">
                        {
                            jobList?.map(job => <JobShow job={job}></JobShow>)
                        }
                    </div>
                }
                {
                    (state == false && filterJob.length>0) &&
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 ">
                        {
                            searchValue?.map(job => <JobShow job={job}></JobShow>)
                        }
                        {
                            filterJob?.map(job => <JobShow job={job}></JobShow>)
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default FeatureJobs;