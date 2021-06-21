import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CategoryImageShow from '../CategoryImageShow/CategoryImageShow';

const AppliedJobShow = ({job}) => {
    const { category, type, title, location, deadline, status, _id } = job;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="card mb-3 cardJob"  >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppliedJobShow;