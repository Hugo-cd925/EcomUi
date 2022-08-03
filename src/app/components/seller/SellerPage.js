import {useEffect, useState} from 'react'
import { fetchUsers } from './SellerService';
const SellerPage = () => {

    const [users, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchUsers(setUsers, setApiError);
      }, []);

    return (
        <div>
            SellerPage
            <div>
               {users && users.map((user) => (
                <div>{user.FirstName}</div>
               ))}
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