import { useState, useEffect } from 'react';
import FormItem from '../forms/InputForms';
import FormItemDropdown from '../forms/SelectForm';
import usStates from '../forms/State';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUserByEmail, updateUser } from './SellerService';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [apiError, setApiError] = useState(false);

    const [user, setUser] = useState({
        role: 'Seller',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
       

    });
    const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

    useEffect(() => {

        getUserByEmail(googleUser?.email, setUser, setApiError);
    }, []);

    const [errors, setErrors] = useState({
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''

    });

    const sendProfile = (e) => {
        e.preventDefault();
        console.log(user);
     
        
        updateUser(user, user.id, setApiError)
    };

    const nav = useNavigate();
    
    const cancelProfile = () => {
        nav('/Seller', { replace: true });
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const btn = { backgroundColor: '#242424' };

    return (
        <Container style={btn}>
            <Form>
                <Row>
                    <Form.Group className="mb-3" controlId="streetAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={onChange} value={user?.streetAddress} type="text" placeholder="1234 Main" />
                        <Form.Text className="text-muted">
                            We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="streetAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control onChange={onChange} value={user?.streetAddress2} type="text" placeholder="apt .." />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={onChange} value={user?.state} type="text" placeholder="CA" />
                        </Form.Group>
                        </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="zipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control onChange={onChange} value={user?.zipCode} type="text" placeholder="90210" />
                        </Form.Group>
                    </Col>
                    <Row>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control onChange={onChange} value={user?.phoneNumber} type="text" placeholder="(xxx) xxx--xxxx" />
                        </Form.Group>
                    </Row>
                </Row>



                <Row>
                
                    <Button onClick={sendProfile} variant="primary" type="submit">
                        Update
                    </Button>

                </Row>
                <Row>
                    <Button onClick={cancelProfile} variant="danger" type="submit">
                        Cancel
                    </Button>

                </Row>

            </Form>
        </Container>

    )
}

export default EditProfile