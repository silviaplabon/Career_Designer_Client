import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
       
            <div className="container bg-transparent">
                <div className=" w-75 m-auto searchHeader mt-5" >
                    <div className="row bg-dark text-white ">
                        <div className="col-md-4 jobTitleHeader">
                            <p className="text-center " >Job Title skills or company</p>
                        </div>
                        <div className="col-md-3 locationHeader">
                            <p className="text-center ">location</p>
                        </div>
                        <div className="col-md-3 categoryHeader">
                            <p className="text-center ">Category</p>
                        </div>
                        <div className="col-md-2 bg-primary">
                            <p className="text-center">Search</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HeaderMain;