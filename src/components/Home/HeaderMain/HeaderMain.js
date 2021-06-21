import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SearchContext, UserContext } from '../../../App';
import './HeaderMain.css'

const HeaderMain = () => {

    const history=useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [searchValue,setSearchValue]=useContext(SearchContext);
    const [jobList, setJobList] = useState([]);

    const onSubmit = data => {
        const jobData = {
            category: data.category,
            title: data.title,
            location: data.location,
        };
        {
            jobData.category&& searchByJobData(jobData);
        }
    }
    const searchByJobData = (jobData) => {
        fetch(`https://rocky-basin-25437.herokuapp.com/searchJobData/${jobData.category}/${jobData.title}/${jobData.location}`)
            .then(res => res.json())
            .then(data => {
                setSearchValue(data);
            })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" p-5 formStyle headerMainSection">
            <div className="container headerContainer pb-2">
                <div className=" w-75 m-auto searchHeader mt-5  headermainDiv" >
                    <div className="row  text-white " style={{borderRadius:'0.70rem'}}>


                        <div className="col-md-4 col-lg-4 jobTitleHeader">

                            <input name="title" id="jobTitle" className="form-control " placeholder="Job Title" defaultValue="" ref={register} />
                        </div>
                        <div className="col-md-3 col-lg-3 locationHeader">

                            <input name="location" id="jobLocation" className="form-control " placeholder="location" defaultValue="" ref={register} />
                        </div>

                        <div className="col-md-3 col-lg-3 categoryHeader">

                            <select ref={register} name="category" className="form-select " style={{ color: 'black' }} >
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
                        <div className="col-md-2 col-lg-2 text-center ">
                            <input type="submit" className="mt-3 btn btn-success text-center" className="form-control" style={{backgroundColor:'orange'}} value="Search" />
                        </div>
                    </div>

                </div>




            </div>


        </form>




    );
};

export default HeaderMain;






