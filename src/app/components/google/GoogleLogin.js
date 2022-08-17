/* global google */
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import { loginUser} from '../seller/SellerService';

const GoogleLogin = ({ setLoggedIn }) => {
   /*global google*/
    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

      //useParam
    const handleCallbackResponse = (response) => {

        var userObject = jwt_decode(response.credential);

        const googleUser = {
          email: userObject.email,
          firstName: userObject.given_name,
          lastName: userObject.family_name,
          img: userObject.picture,
          role: 'Buyer'
        };
        window.sessionStorage.setItem("user", googleUser);
        setLoggedIn=(true);
        loginUser(googleUser, setUser);
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('user', JSON.stringify(googleUser));
       
    };
    
    useEffect(() => {
           
            window.google.accounts.id.initialize({
              client_id: "575948866004-i0lapgehq080re6t6rkesqmln6knlhl9.apps.googleusercontent.com",
              callback : handleCallbackResponse
            });
        
            window.google.accounts.id.renderButton(
              document.getElementById("signInDiv"),
              {
                theme: "outline", size: "large"
              }
            )
          }, []);
  return (
    <div id="signInDiv"> </div>
  )
}

export default GoogleLogin;