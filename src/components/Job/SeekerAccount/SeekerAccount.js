import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import JobApplier from '../JobApplier/JobApplier';
import JobProfile from '../JobProfile/JobProfile'

const SeekerAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [state, setState] = useState(false);
    const [profileData,setProfileData]=useState([])

    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/seeker_is_available?email=' + loggedInUser?.email,
        
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data, 'job seeker data')
                setProfileData(data);
                if (data.length > 0) {
                    setState(true);
                }
                else {
                    setState(false)
                }
            })
    }, [loggedInUser.email])

    return (
        <div>
            {
                state == true && <JobProfile profileData={profileData[0]}></JobProfile>
            }
            {
                state == false &&
                  <JobApplier></JobApplier>
            }


        </div>
    );
};

export default SeekerAccount;












