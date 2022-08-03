import {useEffect, useState} from 'react'
import { fetchUsers, fetchUserById } from './SellerService';
const SellerPage = () => {

    const [users, setUsers] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        // fetchUserById(setUsers, 7, setApiError);
        fetchUsers(setUsers, setApiError);
      }, []);
    useEffect(()=>{
        console.log(users)
    },[])
    return (
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
                Create Product
            </div>

            <div>
                Listed Products
            </div>
        </div>
    )
}

export default SellerPage