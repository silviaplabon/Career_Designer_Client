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
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
               <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faTools} /> <span>Manage Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adminMaker" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                
            </ul>
            <div>
                <Link to="/" className="text-white" onClick={() => setLoggedInUser({})} ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;


// import React from 'react';
// import {Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'
// import './AdminSidebar.css'

// const AdminSidebar = () => {
//     return (
//         <>
//         <div className="col-md-12 col-sm-12 ">
//           <div className="m-auto  py-2 linkService">
//            <Link to="/orderList" className=""><FontAwesomeIcon className="iconSize me-2" icon={faBars} />Order List</Link>
//           </div>
//         </div>
//         <div className="col-md-12 col-sm-12  m-auto  py-3 linkService">
//           <Link to="/addService" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Add Service</Link>
//         </div>
//         <div className="col-md-12 col-sm-12 m-auto  py-3 linkService">
//           <Link to="/adminMaker" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Make Admin</Link>
//         </div>
//         <div className="col-md-12 col-sm-12 m-auto py-2 linkService">
//           <Link to="/manageService" className=""><FontAwesomeIcon className="iconSize me-2" icon={faEdit} />Manage Service</Link>
//         </div>
//         </>
//     );
// };

// export default AdminSidebar;