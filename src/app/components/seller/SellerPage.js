import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from './SellerService';
import Constants from '../../../ultil/Constants';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SellerPage = () => {

    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(false);

    const googleUser = JSON.parse(window.sessionStorage.getItem("user"));
    const loggedIn = JSON.parse(window.sessionStorage.getItem('loggedIn'));  

    const Navigate = useNavigate();

    useEffect(() => {
        if (loggedIn === null ){
           return Navigate("/SignIn");
        }
     },[loggedIn]);

    useEffect(() => {
        getUserByEmail(googleUser?.email, setUser, setApiError);
    }, [user]);
   
     

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
        Navigate(`/Seller/Edit/${id}`);
        
    };

    const HandleListedProduct =()=>{
        Navigate('Seller/Products');
    };

    return (
        <>

            {apiError && (
                <p data-testid="errMsg">
                    {Constants.API_ERROR}
                </p>
            )}
            
            
            <div>
                <div>

                    <h1>   {user?.firstName}</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                    <div>
                        <Button onClick={HandleCreate}>Create Product</Button>
                       
                    </div>
                    </Col>
                    <Col>
                    {/* <Button type="button" onClick={HandleListedProduct} >
                        Listed Products
                    </Button> */}
                    </Col>
                    <Col>
                    <div>
                        <Button type='button' onClick={() =>
                            handleProfile(user.id)
                        }>Edit Profile</Button>

                    </div>
                    </Col>
                    </Row>
                  
                </Container>


            </div>

        </>
    )
}

export default SellerPage;