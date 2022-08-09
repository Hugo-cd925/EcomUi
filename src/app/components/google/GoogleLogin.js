import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
const GoogleLogin = () => {

    const [user, setUser] = useState({});

    const handleCallbackResponse = (response) => {
        console.log("encoded JWT token:" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        const googleUser = {
          //user properties would go here
          email: userObject.email,
          firstName: userObject.given_name,
          lastName: userObject.family_name
  
        };
        console.log(googleUser);
        //send call to get user by email 
        //if user doesnt exist call create user. 
    };
    useEffect(() => {
        /* global google */
            google.accounts.id.initialize({
              client_id: "575948866004-i0lapgehq080re6t6rkesqmln6knlhl9.apps.googleusercontent.com",
              callback : handleCallbackResponse
            });
        
            google.accounts.id.renderButton(
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