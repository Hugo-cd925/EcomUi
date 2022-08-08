import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const PostProduct = () => {
  const [product, setProduct] = useState({
    name:'',

  });

  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
};
const postProduct = (e) => {
  console.log(product);
}
  return (
    <div><Form> <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="Rubber Ducky" />
  </Form.Group>

<Form.Group className="mb-3" controlId="name">
    <Form.Label>Description</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="Really Yellow !" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Img</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="http://" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Active?" />
      </Form.Group>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Category</Form.Label>
    <Form.Control  onChange={onChange} type="email" placeholder="Toys" />
  </Form.Group>
  <Button onClick={postProduct} variant="primary" type="submit">
    Create
  </Button> 
</Form></div>
  )
}

export default PostProduct