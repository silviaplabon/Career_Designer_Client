import React from 'react';
import BrowseJobsShow from '../BrowseJobsShow/BrowseJobShow'
const BrowseJobs = () => {
//     <option value="IT Engineer 
//     Management
//     Digital & Creative
//  Accounting
// Sales & Marketing
// Writing & Translations
// Telecommunications
// Design & Art
const jobCategory=['IT Engineer','Management','Digital & Creative','Accounting','Sales & Marketing','Writing & Transactions','Telecommunications','Design & Art']
    return (
        <div className="container">
            <div className="row row-cols-4">
            {
                jobCategory.map(category=><BrowseJobsShow category={category}></BrowseJobsShow>)
            }
        </div> 
          </div>
    );
};

export default BrowseJobs;