
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';


const UserIsAdmin = () => {    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(() => {
        fetch('https://rocky-basin-25437.herokuapp.com/userIsAdmin?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data)
                    if (data.length > 0) {
                        const user = { ...loggedInUser };
                        user.admin = true;
                        setLoggedInUser(user);
                    }

                }
                else {
                }
            })
    }, [loggedInUser.email])

    return (
        <div>
            {
                loggedInUser.admin==true &&<p>silvia</p>
            }
            
        </div>
    );
};

export default UserIsAdmin;