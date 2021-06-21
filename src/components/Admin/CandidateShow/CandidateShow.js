import React from 'react';

const CandidateShow = ({ profile }) => {
    const { name, phone, about, category, salary, photo, skills,status } = profile;
    return (
        <div className="col mt-5">
            <div className="card h-100">
                <div className=" d-flex justify-content-between align-items-between h-25">
                    <img src={photo} className="card-img-top " alt="..." style={{ height: '50px', width: '50px' }} />
                    <button className=" btn-sm btn-danger" style={{ height: '30px', width: '110px' }} >{category}</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p >{about}</p>
                   <div className="d-flex justify-content-between align-items-between">
                       <button className="btn-primary">{status}</button>
                    
                   </div>
                </div>
                <div className="card-footer d-flex align-items-between justify-content-between">
                    <p className="card-text">{phone}</p>
                    <p>${salary}</p>
                </div>
            </div>
        </div>
    );
};

export default CandidateShow;