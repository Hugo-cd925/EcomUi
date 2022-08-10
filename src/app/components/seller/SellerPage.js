import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers, fetchUserById } from './SellerService';
import Constants from '../../../ultil/Constants';
import React from 'react';

const SellerPage = () => {

    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchUserById(setUser, user.id, setApiError);
        // fetchUsers(setUser, setApiError);
    }, [user]);

    useEffect(() => {
        console.log(user)
    }, [user]);
    const Navigate = useNavigate();

        /**
         * @name HandleCreate
         * @Description Navigates users to specified route
         */
    const HandleCreate = () => {
        Navigate('/Seller/Post');
       
    };

    /**
     * @name handleProfile
     * @Description Navigates user to specified route
     */
    const handleProfile = (id) => {
        Navigate(`/Seller/Info/${id}`);
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
                    {user.firstName}
                  
                </div>
                <div>
                    <button
                        onClick={HandleCreate}
                    >Post Product</button>
                </div>


                <div>
                    {/* <button type='button' onClick={() =>
                    handleProfile(user.id)
                }
                >
                    Edit
                </button> */}
<button type='button' onClick={() => 
            handleProfile(user.id)
          }
            >
              Edit Info
            </button>

                 
                </div>

            </div>
        </>
    )
}

export default SellerPage   