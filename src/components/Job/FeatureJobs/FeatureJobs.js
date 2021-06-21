import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext, UserContext } from '../../../App';
import JobShow from '../JobShow/JobShow';
import ReactPaginate from "react-paginate";
import './FeatureJobs.css'

const FeatureJobs = () => {

    const [searchValue, setSearchValue] = useContext(SearchContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [jobList, setJobList] = useState([])
    const [filterJob, setFilterJob] = useState([]);
    const [searchAndFilter,setSearchAndFilter]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 25;
    const pagesVisited = pageNumber * jobsPerPage;
    let value;


    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/allJobList')
            .then(res => res.json())
            .then(data => {
                setJobList(data.reverse());
            })
    }, [])
    useEffect(() => {
        {
            searchValue[0]?.category &&
                fetch(`https://rocky-basin-25437.herokuapp.com/filterJobData/${searchValue[0].category}/${searchValue[0].title}/${searchValue[0].location}`)
                    .then(res => res.json())
                    .then(data => {
                        const  newData = searchValue.concat(data); 
                        setJobList(newData);
                    })
        }
    }, [searchValue?.length])
   
    let i = 0;
 
    const pageCount = Math.ceil(jobList.length / jobsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="container">
               
                    <div className="row row-cols-1 row-cols-md-2 mt-5 ">
                        {
                            jobList?.slice(pagesVisited, pagesVisited + jobsPerPage)
                            .map((job) => <JobShow job={job}></JobShow>)
                        }
                    </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    );
};

export default FeatureJobs;