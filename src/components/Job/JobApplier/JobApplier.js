import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Navbar from '../../shared/Navbar/Navbar';

const JobApplier = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const jobData = {
            name: data.name,
            email: data.email,
            photo:loggedInUser.photo,
            phone: data.phone,
            address: data.address,
            category: data.category,
            salary: data.salary,
            cv: data.cv,
            skills:data.skills,
            about: data.aboutdescription,
            status: data.employmentstatus,
        };
        console.log(jobData)
        fetch('https://rocky-basin-25437.herokuapp.com/adding_a_job_seeker_profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('welcome')
                }
            })
    }





    return (
        <div className="">
            <Navbar></Navbar>
       
        <div className="mt-5 container" style={{ backgroundColor: '#212529',borderRadius:'0.70rem' }}>

            <form onSubmit={handleSubmit(onSubmit)} className="formStyle p-2" style={{width:'90%',margin:'auto'}} >
                <div className="row d-flex">

                    <div className="col-md-6 mt-2">
                        <label for="name text-white">Name</label>
                        <input name="name" id="name" className="form-control" defaultValue={loggedInUser.displayName} placeholder="Name" ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="email text-white">Email</label>
                        <input name="email" id="email" className="form-control " placeholder="Email" defaultValue={loggedInUser.email} ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="phone text-white">Phone</label>
                        <input name="phone" id="phone"  className="form-control " defaultValue="" Placeholder="Phone" ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="address text-white">Address</label>
                        <input name="address" id="address" className="form-control " defaultValue="" placeholder="Address" ref={register} />
                    </div>
                    <div className="col-md-12">
                        <label className="category" className="text-white mt-4 me-2">What Position Are You Applying For: </label>
                        <select ref={register} name="category" defaultValue="IT Engineer">
                            <option value="IT Engineer">IT Engineer</option>
                            <option value="Management">Management</option>
                            <option value="Digital & Creative">Digital &Creative</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                            <option value="Writing & Translations">Writing & Translations</option>
                            <option value="Telecommunications">Telecommunication</option>
                            <option value="Design & Art">Design & Art</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="salary" className="text-white mt-4 me-2">Estimated Salary($): </label>
                        <select ref={register} name="salary" defaultValue="3000-4000">
                            <option value="5000-6000">500-600</option>
                            <option value="3000-4000">3000-4000</option>
                            <option value="7000-8000">7000-8000</option>
                            <option value="3000-3500">3000-3500</option>
                            <option value="2000-3000">2000-3000</option>
                            <option value="2500-3000">2500-3000</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="cv text-white">CV</label>
                        <input name="cv"  id="cv" className="form-control " defaultValue="" placeholder="CV Link" ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="skills text-white">Skills</label>
                        <input name="skills" id="skills" className="form-control " defaultValue="" placeholder="Skills You have" ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="aboutdescription text-white">About</label>
                        <input name="aboutdescription"  id="aboutdescription " className="form-control " defaultValue="" placeholder="Simply Say About You" ref={register} />
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="employmentstatus text-white">Employment Status</label>
                        <input name="employmentstatus"  id="employmentstatus " className="form-control " defaultValue="" placeholder="Currently Employment Status" ref={register} />
                    </div>
                </div>
                <input type="submit" className="mt-3 btn " value="Save" style={{ backgroundColor: 'orange' }} />

            </form>
            </div>
        </div>
    );
};

export default JobApplier;