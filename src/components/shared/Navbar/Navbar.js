import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../../App';
  

  
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)
    return (
      <div className="" style={{backgroundColor:'#0A1215'}}>
        <nav className="navbar navbar-expand-sm navbar-light   navbarDesign container pt-5">
          <div className="container-fluid ">
            <h1 className="navbar-brand h2HeaderColor fw-bold text-white" href="#">SILVIA</h1>
            <button className="navbar-toggler text-white" style={{backgroundColor:'#eaf2f5'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav text-white">
                <Link to="/" className="nav-link text-white">Home</Link>
                {/* <Link to="/browsejob"  className=" nav-link text-white">Job</Link> */}
                
                {loggedInUser.admin==true && <Link to="/candidator" className="nav-link text-white">Admin</Link>}
                <Link to="/jobApplierProfile" className="nav-link text-white">Profile</Link>
                <Link to="/postajob" className="nav-link text-white " style={{backgroundColor:'orange',borderRadius:'0.70rem'}}>Post A Job</Link>
  
                            {(loggedInUser.email) ? <button onClick={()=>setLoggedInUser({})} className="btn text-white  buttonStyleHeader   fw-bold mb-1  " style={{ color: 'white' }}>Logout</button> :
                                <Link to="/login" className="btn   text-white buttonStyleHeader buttonColor fw-bold">Login</Link>
                            }
              </div>
            </div>
          </div>
        </nav>
        </div>
    );
};

export default Navbar;