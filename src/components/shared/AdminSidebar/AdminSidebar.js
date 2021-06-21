import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faHome, faGripHorizontal, faUserPlus, faPlus, faTools } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import './AdminSidebar.css'


const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 col-xs-12 col-xxl-2  py-5 px-4 ">
            <ul className="list-unstyled">
                {/* <Link to="/admin_maker" className="nav-link text-white">Admin</Link>
                <Link to="/contact" className="nav-link text-white">Contact</Link> */}
                <li>

                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li>
                    <Link to="/candidator" className=" nav-link text-white">Candidator</Link>
                </li>
                <li>
                    <Link to="/pendingajob" className="nav-link text-white " style={{ backgroundColor: 'orange', borderRadius: '0.70rem' }}>Pending Job</Link>
                </li>
                <li>
                    <Link to="/admin_maker" className="nav-link text-white " style={{ backgroundColor: 'orange', borderRadius: '0.70rem' }}>Admin Maker</Link>
                </li>
                <li>
                    {(loggedInUser.email) ? <button onClick={() => setLoggedInUser({})} className="btn text-white  buttonStyleHeader   fw-bold mb-1  " style={{ color: 'white' }}>Logout</button> :
                        <Link to="/login" className="btn   text-white buttonStyleHeader buttonColor fw-bold">Login</Link>
                    }
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;

