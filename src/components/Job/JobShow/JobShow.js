import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import CategoryImageShow from '../CategoryImageShow/CategoryImageShow';
import './JobShow.css'

const JobShow = ({ job }) => {
  const { category, type, title, location, deadline, status, _id } = job;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const ApplyForAJob = (emai, job) => {
    const jobData = {
      email:emai,
      ...job
  };
  
    fetch('https://rocky-basin-25437.herokuapp.com/ApplyForAJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('welcome')
        }
      })
  }


  return (
    <>  {
      status == "Approved" && <div className="card mb-3 cardJob"  >
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <CategoryImageShow category={category}></CategoryImageShow>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{location}</p>
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary btnFont me-1">{type}</button>
                <button className="btn btn-danger btnFont" onClick={() => ApplyForAJob(loggedInUser.email, job)}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    </>

  );
};

export default JobShow;