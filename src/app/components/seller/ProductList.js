import {useEffect} from 'react'

import { Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {

    const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

    useEffect(() => {
        
        getUserByEmail(googleUser?.email, setUser, setApiError);
    }, [user]);

  return (
    <>
    <Container>
    <div>ProductList</div>

    <Row>Active Product(s)</Row>
    <Row></Row>
    </Container>
     

    </>
  )
}

export default ProductList