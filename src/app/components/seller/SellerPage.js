import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from './SellerService';
import Constants from '../../../ultil/Constants';
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SellerPage = () => {

    //const [user, setUser] = useAtom(googleUser);

    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);
    // console.log(window.sessionStorage.getItem("loggedIn"));

    //store local storage after user logs in to use to updates
    //googleUser or context api
    const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

    useEffect(() => {

        getUserByEmail(googleUser?.email, setUser, setApiError);

        //fetchUserById(setUser, googleUser., setApiError);
        // getGoogleUser(setUser);
        // fetchUsers(setUser, setApiError);
    }, [user]);

    const Navigate = useNavigate();

    /**
     * @name HandleCreate
     * @Description Navigates users to specified route
     */
    const HandleCreate = () => {
        Navigate('/Seller/Post');
        //{googleUser.firstName + ' ' + googleUser.lastName}
        //console.log(window.sessionStorage.getItem("loggedIn"));
        //console.log(window.sessionStorage.getItem("user"));


    };
    
    /**
      * @name handleProfile
      * @Description Navigates user to specified route
      */
    const handleProfile = (id) => {
        Navigate(`/Seller/Edit/${id}`);
    };

    return (
        <>
          
                {apiError && (
                    <p data-testid="errMsg">
                        {Constants.API_ERROR}
                    </p>
                )}

                <div>
                    SellerPage
                    <div>
                        {/* {user && user.map((obj) => (
                <div>{obj.FirstName}</div>
               ))} */}
                        Info:
                        {user?.firstName}

                    </div>
                    <div>
                        <Button onClick={HandleCreate}>Create Product</Button>
                        <button
                            onClick={HandleCreate}
                        >Post Product</button>
                    </div>

                    <div>
                        <Button type='button' onClick={() =>
                           handleProfile(user.id)
                        }>Edit Profile</Button>

                    </div>

                </div>
        
        </>
    )
}

export default SellerPage;