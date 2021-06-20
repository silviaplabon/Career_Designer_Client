import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import EmployerJobPost from '../EmployerJobPost/EmployerJobPost';
import EmployerAccountCreate from './EmployerAccountCreate';




const EmployerAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [jobList,setJobList] = useState([]);
    const [state, setState] = useState();

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
                if (data.length > 0) {
                    setState(true)
                    alert(data)
                }
                else {
                    setState(false)
                }
            })
    }, [loggedInUser.email])

    return (
        <div className="container">
            <div className="m-auto row" style={{ width: '80%' }}>
                {
                    state == true &&<EmployerJobPost></EmployerJobPost>
                }
                {
                    state ==false &&

                    <div className="col-6">

                        <EmployerAccountCreate></EmployerAccountCreate>
                    </div>
                }

            </div>

        </div>
    );
};

export default EmployerAccount;




