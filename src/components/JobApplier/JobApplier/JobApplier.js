import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const JobApplier = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const jobData = {
            category: data.category,
            type: data.type,
            title: data.title,
            location: data.location,
            deadline: data.deadline
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
        <div className="mt-5" style={{ backgroundColor: '#212529' }}>
            <form onSubmit={handleSubmit(onSubmit)} className=" p-5 formStyle" >
                <div className="row d-flex">
                   
                    <div className="col-md-5 mt-2">
                        <label for="name text-white">Name</label>
                        <input name="name" id="name" className="form-control" defaultValue="" placeholder="Name" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="email text-white">Email</label>
                        <input name="email" id="email" className="form-control " placeholder="Job Location" defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="phone text-white">Phone</label>
                        <input name="phone" id="phone" className="form-control " defaultValue="" Placeholder="Job Type" ref={register} />
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="address text-white">Address</label>
                        <input name="address" type="address" id="Deadline" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-12">
                        <label className="category" className="text-white">What Position Are You Applying For</label>
                        <select ref={register} name="category ">
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
                        <label for="cv text-white">CV</label>
                        <input name="cv" type="cv" id="Deadline" className="form-control " defaultValue="" ref={register} />
                    </div>




                </div>
                <input type="submit" className="mt-3 btn " value="Save" style={{ backgroundColor: 'orange' }} />

            </form>


        </div>
    );
};

export default JobApplier;