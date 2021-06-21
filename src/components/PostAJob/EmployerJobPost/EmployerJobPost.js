import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Navbar from '../../shared/Navbar/Navbar';

import './EmployerJobPost.css'



const EmployerJobPost = (props) => {
    const { type, joblength } = props;
    const { register, handleSubmit, watch, errors } = useForm();
    const [state, setState] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const jobData = {
            category: data.category,
            type: data.type,
            title: data.title,
            location: data.location,
            deadline: data.deadline,
            status: 'Pending',
            poster: loggedInUser.email
        };
        console.log(jobData);
        {
            state == true && fetch('https://rocky-basin-25437.herokuapp.com/employer_adding_a_job', {
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
        {
            state == false && alert('Your account limit  for job post crossed up')
        }

    }


    useEffect(() => {
        if (type == "Basic" && joblength < 10) {
            setState(true)
        }
        else if (type == "Standard" && joblength < 20) {
            setState(true)
        }
        else if (type == "Premium" && joblength < 30) {
            setState(true)
        }
    }, [props])

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="mt-5 container" style={{ backgroundColor: '#212529', borderRadius: '0.70rem' }}>

                <form onSubmit={handleSubmit(onSubmit)} className=" p-5 formStyle" >
                    <div className="row d-flex">
                        <div className="col-md-12">
                            <label className="" className="text-white">Please Select a Job Category: </label>
                            <select ref={register} name="category" >
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
                        <div className="col-md-5 mt-2">
                            <label for="JobTitle text-white">Job Title</label>
                            <input name="title" id="jobTitle" className="form-control" defaultValue="" placeholder="Job Title" ref={register} />
                        </div>
                        <div className="col-md-5 mt-2">
                            <label for="JobLocation text-white">Job Location</label>
                            <input name="location" id="jobLocation" className="form-control " placeholder="Job Location" defaultValue="" ref={register} />
                        </div>
                        <div className="col-md-5 mt-2">
                            <label for="JobType text-white">Job Type</label>
                            <input name="type" id="jobType" className="form-control " defaultValue="" Placeholder="Job Type" ref={register} />
                        </div>
                        <div className="col-md-5 mt-2">
                            <label for="Deadline text-white">Deadline:</label>
                            <input name="deadline" type="date" id="Deadline" className="form-control " defaultValue="" ref={register} />
                        </div>


                    </div>
                    <input type="submit" className="mt-3 btn " value="Save" style={{ backgroundColor: 'orange' }} />

                </form>


            </div>
        </div>
    );
};

export default EmployerJobPost;



