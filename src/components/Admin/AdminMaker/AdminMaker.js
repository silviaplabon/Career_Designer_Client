import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';



const AdminMaker = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  const onSubmit = data => {
    const adminData = {
      email: data.email,
    };
    const url = `http://localhost:4200/newAdminMaker`;
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
    <div className="container "  style={{backgroundColor:'#212529'}}>
      <div className="row">
        <div className="col-md-8 justify-content-center align-items-center">

          <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle border-rounded">
            <label for="servicename">Email</label>
            <input name="email" type="email" id="servicename" className="form-control mb-1 " defaultValue="" ref={register} />
                        {
                          (loggedInUser.admin==true)&&<input type="submit" className="mt-3 btn btn-primary" value="Save" />
                        }
                        <input type="submit" className="mt-3 btn btn-primary" value="Save" />
          </form>
        </div>
      </div>
    </div>

  );
};

export default AdminMaker;