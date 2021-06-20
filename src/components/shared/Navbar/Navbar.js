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
    return (
      <div className="" style={{backgroundColor:'red'}}>
        <nav className="navbar navbar-expand-sm navbar-light   navbarDesign container pt-5">
          <div className="container-fluid ">
            <h1 className="navbar-brand h2HeaderColor fw-bold text-white" href="#">SILVIA</h1>
            <button className="navbar-toggler text-white" style={{backgroundColor:'#eaf2f5'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav text-white">
                <Link to="/" className="nav-link text-white">Home</Link>
                <Link to="/about"  className=" nav-link text-white">About</Link>
                <Link to="/blogs" className="nav-link text-white">Blogs</Link>
                <Link to="/contact" className="nav-link text-white">Contact</Link>
                <Link to="/postajob" className="nav-link text-white " style={{marginLeft:'150px'}}>Post A Job</Link>
  
                            {(loggedInUser.email) ? <button onClick={()=>setLoggedInUser({})} className="btn buttonColor   buttonStyleHeader  fw-bold mb-1  " style={{ color: 'white' }}>Logout</button> :
                                <Link to="/login" className="btn   buttonStyleHeader buttonColor fw-bold">Login</Link>
                            }

                <Link to="/postjob" className="nav-link text-white ms-5">Register</Link>
              </div>
            </div>
          </div>
        </nav>
        </div>
    );
};

export default Navbar;