import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../shared/Navbar/Navbar';
import AppliedJobShow from '../AppliedJobShow/AppliedJobShow';


const JobProfile = (props) => {
    const {name,about,skills,salary,category,status}=props.profileData;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [jobList,setJobList]=useState([]);
    
 
    useEffect(() => {
        fetch(`https://rocky-basin-25437.herokuapp.com/appliedJobList/${loggedInUser.email} `)
            .then(res => res.json())
            .then(data => {
                setJobList(data.reverse());
            })
    }, [])
    console.log(jobList);
    return (
        <div className="">
       <Navbar></Navbar>
       <div className="container mt-3">
        <div className="card h-100 bg-dark">
            <div className="card-body">
                <h5 className="text-white card-title" style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>Name: </span>{name}</h5>
                <p className="text-white card-text" style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>About: </span>{about}</p>
                <p className="text-white" style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>Skills: </span>{skills}</p>
                <div className="d-flex justify-content-between align-items-between">
                <p className="text-white card-text p-1" style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>Category:  </span>{category}</p>
                <p className="text-white  p-1" style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>Status:  </span>{status}</p>
                </div>
                <p className="text-white p-1 mt-3 " style={{border:'1px solid orange'}}><span className="" style={{color:'orange'}}>Skills: </span>{skills}</p>
            </div>
        </div>
        <h4 className="text-center fw-bold mt-5 mb-5"> Applied Jobs</h4>
        <div className="row row-cols-1 row-cols-md-2 ">

       
        {
            jobList.map(job=><AppliedJobShow job={job}></AppliedJobShow>)
        }
         </div>
            
    
         </div></div>
    );
};

export default JobProfile;