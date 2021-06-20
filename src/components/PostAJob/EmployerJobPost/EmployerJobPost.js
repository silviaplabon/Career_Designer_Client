import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';



const EmployerJobPost = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);




    const onSubmit = data => {
        const jobData = {
            category:data.category,
            type:data.type,
            title: data.title,
            location:data.location,
            deadline:data.deadline
        };
        console.log(jobData)
        fetch('http://localhost:4200/employer_adding_a_job', {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 formStyle">
                <div className="row d-flex">
                    <div className="col-md-12">
                        <label className="">Please Select a Job Category: </label>
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
                        <label for="JobTitle">Job Title</label>
                        <input name="title" id="jobTitle" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="JobLocation">Job Location</label>
                        <input name="location" id="jobLocation" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="JobType">Job Type</label>
                        <input name="type" id="jobType" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="Deadline">Deadline:</label>
                        <input name="deadline" type="date" id="Deadline" className="form-control " defaultValue="" ref={register} />
                    </div>


                </div>
                <input type="submit" className="mt-3 btn btn-success" value="Save" />

            </form>


        </div>
    );
};

export default EmployerJobPost;



