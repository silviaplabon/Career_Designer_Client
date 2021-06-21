import React from 'react';
import CategoryImageShow from '../CategoryImageShow/CategoryImageShow';


const JobShow = ({job}) => {
    const {category,type,title,location,deadline,status}=job;
    return (
        <div className="card mb-3" style={{width:'48%',marginRight:'2%'}} >
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <CategoryImageShow category={category}></CategoryImageShow>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{location}</p>
            <div className="d-flex justify-content-start">
                <button className="btn btn-primary me-1">{type}</button>
                <button className="btn btn-danger">Apply Now</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobShow;