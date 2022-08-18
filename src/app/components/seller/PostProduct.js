import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createProduct } from '../products/ProductService';
import { Container, Row, Col } from 'react-bootstrap';
const PostProduct = () => {


  const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

  const [product, setProduct] = useState({
    name: '',
    active: false,
    price: 0,
    description: '',
    img: '',
    sellerEmail: googleUser.email,
    categId: 0
  });

  const [apiError, setApiError] = useState(false);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleClick=()=>{
   
    setProduct({...product, active: true})
    console.log(product);
  };

  const sendProduct = () => {
    console.log(product);
    createProduct(product, setApiError);
  }

  // const setActive=()=>{
  //   setProduct({ ...product, active: true });
  // };
  const btn ={backgroundColor: 'white'};
  return (
    <Container style={btn}>
      <h1>Enter Product Info</h1>
      <Form>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={onChange} type="text" placeholder="Rubber Ducky" />
    </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={onChange} type="number" placeholder="100" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={onChange} type="text" placeholder="Really Yellow !" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="img">
        <Form.Label>Img</Form.Label>
        <Form.Control onChange={onChange} type="text" placeholder="http://" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>   <Form.Group className="mb-3" controlId="active">
        <Form.Check onClick={handleClick} type="checkbox" label="Active?" />
        {/* <Form.Control onChange={setActive} /> */}
      </Form.Group>
        
        </Col>
        </Row>
        <Row>

        <Button onClick={sendProduct} variant="primary">
        Create
      </Button>
       
      </Row>
   

      

     

    

   

      {/* <Form.Group className="mb-3" controlId="categId">
    <Form.Label>Category</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="Toys" />
  </Form.Group> */}
      {/* type="submit" */}
     
    </Form>
    </Container>
  )
}

export default PostProduct