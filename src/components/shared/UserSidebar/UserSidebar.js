import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faGripHorizontal, faUserPlus, faPlus, faTools } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import './UserSidebar.css'

const UserSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 col-sm-12 col-xs-12  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {/* <Link to="/admin_maker" className="nav-link text-white">Admin</Link>
                <Link to="/contact" className="nav-link text-white">Contact</Link> */}
                <li>

                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li>
                    <Link to="/browsejob" className=" nav-link text-white">Job</Link>

                </li>
                <li>
                    <Link to="/postajob" className="nav-link text-white " style={{ backgroundColor: 'orange', borderRadius: '0.70rem' }}>Post A Job</Link>

                </li>
                <li>
                    {(loggedInUser.email) ? <button onClick={() => setLoggedInUser({})} className="btn text-white  buttonStyleHeader   fw-bold mb-1  " style={{ color: 'white' }}>Logout</button> :
                        <Link to="/login" className="btn   text-white buttonStyleHeader buttonColor fw-bold">Login</Link>
                    }
                </li>

            </ul>
            <div>
                <Link to="/" className="text-white" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default UserSidebar;

