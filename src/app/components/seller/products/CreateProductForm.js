import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container, Row, Col } from 'react-bootstrap';
import './ProductForm.css';
const CreateProductForm = ({onChange, sendProduct, returnDashboard}) => {
    const btn ={backgroundColor: '#242424'};

  return (
    <div>
      
        <Container style={btn}>
        <h1 className='formLabel'>Enter Product Info</h1>
      <Form>
    
      <Row>
        <Col>
        <Form.Group className="mb-1"  controlId="name">
      <Form.Label className='formLabel' >Name</Form.Label>
      <Form.Control onChange={onChange}  type="text" placeholder="Rubber Ducky" />
    </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="price">
        <Form.Label  className='formLabel'>Price</Form.Label>
        <Form.Control onChange={onChange} type="number" placeholder="100" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="description">
        <Form.Label  className='formLabel'>Description</Form.Label>
        <Form.Control onChange={onChange} type="text" placeholder="Really Yellow !" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="img">
        <Form.Label  className='formLabel'>Img</Form.Label>
        <Form.Control onChange={onChange} type="text" placeholder="http://" />
      </Form.Group>
        </Col>
        </Row>
        
        <Row>
        <Button onClick={sendProduct} variant="primary">
        Create
      </Button>
       
      </Row>
      <Row>
        <Button onClick={returnDashboard} variant="danger">Cancel</Button>
      </Row>
     
    </Form>
    </Container>
        
        </div>
  )
}

export default CreateProductForm