import { useState } from 'react';

const SellerSignup = () => {

    const [user, setUser] = useState({});
    return (
        <div>
            <h1>User Profile</h1>
            <div>
                {/* {`Name: ${user.name !== undefined ? user.name : ''}`} */}
                <h2>
                    {user.FirstName + " " + user.LastName}
                </h2>
            </div>
        </div>
    )
}

export default SellerSignup