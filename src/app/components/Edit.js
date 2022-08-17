// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Container, Row, Col } from 'react-bootstrap';
// import { useParams } from "react-router-dom";
// import axios from 'axios';


// function Edit() {
//     const {id} = useParams();
//     const url = `https://ecomtrading.azurewebsites.net/Products/${id}`;
//     const [curr, setCurr] = useState(null);


//     useEffect(()=>{
//         axios.get(url).then((res)=>{
//             setCurr(res.data);
//         });
//         console.log(curr);
//     }, [url])
    
    // function submitEdit(){
    //     axios.put(url, newData).then(res=>{
    //         console.log(newData);
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     })
    // };
    // useEffect(() => {
    //     axios.get(url).then((res) => {
    //       setProd(res.data);
    //     });
    //   }, [url]);

    // return (
    //   <Container >
    //     <h1>Edit Product Info</h1>
    //     <Form>
    //     <Row>
    //       <Col>
    //       <Form.Group className="mb-3" controlId="name">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control value={curr.name} type="text" placeholder="Rubber Ducky" />
    //   </Form.Group>
    //       </Col>
    //       <Col>
    //       <Form.Group className="mb-3" controlId="price">
    //       <Form.Label>Price</Form.Label>
    //       <Form.Control type="number" placeholder="100" />
    //     </Form.Group>
    //       </Col>
    //       </Row>
    //       <Row>
    //       <Col>
    //       <Form.Group className="mb-3" controlId="description">
    //       <Form.Label>Description</Form.Label>
    //       <Form.Control  type="text" placeholder="Really Yellow !" />
    //     </Form.Group>
    //       </Col>
    //       </Row>
    //       <Row>
    //       <Col>
    //       <Form.Group className="mb-3" controlId="img">
    //       <Form.Label>Img</Form.Label>
    //       <Form.Control  type="text" placeholder="http://" />
    //     </Form.Group>
    //       </Col>
    //       </Row>
    //       <Row>
    //       <Col>   <Form.Group className="mb-3" controlId="active">
    //       <Form.Check  type="checkbox" label="Active?" />
          {/* <Form.Control onChange={setActive} /> */}
        {/* </Form.Group>
          
          </Col>
          </Row>
          <Row>
  
          <Button variant="primary">
          Update
        </Button>
         
        </Row>       
      </Form>
      </Container>
    )
}

export default Edit */}