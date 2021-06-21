import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';

const JobProfile = (props) => {
    const {name,about,skills,salary,category,status}=props.profileData;
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
         </div></div>
    );
};

export default JobProfile;