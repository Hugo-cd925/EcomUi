import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createProduct } from '../products/ProductService';

const PostProduct = () => {
  
  const [product, setProduct] = useState({
    name:'',
    active: false,
    price: 0,
    description:'',
    img : '',
    sellerId: 4,
    sellerEmail:'yonkoh925@gmail.com',
    categId: 0
  });

  const [apiError, setApiError] = useState(false);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
};

const sendProduct = () => {
  console.log(product);
  createProduct(product, setApiError);
}

// const setActive=()=>{
//   setProduct({ ...product, active: true });
// };
  return (
    <div><Form> <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control  onChange={onChange} type="text" placeholder="Rubber Ducky" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label>Price</Form.Label>
    <Form.Control  onChange={onChange} type="number" placeholder="100" />
  </Form.Group>

<Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control  onChange={onChange} type="text" placeholder="Really Yellow !" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="img">
    <Form.Label>Img</Form.Label>
    <Form.Control  onChange={onChange} type="text" placeholder="http://" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="active">
        <Form.Check type="checkbox" label="Active?" />
        {/* <Form.Control onChange={setActive} /> */}
      </Form.Group>

  {/* <Form.Group className="mb-3" controlId="categId">
    <Form.Label>Category</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="Toys" />
  </Form.Group> */}

  <Button onClick={sendProduct} variant="primary" type="submit">
    Create
  </Button> 
</Form></div>
  )
}

export default PostProduct