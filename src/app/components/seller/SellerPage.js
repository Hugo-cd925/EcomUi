import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers, fetchUserById } from './SellerService';
import Constants from '../../../ultil/Constants';

const SellerPage = () => {

    const [users, setUsers] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        // fetchUserById(setUsers, 7, setApiError);
        fetchUsers(setUsers, setApiError);
    }, []);

    useEffect(() => {
        console.log(users)
    }, []);
    const Navigate = useNavigate();

    const HandleCreate = () => {
        Navigate('/Seller/Post');
    };

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
                    {/* {users && users.map((user) => (
                <div>{user.FirstName}</div>
               ))} */}
                    {users.FirstName}
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