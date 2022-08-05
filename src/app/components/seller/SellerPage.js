import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers, fetchUserById } from './SellerService';
import Constants from '../../../ultil/Constants';

const SellerPage = () => {

    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchUserById(setUser, 1, setApiError);
        // fetchUsers(setUser, setApiError);
    }, []);

    useEffect(() => {
        console.log(user)
    }, []);
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
    const handleProfile = () => {
        Navigate('/Seller/Info');
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
                    {user.firstName}
                    Seller Info displayed
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

                    <button
                        onClick={handleProfile}
                    >Edit Profile</button>
                </div>

            </div>
        </>
    )
}

export default SellerPage   