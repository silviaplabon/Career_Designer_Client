import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminSidebar from '../../shared/AdminSidebar/AdminSidebar';
import Navbar from '../../shared/Navbar/Navbar';




const AdminMaker = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = data => {
    const adminData = {
      email: data.email,
    };
    const url = `https://rocky-basin-25437.herokuapp.com/newAdminMaker`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => alert('Admin Entered Successfully'))
  };


  return (
  
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-1">

        </div>
        <div className="col-md-8" >
          <div className="row mt-5 justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className=" p-4 formStyle border-rounded" style={{ backgroundColor: '#212529',borderRadius:'0.70rem' }}>
             
              <label for="servicename" className="text-white">Email</label>
              <input name="email" type="email" id="servicename" className="form-control mb-1 " defaultValue="" ref={register} />
              {
                (loggedInUser.admin == true) && <input type="submit" className="mt-3 btn btn-primary" value="Save" />
              }
              <input type="submit" className="mt-3 btn btn-primary" value="Save" />
            </form>
          </div>
        </div>
        <div className="col-md-1">
          
          </div>
      </div>


  );
};

export default AdminMaker;