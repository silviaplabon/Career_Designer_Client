import React, { useEffect } from 'react';
import CategoryImageShow from '../../Job/CategoryImageShow/CategoryImageShow';



const PendingJobShow = (props) => {
  const index = props.index;
  const { category, type, title, location, deadline, status, _id } = props.job;
  const handleChange = e => {
    const bookDetails = {
      status: e.target.value
    };
   
    // {
    // (loggedInUser.admin == true && loggedInUser.role == "Administrator") &&

    fetch(` https://rocky-basin-25437.herokuapp.com/statusUpdate/job/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // alert('Job added to the home Page')
        }
      }) 
  }
  useEffect(()=>{
    {
      status=="Approved" && <>document.getElementsByClassName('jobShowAdmin')[index].style.display='none'</>
    }
  },[status=="Approved"])

  return (
    <div className="card mb-3 jobShowAdmin ms-1" >
      <div className="row g-0">
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <CategoryImageShow category={category}></CategoryImageShow>
        </div>
        <div className="col-md-9 ms-3">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{location}</p>

            <div className="d-flex justify-content-start">
              <button className="btn btn-primary me-1">{type}</button>
              <select name="status" onChange={handleChange} className=" ms-2 " style={{ backgroundColor: 'orange', borderRadius: '0.60rem' }}>
                {
                  status == "Pending" && <>
                    <option>Pending</option>
                    <option>Approved</option>
                  </>
                }
                {
                  status == "Approved" && <>
                    <option >Approved</option>
                    <option>Approved</option>
                  </>
                }


              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingJobShow;