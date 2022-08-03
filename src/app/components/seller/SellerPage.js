import {useEffect, useState} from 'react'
import { fetchUsers } from './SellerService';
const SellerPage = () => {

    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchUsers(setUser, setApiError);
      }, []);
    
    return (
        <div>
            SellerPage
            <div>
                {user.FirstName}
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