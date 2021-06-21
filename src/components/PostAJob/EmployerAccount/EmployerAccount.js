import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import EmployerJobPost from '../EmployerJobPost/EmployerJobPost';
import EmployerAccountCreate from './EmployerAccountCreate';




const EmployerAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [jobList,setJobList] = useState([]);
    const [state, setState] = useState();
    let [employerType,setEmployerType]=useState('');
    let [jobpostLength,setJobPostLength]=useState(null);

    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/userIsEmployer?email='+loggedInUser?.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data,'employerdata')
                if (data.length > 0) {
                    setState(true);
                    setEmployerType(data[0].type);
                }
                else {
                    setState(false)
                }
            })
    }, [loggedInUser.email])

    useEffect(() => {
        fetch(' https://rocky-basin-25437.herokuapp.com/ /lengthOfEmployerJob?email='+loggedInUser?.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
               console.log(data.length,"line 48");
               setJobPostLength(data?.length);
            })
    }, [loggedInUser.email])

    return (
            <div className="" >
                {
                    state == true &&<EmployerJobPost type={employerType} joblength={jobpostLength}></EmployerJobPost>
                }
                {
                    state ==false &&

                    <div className="col-6">
                        <EmployerAccountCreate></EmployerAccountCreate>
                    </div>
                }

            </div>

    );
};

export default EmployerAccount;




